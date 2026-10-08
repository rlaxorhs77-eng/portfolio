import { ORG_REPO_PUBLIC, ORG_REPO_URL, ui } from "@/content/site";

export function RepositoryLink({ path = "", label = ui.repository, release = false }: { path?: string; label?: string; release?: boolean }) {
  if (!ORG_REPO_PUBLIC) return <span className="muted">{label} · {ui.privateRepo}</span>;
  const suffix = release ? path : path ? `/tree/main/${path.split("/").map(encodeURIComponent).join("/")}` : "";
  return <a className="text-link" href={`${ORG_REPO_URL}${suffix}`} target="_blank" rel="noopener noreferrer">{label}</a>;
}

export function ArtifactPaths({ paths }: { paths: readonly string[] }) {
  return (
    <div className="artifacts">
      <h4>{ui.outputs}</h4>
      {!ORG_REPO_PUBLIC && <p className="small muted">{ui.privateRepo}</p>}
      <div className="artifact-paths">
        {paths.map((path) => <p key={path}>{ORG_REPO_PUBLIC
          ? <RepositoryLink path={path} label={path} />
          : <code>{path}</code>}
        </p>)}
      </div>
    </div>
  );
}
