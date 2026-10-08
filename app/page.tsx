import type { ReactNode } from "react";
import { assets } from "@/content/assets";
import { commitCopy, dashboardContribution } from "@/content/commits";
import { hero, project, timeline } from "@/content/project";
import { roles } from "@/content/roles";
import { gallery, video } from "@/content/media";
import { about, resume } from "@/content/profile";
import { press } from "@/content/press";
import { navigation, site, ui } from "@/content/site";
import { Architecture } from "@/components/architecture";
import { ImageGallery } from "@/components/image-gallery";
import { Metrics } from "@/components/metrics";
import { PressCoverage } from "@/components/press-coverage";
import { RepositoryLink } from "@/components/repository-link";
import { Reveal } from "@/components/reveal";
import { RoleDetail } from "@/components/role-detail";
import { VideoPlayer } from "@/components/video-player";
import { Troubleshooting } from "@/components/troubleshooting";
import { SkillStack } from "@/components/skill-stack";
import { UiIcon, type IconName } from "@/components/ui-icon";

function Chapter({ id, title, description, icon, children }: { id: string; title: string; description?: string; icon: IconName; children: ReactNode }) {
  return <section id={id} className="portfolio-chapter document-section" aria-labelledby={`${id}-title`}>
    <div className="container">
      <header className="chapter-heading" data-reveal><span className="chapter-icon"><UiIcon name={icon} /></span><h2 id={`${id}-title`}>{title}</h2>{description && <p>{description}</p>}</header>
      {children}
    </div>
  </section>;
}

const roleIcons: readonly IconName[] = ["database", "cpu", "tablet", "activity"];
const roleDescriptions = [
  "현장과 조직을 잇는 신규 DB. 스키마, 접근 제어, 판정 SQL과 검증을 설계했습니다.",
  "GasPod의 펌웨어·OTA·케이스와 AED-alert의 경광등·부저 알람을 제작했습니다.",
  "현장에서 쓰는 입력 흐름을 정의하고, 태블릿 UI·UX와 실기기 동작을 검수했습니다.",
  "낙상 후보를 판별하는 모델을 학습·검증하고, 앱에 전달할 판정 모듈을 관리했습니다.",
];

export default function Home() {
  return <div className="portfolio-page">
    <a className="skip-link" href="#본문">{ui.skip}</a>
    <header className="site-header portfolio-header" id="맨위">
      <div className="container header-inner">
        <a href="#요약" className="brand" aria-label={`${site.name} · ${ui.home}`}><span className="brand-mark">tg.</span><span className="brand-name">김태곤</span></a>
        <nav aria-label={ui.navigation} data-section-nav><ul>{navigation.map(item => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul><span className="nav-indicator" aria-hidden="true" /></nav>
      </div>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
    <nav className="section-dots" aria-label="목차 바로가기" data-section-dots><ul>{navigation.map((item,index) => <li key={item.href}><a href={item.href} aria-label={`${item.label} 구간으로 이동`} aria-current={index === 0 ? "location" : undefined}><span aria-hidden="true" /></a></li>)}</ul></nav>

    <main id="본문" className="portfolio-main" tabIndex={-1}>
      <section id="요약" className="portfolio-hero document-section" aria-labelledby="hero-title">
        <div className="container hero-layout">
          <div className="hero-intro" data-reveal>
            <p className="hero-kicker">IoT · 임베디드 풀스택 개발자</p>
            <h1 id="hero-title">현장부터 데이터까지,<br /><strong>김태곤</strong>입니다.</h1>
            <p className="hero-description">장치를 만들고, 데이터를 설계하고, 모델을 검증합니다.<br />현장에서 시작한 문제를 실제 동작하는 결과로 연결합니다.</p>
            <div className="hero-actions">
              <a className="primary-action" href="#프로젝트">프로젝트 보기<UiIcon name="arrow" /></a>
              <a className="social-button" href={site.github} target="_blank" rel="noopener noreferrer"><UiIcon name="github" />GitHub</a>
              <a className="social-button" href={video.youtube} target="_blank" rel="noopener noreferrer"><UiIcon name="youtube" />YouTube</a>
            </div>
          </div>
          <figure className="hero-work" data-reveal>
            <div className="hero-work-image"><img src={assets.gaspod.src} width={assets.gaspod.width} height={assets.gaspod.height} alt={assets.gaspod.alt} fetchPriority="high" /></div>
            <figcaption><span><UiIcon name="cpu" /><strong>GasPod</strong></span><span>직접 제작한 현장 장치 · 교육용 시제품</span></figcaption>
          </figure>
        </div>
        <div className="container hero-bottom" id="소개">
          <p>경제학에서 시작해 <strong>현장 장치, 데이터베이스, 온디바이스 ML</strong>을 함께 다루고 있습니다.</p>
          <details className="about-more"><summary>제가 일하는 방식<UiIcon name="chevron" /></summary><div className="essays">{about.essays.map(essay => <article key={essay.title}><h3>{essay.title}</h3>{essay.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div></details>
        </div>
      </section>

      <Chapter id="기술스택" title="기술 스택" icon="cpu" description="이름을 나열하기보다, 실제로 어떻게 사용했는지 정리했습니다.">
        <SkillStack />
      </Chapter>

      <Chapter id="이력" title="경험과 교육" icon="briefcase" description="배운 것을 만들고, 만든 것을 현장에서 검증해 온 과정입니다.">
        <div className="experience-layout">
          <ol className="experience-timeline" id="타임라인">
            <li><span className="timeline-symbol"><UiIcon name="briefcase" /></span><div><p className="experience-date">2026.06 - 2026.10</p><h3>VitAlGuard</h3><p className="experience-role">산업현장 안전관리 프로젝트</p><p>DB 설계, 현장 하드웨어 제작, 태블릿 요구정의·검수, 워치 ML을 담당했습니다.</p><a className="inline-action" href="#프로젝트">프로젝트 보기<UiIcon name="arrow" /></a></div></li>
            <li><span className="timeline-symbol"><UiIcon name="school" /></span><div><p className="experience-date">2026.03.24 - 2026.10.06</p><h3>스마트인재개발원</h3><p className="experience-role">엣지 AI 기반 헬스케어 서비스 개발자 과정</p><p>1,040시간 교육 수료. 데이터, 장치, 앱을 연결하는 프로젝트를 진행했습니다.</p></div></li>
            <li><span className="timeline-symbol"><UiIcon name="school" /></span><div><p className="experience-date">2019.03 - 2026.02</p><h3>전남대학교 경제학부</h3><p className="experience-role">학사</p><p>경제학을 전공하며 컴퓨터공학, 조소학, 심리학, 경영학 수업을 함께 들었습니다.</p></div></li>
          </ol>
          <aside className="recognition">
            <h3><UiIcon name="trophy" />수상과 발표</h3>
            <article><p className="experience-date">2026.08.03</p><h4>대상 <span>조달청장상</span></h4><p>공공조달데이터·AI 활용 창업경진대회</p><span className="scope-note">VitAlGuard 팀 성과</span></article>
            <article><p className="experience-date">2026.09.30</p><h4>범정부 통합본선 발표</h4><p>공공데이터 활용 창업경진대회 아이디어 부문</p><span className="scope-note">조달청 추천 · 왕중왕전 미진출</span></article>
            <details className="evidence-disclosure"><summary>수상·발표 증빙<UiIcon name="chevron" /></summary><ImageGallery images={hero.awards} className="award-gallery" /></details>
          </aside>
        </div>
      </Chapter>

      <Chapter id="프로젝트" title="대표 프로젝트" icon="database">
        <article className="featured-project">
          <div className="project-cover"><ImageGallery images={[assets.webOverview]} /></div>
          <div className="project-brief">
            <p className="project-period">2026.06 - 2026.10 <span>2인 팀</span></p>
            <div className="featured-title"><img src={assets.logo.src} width="48" height="48" alt={assets.logo.alt} loading="lazy" /><h3>VitAlGuard</h3></div>
            <p className="project-one-liner">작업자의 안전과<br />안전관리비의 흐름을 함께 확인합니다.</p>
            <p>나라장터 조달데이터와 현장 IoT·AI를 연결하는 산업현장 안전관리 플랫폼입니다.</p>
            <div className="project-stack"><span>PostgreSQL</span><span>ESP32</span><span>온디바이스 ML</span></div>
            <a href="#영상" className="inline-action"><UiIcon name="youtube" />시연 영상 보기<UiIcon name="arrow" /></a>
          </div>
        </article>
        <div className="project-numbers"><Metrics items={hero.metrics} prominent /><p className="scope-note">DB 수치는 신규 스키마 설계·검증 기준이며, 라이브 전환은 대기 중입니다. {commitCopy.resume}</p></div>
        <div id="역할" className="contribution-section">
          <h3>제가 맡은 일</h3>
          <div className="contribution-grid">{roles.map((role,index) => <details className="contribution" key={role.id}>
            <summary><span className="contribution-icon"><UiIcon name={roleIcons[index]} /></span><span><strong>{role.title}</strong><span>{roleDescriptions[index]}</span></span><UiIcon name="chevron" /></summary>
            <div className="contribution-detail"><RoleDetail role={role} /></div>
          </details>)}</div>
          <p className="collaboration-note"><UiIcon name="check" /><span>{dashboardContribution.statement}. 폰·워치 앱 구현은 팀원 담당입니다.</span></p>
        </div>
        <details className="project-document"><summary><span><UiIcon name="database" />전체 시스템과 검증 기록</span><UiIcon name="chevron" /></summary><div className="project-document-body"><Architecture /><div className="project-facts">{project.achievements.map(item => <article key={item.category}><h4>{item.category}</h4><p>{item.result}</p><small>{item.scope}</small></article>)}</div><ol className="project-history-list">{timeline.entries.map(item => <li key={item.date}><strong>{item.date}</strong><span>{item.text}{item.scope && <small>{item.scope}</small>}</span></li>)}</ol><RepositoryLink /></div></details>
        <details className="project-document" id="화면"><summary><span><UiIcon name="tablet" />서비스 화면과 제작 장치</span><UiIcon name="chevron" /></summary><div className="project-document-body">{gallery.groups.map(group => <div className="gallery-group" key={group.id}><h4>{group.title}</h4><p className="small muted">{group.scope} · {group.description}</p><ImageGallery images={group.images} compact={"compact" in group && group.compact} /></div>)}</div></details>
      </Chapter>

      <Chapter id="문제해결" title="문제를 풀어낸 기록" icon="activity" description="증상과 원인을 구분하고, 수정한 결과를 다시 확인했습니다."><Troubleshooting /></Chapter>

      <Chapter id="영상" title="영상으로 보는 VitAlGuard" icon="youtube" description="현장의 장치부터 태블릿과 관제 화면까지, 서비스의 흐름을 담았습니다.">
        <VideoPlayer />
        <div className="video-secondary"><a className="social-link" href={video.sloganUrl} target="_blank" rel="noopener noreferrer"><UiIcon name="youtube" />{video.sloganLabel}<UiIcon name="external" /></a></div>
        <details className="project-document"><summary><span>영상 구성과 제작 방식</span><UiIcon name="chevron" /></summary><div className="project-document-body"><p>{video.description}</p><ol className="scene-summary">{video.scenes.map(scene => <li key={scene.title}><strong>{scene.title}</strong><p>{scene.description}</p>{scene.contribution && <small>내 담당 포함: {scene.contribution}</small>}</li>)}</ol></div></details>
      </Chapter>

      <Chapter id="보도" title="언론에 소개된 프로젝트" icon="microphone" description="VitAlGuard 팀의 대상 수상 소식을 다룬 기사입니다.">
        <div className="press-highlights">{[press[0],press[8],press[9]].map(item => <a href={item.url} key={item.url} target="_blank" rel="noopener noreferrer"><span className="press-outlet">{item.outlet}</span><strong>{item.title}</strong><span className="press-date">{item.date}<UiIcon name="external" /></span></a>)}</div>
        <details className="project-document"><summary><span>전체 기사·보도자료 보기 <small>{press.length}건</small></span><UiIcon name="chevron" /></summary><div className="project-document-body"><PressCoverage /></div></details>
      </Chapter>

      <Chapter id="연락" title="함께 만들 이야기를 기다립니다." icon="mail" description="프로젝트와 제가 맡은 일에 관해 편하게 연락해 주세요.">
        <a className="contact-email" href={`mailto:${site.email}`}><UiIcon name="mail" />{site.email}<UiIcon name="external" /></a>
        <div className="contact-socials"><a className="social-button" href={site.github} target="_blank" rel="noopener noreferrer"><UiIcon name="github" />GitHub<UiIcon name="external" /></a><a className="social-button" href={video.youtube} target="_blank" rel="noopener noreferrer"><UiIcon name="youtube" />YouTube<UiIcon name="external" /></a><a className="social-button" href={resume.portfolioSource.href} target="_blank" rel="noopener noreferrer"><UiIcon name="link" />포트폴리오 소스<UiIcon name="external" /></a></div>
      </Chapter>
    </main>
    <footer className="site-footer portfolio-footer"><div className="container"><p>{site.copyright}</p><a href="/credits/">크레딧</a></div></footer>
    <Reveal />
  </div>;
}
