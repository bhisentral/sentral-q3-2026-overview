export default function CaseStudyCard({ study }) {
  return (
    <div className="dev-card reveal">
      <span className="badge">{study.badge}</span>
      <div className="dc-img" style={{ height: 210 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/${study.photo}`} alt={study.name} />
      </div>
      <div className="dc-body">
        <h4>{study.name}</h4>
        <p className="dc-loc">{study.meta}</p>
        <p className="dc-loc" style={{ color: "var(--tx-muted)", marginBottom: 14 }}>{study.owner}</p>
        <ul style={{ listStyle: "none" }}>
          {study.points.map((p, i) => (
            <li
              key={p}
              style={{
                fontSize: 12.5,
                lineHeight: 1.55,
                color: "var(--tx-body)",
                padding: "9px 0 9px 18px",
                position: "relative",
                borderTop: i === 0 ? "none" : "1px solid var(--line)",
              }}
            >
              <span style={{ position: "absolute", left: 0, top: 16, width: 5, height: 5, background: "var(--slate)" }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
