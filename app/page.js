import Nav from "./components/Nav";
import RevealObserver from "./components/RevealObserver";
import CaseStudyCard from "./components/CaseStudyCard";
import NoiTrackRecord from "./components/NoiTrackRecord";
import Dial from "./components/Dial";
import Divider from "./components/Divider";
import {
  networkStats,
  networkMapImage,
  investorLogoWall,
  leadership,
  leadershipStats,
  dialStages,
  hospitalityPillars,
  flexNetwork,
  operationalCaseStudies,
  codevCaseStudies,
  trackRecords,
  ssp,
  investmentCriteria,
  galleryProperties,
  sections,
} from "./lib/content";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />

      {/* ---- HERO ---- */}
      <section id="hero">
        <div className="hero-bg" style={{ backgroundImage: "url(/images/hero_towers.jpg)" }} />
        <div className="hero-ov" />
        <div className="hero-content">
          <p className="hero-eyebrow">Sentral · Company Overview · Q3 2026</p>
          <span className="hero-rule" />
          <h1 className="hero-title">
            We don&rsquo;t just manage buildings.
            <br />
            <em>We dial up the NOI.</em>
          </h1>
          <p className="hero-sub">
            Sentral is the leading full-building residential hospitality operator, maximizing NOI
            lift for Class A apartment owners through superior performance and an enhanced
            resident experience.
          </p>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">$7.0B+</div>
              <div className="hero-stat-label">Assets Under Management</div>
            </div>
            <div>
              <div className="hero-stat-num">43+</div>
              <div className="hero-stat-label">Communities · 23 Cities</div>
            </div>
            <div>
              <div className="hero-stat-num">13K</div>
              <div className="hero-stat-label">Units · 15% Furnished</div>
            </div>
            <div>
              <div className="hero-stat-num">$450M</div>
              <div className="hero-stat-label">Total Revenue Per Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- STAT BAND ---- */}
      <div className="statband">
        <div className="row">
          {networkStats.map((s) => (
            <div className="sb-item reveal" key={s.tag}>
              <div className="sb-tag">{s.tag}</div>
              <div className="sb-num">{s.num}</div>
              {s.sub && <div className="sb-lbl">{s.sub}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* ---- NETWORK ---- */}
      <Divider section={sections.network} />
      <section id="network" className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Coast to Coast</p>
          <span className="rule" />
          <h2 className="s-title">
            A national platform — <em>proven across 43 communities.</em>
          </h2>
          <p className="s-body">
            Sentral operates a connected portfolio of Class A communities in 23 of the country&rsquo;s
            most dynamic markets, with six additional ground-up developments in the pipeline — a
            single operating standard delivering superior results at scale.
          </p>
          <div className="map-intro" />
          <div className="map-img reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/${networkMapImage}`} alt="Sentral national network map" />
          </div>
        </div>
      </section>

      {/* ---- PARTNERS / LOGOS ---- */}
      <Divider section={sections.partners} />
      <section id="partners" className="surf-cream2">
        <div className="sec reveal">
          <p className="eyebrow">Institutional Partners</p>
          <span className="rule" />
          <h2 className="s-title">
            Sentral manages capital <em>for the most sophisticated owners in the country.</em>
          </h2>
          <p className="s-body">
            Our investors, clients, and lenders are leading institutions who entrust Sentral with
            their most important assets — from coast to coast and across the risk spectrum.
          </p>
          <div className="inv-img reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/${investorLogoWall}`} alt="Sentral investors, board members, clients, owners and lenders" />
          </div>
        </div>
      </section>

      {/* ---- LEADERSHIP ---- */}
      <Divider section={sections.leadership} />
      <section id="leadership" className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Strategy, Operations, Development &amp; Analysis</p>
          <span className="rule" />
          <h2 className="s-title">
            Innovative players in <em>multifamily and hospitality.</em>
          </h2>

          <div className="lead-stats">
            <div className="lead-stat">
              <div className="ln">72%</div>
              <div className="ll">Employees with multifamily experience</div>
            </div>
            <div className="lead-stat">
              <div className="ln">21 yrs</div>
              <div className="ll">Average years of industry experience</div>
            </div>
            <div className="lead-stat">
              <div className="ln">500</div>
              <div className="ll">Employees nationwide</div>
            </div>
          </div>

          <div className="team-grid">
            {leadership.map((p) => (
              <div className="tm" key={p.name}>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${p.photo}`} alt={p.name} />
                </div>
                <div className="info">
                  <div className="nm">{p.name}</div>
                  <div className="ti">{p.title}</div>
                  <div className="yr">{p.years}</div>
                  <div className="lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/${p.logo}`} alt="Prior experience" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- VALUE CREATION MODEL (INTERACTIVE DIAL) ---- */}
      <Divider section={sections.valueModel} />
      <section id="dial">
        <div className="in">
          <p className="reveal eyebrow on-dark">Interactive · Drag the Dial</p>
          <span className="reveal rule on-dark" />
          <h2 className="reveal s-title" style={{ color: "#fff" }}>
            Differentiated management and systems
            <br />
            <em>let owners dial up returns — step by step.</em>
          </h2>
          <p className="reveal s-body" style={{ color: "var(--on-dark)" }}>
            From best-in-class base management, to full-service hospitality, to flexible furnished
            living. Each turn of the dial layers on additional rent premiums, NOI lift, and
            unlevered yield, with no incremental downside risk.
          </p>
          <div className="reveal">
            <Dial stages={dialStages} />
          </div>
        </div>
      </section>

      {/* ---- RESIDENT EXPERIENCE ---- */}
      <Divider section={sections.residentExperience} />
      <section className="surf-cream2">
        <div className="sec reveal">
          <div className="app-wrap">
            <div className="app-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/phone_mockup_full.png" alt="Sentral Life resident app" />
            </div>
            <div>
              <p className="eyebrow">Sentral Life</p>
              <span className="rule" />
              <h2 className="s-title">
                Value for owners, <em>and the best experience for residents.</em>
              </h2>
              <p className="s-body">
                Curated daily programming and an integrated digital platform — Sentral Life — drive
                rent premiums and elite reputation scores. Residents book amenities, services,
                events, and flexible stays from a single app, turning engagement into measurable
                revenue and retention.
              </p>
              <div className="app-kpis">
                <div className="app-kpi">
                  <div className="ak">
                    4.9<span>/5.0</span>
                  </div>
                  <div className="al">Resident star rating</div>
                </div>
                <div className="app-kpi">
                  <div className="ak">
                    90<span>%+</span>
                  </div>
                  <div className="al">Adoption of the Sentral Life app</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- FULL SERVICE HOSPITALITY ---- */}
      <Divider section={sections.hospitality} />
      <div className="split2">
        <div className="si">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/quincy_rooftop_fitness.jpg" alt="Rooftop fitness class at Quincy" />
        </div>
        <div className="sc">
          <p className="eyebrow">Services That Drive Revenue</p>
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
      <Divider section={sections.flexNetwork} />
      <section className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Furnished, Flexible Living</p>
          <span className="rule" />
          <h2 className="s-title">
            Medium- and short-stay revenue <em>that traditional multifamily leaves behind.</em>
          </h2>
          <p className="s-body">
            Powered by an in-house revenue management, sales, and marketing engine and a national
            corporate-account base.
          </p>

          <div className="kpi-grid kpi-g4" style={{ marginTop: 30 }}>
            {flexNetwork.stats.map((s) => (
              <div className="kpi-cell dark" key={s.label}>
                <div className="kn">{s.num}</div>
                <div className="ks">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="tier-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: 34 }}>
            {flexNetwork.pillars.map((p) => (
              <div className="tier-col" key={p.title}>
                <div className="tier-h" style={{ fontSize: 16 }}>
                  {p.title}
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--tx-body)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- OPERATIONAL EXPERTISE ---- */}
      <Divider section={sections.operational} />
      <section className="surf-cream2">
        <div className="sec reveal">
          <p className="eyebrow">The Model, Applied</p>
          <span className="rule" />
          <h2 className="s-title">Operational Expertise</h2>
          <p className="s-body">
            Sentral delivers value-add operational upside in core multifamily assets based on a
            client&rsquo;s desired business model.
          </p>
          <div className="dev-grid">
            {operationalCaseStudies.map((s) => (
              <CaseStudyCard study={s} key={s.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- CO-DEVELOPMENT EXPERTISE ---- */}
      <Divider section={sections.codev} />
      <section className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Engaged Early</p>
          <span className="rule" />
          <h2 className="s-title">Co-Development Expertise</h2>
          <p className="s-body">
            Sentral amplifies value creation by partnering with developers early to shape their
            projects, programming and operating strategy.
          </p>
          <div className="dev-grid">
            {codevCaseStudies.map((s) => (
              <CaseStudyCard study={s} key={s.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- TRACK RECORD ---- */}
      <Divider section={sections.trackRecord} />
      <section id="track-record" className="surf-cream2">
        <div className="sec" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {trackRecords.map((r) => (
            <NoiTrackRecord record={r} key={r.id} />
          ))}
        </div>
      </section>

      {/* ---- STRATEGIC PARTNERS ---- */}
      <Divider section={sections.ssp} />
      <section id="partners-ssp" className="surf-cream">
        <div className="sec reveal">
          <p className="eyebrow">Sentral Strategic Partners</p>
          <span className="rule" />
          <h2 className="s-title">Sentral Strategic Partners (&ldquo;SSP&rdquo;)</h2>

          <div className="ssp-wrap">
            <div className="dcard-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="dcard">
                <div className="dbody">
                  <p className="ssp-tag">Capital Partners</p>
                  <div className="dh">
                    <h4>Investments</h4>
                  </div>
                  <div className="ssp-fns">
                    {ssp.investments.functions.map((f) => (
                      <span key={f} className="ssp-fn">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="ssp-div">
                    <div className="ssp-brand">
                      {ssp.investments.partners.map((p) => (
                        <div className="ssp-brand-item" key={p.name}>
                          <div className="ssp-word">{p.name}</div>
                          <div className="ssp-stat">{p.aum}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="dcard">
                <div className="dbody">
                  <p className="ssp-tag">Operating Partner</p>
                  <div className="dh">
                    <h4>Operations</h4>
                  </div>
                  <div className="ssp-fns">
                    {ssp.operations.functions.map((f) => (
                      <span key={f} className="ssp-fn">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="ssp-div">
                    <div className="ssp-word solo">SEN+RAL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssp-connector">+</div>
          </div>
        </div>
      </section>

      {/* ---- INVESTMENT CRITERIA ---- */}
      <Divider section={sections.criteria} />
      <section className="surf-cream2">
        <div className="sec reveal">
          <p className="eyebrow">Where We Invest</p>
          <span className="rule" />
          <h2 className="s-title">Investment Criteria</h2>

          <table className="crit-table" style={{ marginTop: 24 }}>
            <tbody>
              {investmentCriteria.flatMap((c) =>
                c.v.map((line, i) => (
                  <tr key={`${c.k}-${line}`}>
                    {i === 0 && <th rowSpan={c.v.length}>{c.k}</th>}
                    <td>{line}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- PORTFOLIO GALLERY ---- */}
      <Divider section={sections.portfolio} />
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
              <div className="cc">
                roman@sentral.com
                <br />
                415·854·0159
              </div>
            </div>
            <div className="contact">
              <div className="cn">Elliot Albert</div>
              <div className="cr">Vice President, Real Estate</div>
              <div className="cc">
                ealbert@sentral.com
                <br />
                610·291·1211
              </div>
            </div>
            <div className="contact">
              <div className="cn">Desmond Ellis</div>
              <div className="cr">Director, Real Estate</div>
              <div className="cc">
                dellis@sentral.com
                <br />
                610.299.2026
              </div>
            </div>
          </div>
          <div className="close-foot">Sentral · Q3 2026</div>
        </div>
        <div className="confid">Private &amp; Strictly Confidential — Not for Distribution</div>
      </section>
    </>
  );
}
