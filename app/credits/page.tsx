import type { Metadata } from "next";
import { credits, creditsCopy } from "@/content/credits";
import { ORG_REPO_PUBLIC, SITE_URL, site, ui } from "@/content/site";

export const metadata: Metadata = {
  title: `${creditsCopy.title} | ${site.name}`,
  description: "김태곤 포트폴리오의 이미지, 글꼴, 영상과 코드 의존성 출처 및 사용 범위.",
  alternates: { canonical: `${SITE_URL}/credits/` },
  openGraph: {
    type: "website", locale: "ko_KR", url: `${SITE_URL}/credits/`,
    title: `${creditsCopy.title} | ${site.name}`,
    description: "포트폴리오 자산의 출처와 사용 범위.",
    images: [{ url: site.og.src, width: site.og.width, height: site.og.height, alt: site.og.alt }],
  },
};

export default function Credits() {
  return <>
    <a className="skip-link" href="#본문">{ui.skip}</a>
    <header className="site-header credits-header">
      <div className="container header-inner">
        <a className="brand" href="/">{site.name}<span>{ui.portfolio}</span></a>
        <a className="text-link" href="/">{ui.backHome}</a>
      </div>
    </header>
    <main id="본문" tabIndex={-1}>
      <section className="document-section" aria-labelledby="credits-title">
        <div className="container document-grid">
          <header className="section-label"><p className="eyebrow" aria-hidden="true">CREDITS</p><p className="label-title">{ui.credits}</p></header>
          <div className="section-content">
            <h1 id="credits-title">{creditsCopy.title}</h1>
            <p className="credits-intro">{creditsCopy.intro}</p>
            <table className="data-table credits-table">
              <caption className="sr-only">{creditsCopy.title}</caption>
              <thead><tr>{creditsCopy.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
              <tbody>{credits.map((credit) => <tr key={credit.id}>
                <th scope="row">{credit.category}{credit.files.map((file) => <span className="credit-path" key={file}>{file}</span>)}</th>
                <td data-label={creditsCopy.headers[1]}>
                  {credit.sourceUrl && (!credit.privateSource || ORG_REPO_PUBLIC)
                    ? <a className="text-link" href={credit.sourceUrl} target="_blank" rel="noopener noreferrer">{credit.source}</a>
                    : <>{credit.source}{credit.privateSource && <p className="muted">{ui.privateRepo}</p>}</>}
                </td>
                <td data-label={creditsCopy.headers[2]}>{credit.licenseUrl
                  ? <a className="text-link" href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">{credit.license}</a>
                  : credit.license}</td>
                <td data-label={creditsCopy.headers[3]}>{credit.notice}</td>
              </tr>)}</tbody>
            </table>
            <p className="credits-unused">{creditsCopy.unused}</p>
            <p className="credits-rights">{creditsCopy.rights}</p>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="container document-grid"><p>{site.copyright}</p><p><a className="text-link" href="/">{ui.backHome}</a></p></div></footer>
  </>;
}
