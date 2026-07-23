function fmtM(n) {
  return `$${(n / 1_000_000).toFixed(0)}M`;
}
function fmtFull(n) {
  return `$${n.toLocaleString("en-US")}`;
}

export default function NoiTrackRecord({ record }) {
  const { title, subtitle, uplift, axisMax, rows, total, footnotes, hasFurnishedCol } = record;
  const [, sentralTotal, traditionalTotal] = total;
  const traditionalPct = (traditionalTotal / (axisMax * 1_000_000)) * 100;
  const sentralPct = (sentralTotal / (axisMax * 1_000_000)) * 100;
  const axisSteps = 5;
  const axisLabels = Array.from({ length: axisSteps + 1 }, (_, i) =>
    fmtM((axisMax * 1_000_000 * (axisSteps - i)) / axisSteps)
  );

  return (
    <div className="reveal">
      <p className="eyebrow">Sentral Value Creation</p>
      <span className="rule" />
      <h3 className="s-title">{title}</h3>
      <p className="s-body">{subtitle}</p>

      <div className="noi-wrap">
        <div className="noi-chart">
          <div className="noi-uplift">{uplift} Uplift</div>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 280, fontSize: 9, color: "var(--tx-muted)", paddingBottom: 1 }}>
              {axisLabels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
            <div className="noi-bars" style={{ flex: 1 }}>
              <div className="noi-bar-col">
                <div className="noi-bar" style={{ height: `${traditionalPct}%` }} />
              </div>
              <div className="noi-bar-col">
                <div className="noi-bar hi" style={{ height: `${sentralPct}%` }} />
              </div>
            </div>
          </div>
          <div className="noi-legend">
            <span><i className="sw trad" />Traditional</span>
            <span><i className="sw sen" />Sentral</span>
          </div>
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: 10 }}>NOI 2025</p>
          <table className="noi-table">
            <thead>
              <tr>
                <th></th>
                <th className="num">Sentral</th>
                <th className="num">Traditional</th>
                {hasFurnishedCol && <th className="num">% Furnished</th>}
                <th className="num">Uplift</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td>{r[0]}</td>
                  <td className="num">{fmtFull(r[1])}</td>
                  <td className="num">{fmtFull(r[2])}</td>
                  {hasFurnishedCol && <td className="num">{r[4]}</td>}
                  <td className="num">{r[3]}</td>
                </tr>
              ))}
              <tr className="total">
                <td>{total[0]}</td>
                <td className="num">{fmtFull(total[1])}</td>
                <td className="num">{fmtFull(total[2])}</td>
                {hasFurnishedCol && <td className="num">{total[4]}</td>}
                <td className="num">{total[3]}</td>
              </tr>
            </tbody>
          </table>
          {footnotes.map((f) => (
            <p key={f} className="noi-footnote">{f}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
