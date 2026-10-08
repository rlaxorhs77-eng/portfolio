import { project } from "@/content/project";
import { AttributionTag } from "./attribution-tag";

function Connector({ merge = false }: { merge?: boolean }) {
  return <svg className={`architecture-connector${merge ? " architecture-connector-merge" : ""}`} viewBox={merge ? "0 0 600 56" : "0 0 24 40"} fill="none" aria-hidden="true">
    <path pathLength="1" d={merge ? "M150 2v22h150m150-22v22H300m0 0v26m-6-6 6 6 6-6" : "M12 2v32m-6-6 6 6 6-6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export function Architecture() {
  const data = project.architecture;
  return (
    <div className="architecture" data-owner="team" data-reveal>
      <h3>{data.title}</h3>
      <div className="architecture-inputs" data-stagger="60">
        {data.inputs.map((input) => <div className="architecture-node" key={input.title} data-owner={input.attribution}>
          <AttributionTag owner={input.attribution} />
          <h4>{input.title}</h4>
          <ul>{input.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>)}
      </div>
      <Connector merge />
      <div className="architecture-engine" data-owner="team" data-reveal>
        <AttributionTag owner="team" />
        <h4>{data.engine.title}</h4>
        <ul>{data.engine.items.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>{data.engine.description}</p>
      </div>
      <div className="architecture-output" data-stagger="60">
        {data.outputs.map((output) => <div key={output.title}>
          <Connector />
          <div className="architecture-node" data-owner={output.attribution}>
            <AttributionTag owner={output.attribution} />
            <h4>{output.title}</h4><p>{output.description}</p>
          </div>
        </div>)}
      </div>
      <p className="architecture-legend">{data.legend}</p>
      <p className="architecture-principle">{data.principle}</p>
    </div>
  );
}
