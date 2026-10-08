import type { Role } from "@/content/types";
import { ArtifactPaths } from "./repository-link";
import { ImageGallery } from "./image-gallery";
import { AttributionTag } from "./attribution-tag";

export function RoleDetail({ role }: { role: Role }) {
  return <article className="role" id={`역할-${role.id}`} aria-labelledby={`role-${role.id}`} data-owner="self" data-reveal>
    <header className="role-heading">
      <h3 id={`role-${role.id}`} className="attributed-heading">{role.title}<AttributionTag owner="self" /></h3>
      <p className="role-scope">{role.scope}</p>
      <p className="role-commit-evidence">{role.commitEvidence}</p>
      <p className="role-summary">{role.summary}</p>
      <p className="small muted">{role.period}</p>
      <p className="tags">{role.tags.map((tag) => <span key={tag}>#{tag}</span>)}</p>
      <p className="role-owned">{role.owned}</p>
    </header>
    <div className="role-copy" data-stagger="60">{role.sections.map((section) => <div key={section.title} data-reveal>
      <h4>{section.title}</h4>
      {section.paragraphs.map((paragraph, index) => <p key={paragraph}>{paragraph}{index === section.paragraphs.length - 1 && <> <strong className="result-sentence">{section.result}</strong></>}</p>)}
    </div>)}</div>
    <ArtifactPaths paths={role.paths} />
    <ImageGallery images={role.images} compact={role.id === "watch-ml"} />
  </article>;
}
