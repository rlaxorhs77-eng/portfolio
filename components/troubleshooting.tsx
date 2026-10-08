import { troubleshooting } from "@/content/troubleshooting";

export function Troubleshooting() {
  return <div className="troubleshooting">
    <p className="lead">{troubleshooting.description}</p>
    {troubleshooting.cases.map((entry, index) => <details className="troubleshooting-case" key={entry.id} id={`해결-${entry.id}`} open={index === 0} data-owner="self">
      <summary><span className="case-area">{entry.area}</span><span className="case-title">{entry.title}</span></summary>
      <dl className="case-story">
        {(["problem", "cause", "action", "result"] as const).map((key) => <div key={key}>
          <dt>{troubleshooting.labels[key]}</dt><dd>{entry[key]}</dd>
        </div>)}
      </dl>
      <p className="case-evidence">근거 · {entry.evidence}</p>
    </details>)}
  </div>;
}
