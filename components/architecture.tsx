import { project } from "@/content/project";
import { ArchitectureSvg } from "./architecture-svg";

export function Architecture() {
  const data = project.architecture;
  return (
    <div className="architecture" data-owner="team">
      <h3>{data.title}</h3>
      <p className="small muted architecture-scroll-hint" id="architecture-scroll-hint">{data.scrollHint}</p>
      <div className="architecture-scroll" role="region" aria-label={data.scrollLabel} aria-describedby="architecture-scroll-hint" tabIndex={0} data-reveal>
        <ArchitectureSvg />
      </div>
      <p className="architecture-legend" id="architecture-legend">{data.legend}</p>
      <p className="small muted architecture-scope" id="architecture-scope">{data.scope}</p>
      <p className="architecture-principle">{data.principle}</p>
      <p className="architecture-viewer"><a className="text-link" href={data.viewerUrl} target="_blank" rel="noopener noreferrer">{data.viewerLabel}</a><span className="small muted">{data.viewerNote}</span></p>
    </div>
  );
}
