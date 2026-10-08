import { press, pressCopy, type PressEntry } from "@/content/press";

function PressTable({ kind, caption }: { kind: PressEntry["kind"]; caption: string }) {
  return <table className="data-table press-table stacked-table" role="table" data-press-kind={kind}>
    <caption>{caption}</caption>
    <thead><tr>{pressCopy.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
    <tbody>{press.filter((entry) => entry.kind === kind).map((entry) => <tr key={entry.url} data-owner="team">
      <td><span className="mobile-cell-label" aria-hidden="true">{pressCopy.headers[0]}</span><time dateTime={entry.date}>{entry.date}</time></td>
      <td><span className="mobile-cell-label" aria-hidden="true">{pressCopy.headers[1]}</span>{entry.outlet}</td>
      <th scope="row"><span className="mobile-cell-label" aria-hidden="true">{pressCopy.headers[2]}</span><a className="text-link" href={entry.url} target="_blank" rel="noopener noreferrer">{entry.title}</a>{entry.note && <span className="press-note">({entry.note})</span>}</th>
      <td className="press-reporter"><span className="mobile-cell-label" aria-hidden="true">{pressCopy.headers[3]}</span>{entry.reporter ?? <span aria-label="기자명 미표기">—</span>}</td>
    </tr>)}</tbody>
  </table>;
}

export function PressCoverage() {
  return <>
    <div className="content-heading"><h3>{pressCopy.title}</h3><p>{pressCopy.description}</p></div>
    <PressTable kind="article" caption={pressCopy.articles} />
    <h4 className="press-supporting-title">{pressCopy.supporting}</h4>
    <PressTable kind="photo" caption={pressCopy.photos} />
    <PressTable kind="release" caption={pressCopy.releases} />
    <h4 className="press-supporting-title">{pressCopy.blog}</h4>
    <PressTable kind="blog" caption={pressCopy.blogCaption} />
  </>;
}
