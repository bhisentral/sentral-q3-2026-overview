"use client";

import { useRef, useState } from "react";

const CX = 300, CY = 300, R = 200, R_IN = 184;
const STOP_ANGLES = [180, 120, 60, 0]; // degrees, left -> right over the top
// Cropped tightly to the semicircle + pivot so no dead space remains once
// the readout text lives below the SVG instead of floating inside it.
const VIEWBOX = "0 82 600 246";

function pt(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY - r * Math.sin(rad) };
}

function angleFromPointer(svg, clientX, clientY) {
  const p = svg.createSVGPoint();
  p.x = clientX;
  p.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return 90;
  const loc = p.matrixTransform(ctm.inverse());
  let deg = (Math.atan2(CY - loc.y, loc.x - CX) * 180) / Math.PI;
  if (deg < 0) deg = loc.x < CX ? 180 : 0;
  return Math.max(0, Math.min(180, deg));
}

function nearestStop(angleDeg) {
  const t = (180 - angleDeg) / 180;
  return Math.max(0, Math.min(3, Math.round(t * 3)));
}

export default function Dial({ stages }) {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef(null);
  const stage = stages[active];

  // The needle and its handle always terminate exactly on the arc (radius
  // R) — same point as the progress arc's endpoint — so the handle reads
  // as "the moving tip of the arc," not a marker floating inside the dial.
  const needleAngle = STOP_ANGLES[active];
  const tip = pt(needleAngle, R);
  const arcStart = pt(180, R);

  const progressPath =
    active === 0
      ? `M ${arcStart.x} ${arcStart.y} A ${R} ${R} 0 0 0 ${arcStart.x} ${arcStart.y}`
      : `M ${arcStart.x} ${arcStart.y} A ${R} ${R} 0 0 1 ${tip.x} ${tip.y}`;

  function handlePointerDown(e) {
    const svg = svgRef.current;
    if (!svg) return;
    svg.setPointerCapture(e.pointerId);
    setDragging(true);
    const angle = angleFromPointer(svg, e.clientX, e.clientY);
    setActive(nearestStop(angle));
  }
  function handlePointerMove(e) {
    if (!dragging) return;
    const svg = svgRef.current;
    if (!svg) return;
    const angle = angleFromPointer(svg, e.clientX, e.clientY);
    setActive(nearestStop(angle));
  }
  function endDrag(e) {
    if (svgRef.current && e.pointerId != null) {
      try {
        svgRef.current.releasePointerCapture(e.pointerId);
      } catch {}
    }
    setDragging(false);
  }

  const maxYield = 7.5;

  return (
    <div className="dial-grid">
      <div className="gauge-box">
        {/* Layer 1: arc + ticks + needle + handle. All geometry, no text —
            so nothing here can ever sit under the readout below it. */}
        <svg
          ref={svgRef}
          className={`gauge-svg${dragging ? " drag" : ""}`}
          viewBox={VIEWBOX}
          aria-label="NOI value creation dial"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <defs>
            <linearGradient id="arcG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#3a4654" />
              <stop offset="1" stopColor="#5C8CA0" />
            </linearGradient>
          </defs>
          <path
            d={`M ${arcStart.x} ${arcStart.y} A ${R} ${R} 0 0 1 ${pt(0, R).x} ${pt(0, R).y}`}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path d={progressPath} fill="none" stroke="url(#arcG)" strokeWidth="22" strokeLinecap="round" />
          <g>
            {STOP_ANGLES.map((a) => {
              const outer = pt(a, R);
              const inner = pt(a, R_IN);
              return (
                <line
                  key={a}
                  x1={outer.x}
                  y1={outer.y}
                  x2={inner.x}
                  y2={inner.y}
                  stroke="rgba(255,255,255,.5)"
                  strokeWidth="2"
                />
              );
            })}
          </g>
          <g>
            <line x1={CX} y1={CY} x2={tip.x} y2={tip.y} stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <circle cx={CX} cy={CY} r="14" fill="#5C8CA0" stroke="#282828" strokeWidth="3" />
            {/* Draggable handle — sits ON the arc at the tip of the active segment. */}
            <circle cx={tip.x} cy={tip.y} r="11" fill="#fff" stroke="#5C8CA0" strokeWidth="3" />
          </g>
        </svg>

        {/* Layer 2: the readout. A normal block below the gauge — never
            absolutely positioned over the arc, so it can't overlap the
            needle at any angle. */}
        <div className="dial-callout">
          <div className="gc-tag">NOI Lift</div>
          <div className="gc-num">
            <span>{active > 0 ? "+" : ""}</span>
            <span className="noival">{stage.noiLift}</span>
            <span className="pct">%</span>
          </div>
          <div className="gc-lbl">vs. traditional multifamily</div>
        </div>

        <div className="tier-btns">
          {stages.map((s, i) => (
            <button
              key={s.key}
              type="button"
              className={`tier-btn${i === active ? " on" : ""}`}
              onClick={() => setActive(i)}
            >
              {s.tierLabel}
            </button>
          ))}
        </div>
        <div className="dial-hint">Drag the handle along the arc, or tap a tier</div>
      </div>

      <div className="readout">
        <div className="ro-name">{stage.name}</div>
        <p className="ro-desc">{stage.desc}</p>
        <div className="ro-metrics">
          <div className="ro-metric">
            <div className="rm-k">Rent Premium</div>
            <div className="rm-v">{stage.rentPremium}</div>
          </div>
          <div className="ro-metric">
            <div className="rm-k">Unlevered Yield</div>
            <div className="rm-v">
              {stage.yield.toFixed(1)}
              <span>%</span>
            </div>
          </div>
          <div className="ro-metric">
            <div className="rm-k">NOI Lift</div>
            <div className="rm-v">
              {stage.noiLift}
              <span>%</span>
            </div>
          </div>
        </div>
        <ul className="ro-feats">
          {stage.feats.map((f) => (
            <li key={f} className={stage.dim ? "dim" : ""}>
              {f}
            </li>
          ))}
        </ul>

        <div className="yld">
          <div className="yld-head">
            <h4>Illustrative Unlevered Yields &amp; Premiums</h4>
            <div className="note">Illustrative · Page 10 · Not a Forecast</div>
          </div>
          <div className="yld-bars">
            {stages.map((s, i) => (
              <div className={`yb${i === active ? " on" : ""}`} key={s.key}>
                <div className="bar" style={{ height: `${(s.yield / maxYield) * 100}%` }}>
                  <span className="bv">{s.yield.toFixed(1)}%</span>
                </div>
                <div className="bl">{s.tierLabel}</div>
              </div>
            ))}
          </div>
          <div className="yld-axis">
            Stabilized unlevered yield by operating model — same asset, no incremental downside risk
          </div>
        </div>
      </div>
    </div>
  );
}
