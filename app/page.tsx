import { assets } from "@/content/assets";
import { commitCopy, dashboardContribution } from "@/content/commits";
import { hero, project, timeline } from "@/content/project";
import { roles, rolesIntro } from "@/content/roles";
import { gallery, video } from "@/content/media";
import { about, resume } from "@/content/profile";
import { navigation, sectionLabels, site, ui } from "@/content/site";
import { Architecture } from "@/components/architecture";
import { AttributionTag } from "@/components/attribution-tag";
import { DocumentSection } from "@/components/document-section";
import { ArrowIcon } from "@/components/icons";
import { ImageGallery } from "@/components/image-gallery";
import { Metrics } from "@/components/metrics";
import { PressCoverage } from "@/components/press-coverage";
import { RepositoryLink } from "@/components/repository-link";
import { Reveal } from "@/components/reveal";
import { RoleDetail } from "@/components/role-detail";
import { VideoPlayer } from "@/components/video-player";

export default function Home() {
  return <>
    <a className="skip-link" href="#본문">{ui.skip}</a>
    <header className="site-header" id="맨위">
      <div className="container header-inner">
        <a href="#요약" className="brand" aria-label={`${site.name} · ${ui.home}`}>{site.name}<span>{ui.portfolio}</span></a>
        <nav aria-label={ui.navigation} data-section-nav><ul>{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul><span className="nav-indicator" aria-hidden="true" /></nav>
      </div>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
    <main id="본문" tabIndex={-1}>
      <DocumentSection label={sectionLabels.summary} owner="self" hero>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="hero-positioning">{hero.positioning}</p>
        <p className="hero-subtitle">{hero.lines.map((line) => <span key={line}>{line}</span>)}</p>
        <div className="hero-metrics" data-owner="self">
          <AttributionTag owner="self" label={hero.metricsLabel} />
          <Metrics items={hero.metrics} prominent />
        </div>
        <div className="hero-awards" data-owner="team">
          <AttributionTag owner="team" />
          <ImageGallery images={hero.awards} className="award-gallery" />
        </div>
        <div className="cta-row">
          <a href="#영상" className="button button-primary">{hero.videoCta}<ArrowIcon down /></a>
          <a href={site.github} className="button button-secondary" target="_blank" rel="noopener noreferrer">{ui.github}<ArrowIcon /></a>
        </div>
      </DocumentSection>

      <DocumentSection label={sectionLabels.resume} owner="self">
        <dl className="resume-list">
          <div><dt>{resume.personalLabel}</dt><dd><p>{site.name}</p><p>{resume.field}</p></dd></div>
          {about.education.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>
            <strong>{item.name}</strong><p>{item.detail}</p>
            <p className="muted">{item.period}{"hours" in item && ` · ${item.hours}`}</p>
          </dd></div>)}
          <div><dt>{resume.websitesLabel}</dt><dd className="resume-websites">
            <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">{resume.githubLabel}<ArrowIcon /></a>
            <a className="text-link" href={resume.portfolioSource.href} target="_blank" rel="noopener noreferrer">{resume.portfolioSource.label}<ArrowIcon /></a>
            <a className="text-link" href={video.youtube} target="_blank" rel="noopener noreferrer" data-owner="team">{resume.videoLabel}<ArrowIcon /></a>
            <span data-owner="team"><RepositoryLink /></span>
            <p data-owner="self">{commitCopy.resume}</p>
          </dd></div>
          <div><dt>{resume.skillsLabel}</dt><dd>
            <p className="tags">{resume.skills.map((tag) => <span key={tag}>#{tag}</span>)}</p>
            <p className="small muted">{resume.skillNote}</p>
            <details className="integration-details" data-owner="team"><summary><AttributionTag owner="team" /> {resume.integrationLabel}</summary>
              <p className="tags">{resume.integrationTags.map((tag) => <span key={tag}>#{tag}</span>)}</p>
              <p className="small muted">{dashboardContribution.statement}</p>
              <p className="small muted">{resume.platformNote}</p>
            </details>
          </dd></div>
        </dl>
      </DocumentSection>

      <DocumentSection label={sectionLabels.about} owner="self">
        <div className="essays">{about.essays.map((essay) => <article className="essay" key={essay.title} data-reveal>
          <h3><span className="hash-mark" aria-hidden="true"># </span>{essay.title}</h3>
          {essay.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>)}</div>
      </DocumentSection>

      <DocumentSection label={sectionLabels.project} owner="team">
        <header className="project-heading" data-reveal>
          <img className="project-logo" src={assets.logo.src} width={assets.logo.width} height={assets.logo.height} alt={assets.logo.alt} loading="lazy" />
          <div><h3>{project.name}</h3><p className="project-meta">{project.period} · {project.team}</p></div>
        </header>
        <p className="tags">{project.tags.map((tag) => <span key={tag}>#{tag}</span>)}</p>
        <div className="project-overview" data-reveal>
          <h4>{ui.overview}</h4><p className="project-definition">{project.definition}</p><p>{project.description}</p>
          <blockquote className="problem"><p>{project.quote}</p><cite>{project.quoteSource}</cite></blockquote>
        </div>
        <Architecture />
        <table className="data-table achievements stacked-table" role="table" data-reveal>
          <caption>{ui.achievements}</caption>
          <thead><tr><th scope="col">{ui.achievementCategory}</th><th scope="col">{ui.achievementResult}</th><th scope="col">{ui.achievementScope}</th></tr></thead>
          <tbody>{project.achievements.map((entry) => <tr key={entry.category} data-owner={entry.attribution}>
            <th scope="row"><span className="mobile-cell-label" aria-hidden="true">{ui.achievementCategory}</span>{entry.category}</th>
            <td><span className="mobile-cell-label" aria-hidden="true">{ui.achievementResult}</span>{entry.result}{"evidence" in entry && <ImageGallery images={[entry.evidence]} className="award-evidence" compactCaption />}</td>
            <td><span className="mobile-cell-label" aria-hidden="true">{ui.achievementScope}</span><AttributionTag owner={entry.attribution} label={entry.includesSelf ? ui.includesSelf : undefined} /><p>{entry.scope}</p></td>
          </tr>)}</tbody>
        </table>
        <div className="project-history" id="타임라인">
          <h4>{timeline.title} <span className="muted">{timeline.year}</span></h4>
          <ol className="timeline-list">{timeline.entries.map((entry) => <li key={entry.date} data-owner={entry.attribution}>
            <div className="timeline-date"><strong>{entry.date}</strong><AttributionTag owner={entry.attribution} /></div>
            <div><p>{entry.text}</p>{entry.scope && <p className="timeline-scope">{entry.scope}</p>}</div>
          </li>)}</ol>
        </div>
        <div className="repo-status"><RepositoryLink /></div>
      </DocumentSection>

      <DocumentSection label={sectionLabels.roles} owner="self">
        <p className="lead roles-intro">{rolesIntro.description}</p>
        <nav className="role-index" aria-label={rolesIntro.title}><ul>{roles.map((role) => <li key={role.id}><a href={`#역할-${role.id}`}>{role.title}<ArrowIcon down /></a></li>)}</ul></nav>
        {roles.map((role) => <RoleDetail key={role.id} role={role} />)}
      </DocumentSection>

      <DocumentSection label={sectionLabels.video} owner="team">
        <div className="content-heading" data-reveal><h3 className="attributed-heading">{video.title}<AttributionTag owner="team" label={video.attributionLabel} /></h3><p>{video.description}</p></div>
        <VideoPlayer />
        <div className="video-secondary"><a className="text-link" href={video.sloganUrl} target="_blank" rel="noopener noreferrer">{video.sloganLabel}</a><RepositoryLink path={video.releasePath} label={ui.releases} release /></div>
        <table className="data-table scenes stacked-table" role="table">
          <caption>{video.scenesTitle}<span className="table-key">{video.contributionLegend}</span></caption>
          <thead><tr><th scope="col">{ui.sceneNumber}</th><th scope="col">{ui.sceneTitle}</th><th scope="col">{ui.sceneDescription}</th><th scope="col">{ui.sceneContribution}</th></tr></thead>
          <tbody>{video.scenes.map((scene, index) => <tr key={scene.title}>
            <td><span className="mobile-cell-label" aria-hidden="true">{ui.sceneNumber}</span>{String(index + 1).padStart(2, "0")}</td>
            <th scope="row"><span className="mobile-cell-label" aria-hidden="true">{ui.sceneTitle}</span>{scene.title}</th>
            <td><span className="mobile-cell-label" aria-hidden="true">{ui.sceneDescription}</span>{scene.description}</td>
            <td className="scene-contribution"><span className="mobile-cell-label" aria-hidden="true">{ui.sceneContribution}</span>{scene.contribution ? <span data-owner="self"><span className="contribution-mark" aria-hidden="true">●</span><span>{scene.contribution}</span><span className="sr-only"> · {ui.includesSelf}</span></span> : <span aria-label={ui.sceneNotIncluded}>—</span>}</td>
          </tr>)}</tbody>
        </table>
      </DocumentSection>

      <DocumentSection label={sectionLabels.press} owner="team">
        <PressCoverage />
      </DocumentSection>

      <DocumentSection label={sectionLabels.gallery}>
        <div className="content-heading"><h3>{gallery.title}</h3><p>{gallery.description}</p></div>
        {gallery.groups.map((group) => <div key={group.id} className="gallery-group" data-owner={group.attribution} data-reveal>
          <h4 className="attributed-heading">{group.title} · <AttributionTag owner={group.attribution} />{group.scope && <span className="group-scope">— {group.scope}</span>}</h4><p className="small muted">{group.description}</p>
          <ImageGallery images={group.images} compact={"compact" in group && group.compact} />
        </div>)}
      </DocumentSection>

      <DocumentSection label={sectionLabels.contact}>
        <dl className="contact-links">
          <div><dt>{ui.email}</dt><dd><a className="text-link" href={`mailto:${site.email}`}>{site.email}<ArrowIcon /></a></dd></div>
          <div><dt>{ui.github}</dt><dd><a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">{site.githubLabel}<ArrowIcon /></a></dd></div>
        </dl>
      </DocumentSection>
    </main>
    <footer className="site-footer"><div className="container document-grid"><p>{site.copyright}</p><p>{site.asOfLabel} <time dateTime={site.asOf}>{site.asOf}</time><a className="text-link footer-credits" href="/credits/">{ui.credits}</a></p></div></footer>
    <Reveal />
  </>;
}
