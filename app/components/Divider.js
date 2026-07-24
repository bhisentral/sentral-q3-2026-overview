export default function Divider({ section }) {
  return (
    <div className="divider">
      <div className="in">
        <p className="deyebrow">
          {section.num} · {section.title}
        </p>
        <h3>
          <em>{section.tag}</em>
        </h3>
      </div>
    </div>
  );
}
