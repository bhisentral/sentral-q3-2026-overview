import Nav from "./components/Nav";
import RevealObserver from "./components/RevealObserver";
import CaseStudyCard from "./components/CaseStudyCard";
import NoiTrackRecord from "./components/NoiTrackRecord";
import {
  networkStats,
  markets,
  partners,
  leadership,
  leadershipStats,
  valueTiers,
  hospitalityPillars,
  flexNetwork,
  yieldWaterfall,
  operationalCaseStudies,
  codevCaseStudies,
  trackRecords,
  ssp,
  investmentCriteria,
  existingMarkets,
  targetMarkets,
  galleryProperties,
} from "./lib/content";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />

      {/* ---- HERO ---- */}
      <section id="hero">
        <div className="hero-bg" style={{ backgroundImage: "url(/images/hero_towers.png)" }} />
        <div className="hero-ov" />
        <div className="hero-content">
          <p className="hero-eyebrow">Sentral Management · Private &amp; Strictly Confidential</p>
          <span className="hero-rule" />
          <h1 className="hero-title">
            Sentral Overview
            <br />
            <em>Q3 2026</em>
          </h1>
          <p className="hero-sub">
            Sentral is the leading full-building residential hospitality operator, maximizing NOI
            lift for Class A apartment owners through superior performance and enhanced experience.
          </p>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">$7.0B+</div>
              <div className="hero-stat-label">Assets Under Management</div>
            </div>
            <div>
              <div className="hero-stat-num">43</div>
              <div className="hero-stat-label">Connected Communities</div>
            </div>
            <div>
              <div className="hero-stat-num">23</div>
              <div className="hero-stat-label">Vibrant Cities</div>
            </div>
            <div>
              <div className="hero-stat-num">500</div>
              <div className="hero-stat-label">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- MISSION ---- */}
      <section className="surf-cream">
        <div className="sec" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ textAlign: "center" }}>Sentral Management</p>
          <span className="rule" style={{ marginLeft: "auto", marginRight: "auto" }} />
          <h2 className="s-title reveal" style={{ maxWidth: 920, marginLeft: "auto", marginRight: "auto", fontSize: "clamp(26px,3.4vw,38px)" }}>
            Sentral is the leading full-building residential hospitality operator, maximizing{" "}
            <em>NOI lift</em> for Class A apartment owners through superior performance and enhanced
            experience.
          </h2>
        </div>
      </section>

      {/* ---- NETWORK ---- */}
      <section id="network" className="surf-cream2">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Management</p>
          <span className="rule" />
          <h2 className="s-title">Sentral Network Established &amp; Expanding</h2>
          <p className="s-body">Proven results across forty-three active communities and growing.</p>

          <div className="kpi-grid kpi-g4" style={{ marginTop: 34 }}>
            {networkStats.map((s) => (
              <div className="kpi-cell" key={s.tag}>
                <div className="kk">{s.tag}</div>
                <div className="kn">{s.num}</div>
                {s.sub && <div className="ks">{s.sub}</div>}
              </div>
            ))}
          </div>

          <div className="mkt-wrap">
            <div className="mkt-tag existing"><i className="dot" />Active Markets</div>
            <div className="mkt-chips">
              {markets.map((m) => (
                <span className="mkt-chip" key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- PARTNERS / LOGOS ---- */}
      <section className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Management</p>
          <span className="rule" />
          <h2 className="s-title">Bluechip Investors, Clients and Lenders</h2>

          <div className="logowall-group">
            <p className="lw-tag">Investors + Board Members</p>
            <div className="lw-row">{partners.investors.map((n) => <span key={n}>{n}</span>)}</div>
          </div>
          <div className="logowall-group">
            <p className="lw-tag">Clients / Owners</p>
            <div className="lw-row">{partners.clients.map((n) => <span key={n}>{n}</span>)}</div>
          </div>
          <div className="logowall-group">
            <p className="lw-tag">Lenders</p>
            <div className="lw-row">{partners.lenders.map((n) => <span key={n}>{n}</span>)}</div>
          </div>
        </div>
      </section>

      {/* ---- LEADERSHIP ---- */}
      <section id="leadership" className="surf-cream2">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Management</p>
          <span className="rule" />
          <h2 className="s-title">Our Leadership Team</h2>
          <p className="s-body">
            Innovative players in the multifamily and hospitality space. Sentral associates have
            extensive industry experience, executing strategies that maximize multifamily &amp;
            short-term rental operations, while delivering multifamily controllable NOI margins.
          </p>

          <div className="team-grid">
            {leadership.map((p) => (
              <div className="tm" key={p.name}>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${p.photo}`} alt={p.name} />
                </div>
                <div>
                  <div className="nm">{p.name}</div>
                  <div className="ti">{p.title} · {p.years}</div>
                  <div className="yr">{p.prior}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lead-stats">
            {leadershipStats.map((s) => (
              <div className="lead-stat" key={s.label}>
                <div className="ln">{s.num}</div>
                <div className="ll">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- VALUE CREATION MODEL ---- */}
      <section id="value-model" className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Management</p>
          <span className="rule" />
          <h2 className="s-title">The Sentral Value Creation Model</h2>
          <p className="s-body">
            Sentral&rsquo;s differentiated management and systems allows owners to &ldquo;dial
            up&rdquo; NOI through integrated hospitality services and flexible stays.
          </p>

          <div className="tier-grid">
            {valueTiers.map((t) => (
              <div className={`tier-col${t.muted ? " muted" : ""}`} key={t.name}>
                <div className="tier-h">{t.name}</div>
                <ul>
                  {t.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="lift-track">
            <div className="lift-label">NOI Lift</div>
            <div className="lift-line">
              {valueTiers.map((t) => (
                <div className={`lift-node${t.lift ? " on" : ""}`} key={t.name}>
                  <div className={`lift-dot${!t.lift ? " start" : ""}`} />
                  <div className="lift-pct">{t.lift || "—"}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- RESIDENT EXPERIENCE ---- */}
      <section className="surf-cream2">
        <div className="sec reveal">
          <div className="app-wrap">
            <div className="app-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/phone_mockup.png" alt="Sentral Life resident app" />
            </div>
            <div>
              <p className="eyebrow">Sentral Management</p>
              <span className="rule" />
              <h2 className="s-title">
                Sentral creates value for owners and the best experience for residents.
              </h2>
              <p className="s-body">
                Curated daily programming which drives rent premiums and elite reputation scores.
              </p>
              <div className="app-kpis">
                <div className="app-kpi">
                  <div className="ak">4.9<span>/5.0</span></div>
                  <div className="al">Stars, Sentral Life resident app</div>
                </div>
                <div className="app-kpi">
                  <div className="ak">90<span>%+</span></div>
                  <div className="al">Adoption rate among residents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- FULL SERVICE HOSPITALITY ---- */}
      <div className="split2">
        <div className="si">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events_signage.png" alt="Sentral weekly events programming" />
        </div>
        <div className="sc">
          <p className="eyebrow">Sentral Management</p>
          <span className="rule" />
          <h2 className="s-title">Full Service Residential Hospitality</h2>
          {hospitalityPillars.map((p, i) => (
            <div className="pillar" key={p.title}>
              <div className="pn">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h5>{p.title}</h5>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- FLEXIBLE & FURNISHED NETWORK ---- */}
      <section className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Management</p>
          <span className="rule" />
          <h2 className="s-title">Flexible &amp; Furnished Residential Network</h2>

          <div className="tier-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {flexNetwork.pillars.map((p) => (
              <div className="tier-col" key={p.title}>
                <div className="tier-h" style={{ fontSize: 16 }}>{p.title}</div>
                <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--tx-body)" }}>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="kpi-grid kpi-g4" style={{ marginTop: 30 }}>
            {flexNetwork.stats.map((s) => (
              <div className="kpi-cell dark" key={s.label}>
                <div className="kn">{s.num}</div>
                <div className="ks">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- DIVIDER ---- */}
      <div className="divider">
        <div className="in">
          <p className="deyebrow">Sentral Value Creation</p>
          <h3>Operational discipline that compounds into <em>measurable NOI lift.</em></h3>
        </div>
      </div>

      {/* ---- YIELD WATERFALL ---- */}
      <section className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Value Creation</p>
          <span className="rule" />
          <h2 className="s-title">Illustrative Unlevered Yields &amp; Premiums</h2>
          <div className="wf-wrap">
            {yieldWaterfall.map((w) => (
              <div className="wf-col" key={w.name}>
                {w.delta && <div className="wf-delta">{w.delta}</div>}
                <div className="wf-bar-track">
                  <div
                    className={`wf-bar${w.delta ? "" : " base"}`}
                    style={{ height: `${(w.value / 6.8) * 100}%` }}
                  >
                    <span className="wf-bar-val">{w.value.toFixed(1)}%</span>
                  </div>
                </div>
                <div className="wf-name">{w.name}</div>
                <p className="wf-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- OPERATIONAL EXPERTISE ---- */}
      <section className="surf-cream2">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Value Creation</p>
          <span className="rule" />
          <h2 className="s-title">Operational Expertise</h2>
          <p className="s-body">
            Sentral delivers value-add operational upside in core multifamily assets based on a
            client&rsquo;s desired business model.
          </p>
          <div className="dev-grid">
            {operationalCaseStudies.map((s) => <CaseStudyCard study={s} key={s.name} />)}
          </div>
        </div>
      </section>

      {/* ---- CO-DEVELOPMENT EXPERTISE ---- */}
      <section className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Value Creation</p>
          <span className="rule" />
          <h2 className="s-title">Co-Development Expertise</h2>
          <p className="s-body">
            Sentral amplifies value creation by partnering with developers early to shape their
            projects, programming and operating strategy.
          </p>
          <div className="dev-grid">
            {codevCaseStudies.map((s) => <CaseStudyCard study={s} key={s.name} />)}
          </div>
        </div>
      </section>

      {/* ---- TRACK RECORD ---- */}
      <section id="track-record" className="surf-cream2">
        <div className="sec" style={{ display: "flex", flexDirection: "column", gap: 88 }}>
          {trackRecords.map((r) => <NoiTrackRecord record={r} key={r.id} />)}
        </div>
      </section>

      {/* ---- DIVIDER ---- */}
      <div className="divider">
        <div className="in">
          <p className="deyebrow">Sentral Strategic Partners</p>
          <h3>Full alignment of <em>capital, ownership &amp; operations.</em></h3>
        </div>
      </div>

      {/* ---- STRATEGIC PARTNERS ---- */}
      <section id="partners" className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Strategic Partners</p>
          <span className="rule" />
          <h2 className="s-title">Sentral Strategic Partners (&ldquo;SSP&rdquo;)</h2>

          <div className="dcard-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="dcard">
              <div className="dbody">
                <div className="dh"><h4>Investments</h4></div>
                <div className="lw-row" style={{ marginBottom: 16 }}>
                  {ssp.investments.functions.map((f) => (
                    <span key={f} style={{ fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", background: "var(--cream-warm)", border: "1px solid var(--cloud)", padding: "6px 12px" }}>{f}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 32, marginTop: 10 }}>
                  {ssp.investments.partners.map((p) => (
                    <div key={p.name}>
                      <div style={{ fontFamily: "var(--f-display)", fontSize: 22, color: "var(--tx)" }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: "var(--tx-muted)", marginTop: 6 }}>{p.aum}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dcard">
              <div className="dbody">
                <div className="dh"><h4>Operations</h4></div>
                <div className="lw-row" style={{ marginBottom: 16 }}>
                  {ssp.operations.functions.map((f) => (
                    <span key={f} style={{ fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", background: "var(--cream-warm)", border: "1px solid var(--cloud)", padding: "6px 12px" }}>{f}</span>
                  ))}
                </div>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 22, color: "var(--tx)", marginBottom: 10 }}>SEN+RAL</div>
                <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "var(--tx-body)" }}>{ssp.operations.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- INVESTMENT CRITERIA ---- */}
      <section className="surf-cream2">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Strategic Partners</p>
          <span className="rule" />
          <h2 className="s-title">Investment Criteria + Market Coverage</h2>

          <table className="crit-table" style={{ marginTop: 24 }}>
            <tbody>
              {investmentCriteria.map((c) => (
                <tr key={c.k}>
                  <th>{c.k}</th>
                  <td>
                    <ul>{c.v.map((line) => <li key={line}>{line}</li>)}</ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mkt-wrap">
            <div className="mkt-tag existing"><i className="dot" />Existing Markets</div>
            <div className="mkt-chips">
              {existingMarkets.map((m) => <span className="mkt-chip" key={m}>{m}</span>)}
            </div>
            <div className="mkt-tag target"><i className="dot" />New / Target Markets</div>
            <div className="mkt-chips">
              {targetMarkets.map((m) => <span className="mkt-chip" key={m}>{m}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ---- PORTFOLIO GALLERY ---- */}
      <section className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Portfolio</p>
          <span className="rule" />
          <h2 className="s-title">A Look Across the Portfolio</h2>
          <div className="gallery-grid">
            {galleryProperties.map((g) => (
              <div className="gal-card" key={g.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/${g.photo}`} alt={g.name} />
                <div className="gal-cap">{g.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CLOSE ---- */}
      <section id="contact" className="reveal">
        <div id="close">
          <p className="eyebrow">Sentral Management</p>
          <span className="rule" />
          <h2 className="s-title">Let&rsquo;s build lasting value together.</h2>
          <div className="contacts">
            <div className="contact">
              <div className="cn">Roman Speron</div>
              <div className="cr">Chief Executive Officer</div>
              <div className="cc">Sentral Management</div>
            </div>
            <div className="contact">
              <div className="cn">Nitesh Gandhi</div>
              <div className="cr">Chief Commercial Officer</div>
              <div className="cc">Sentral Management</div>
            </div>
          </div>
          <div className="close-foot">Sentral · Q3 2026</div>
        </div>
        <div className="confid">Private &amp; Strictly Confidential — Not for Distribution</div>
      </section>
    </>
  );
}
