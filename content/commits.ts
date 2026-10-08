// Source: 작업기록/commit-evidence.json (2026-10-08).
// Merge commits excluded. Counts use all branches unless explicitly marked main.
// Path counts overlap: do not sum them. Unconfirmed identities are not included.
// Only fields used by the site are selected; author identities are not published.
export const commitEvidence = {
  total: 320, // all.total
  mainTotal: 214, // main.total
  first: "2026-06-17", // all.first
  last: "2026-10-08", // all.last
  dashboard: 203, // all.by_path["dashboard-web"].my_commits
  dbKeywords: 88, // all.db_keyword_commits; related work described in TASK_P5c §1–2.
  db: 4, // all.by_path.db.my_commits
  gaspod: { count: 6, first: "2026-07-31", last: "2026-09-17" }, // all.by_path.gaspod
  hardware: 2, // all.by_path.hardware.my_commits
  tablet: { count: 53, first: "2026-09-15", last: "2026-10-07" }, // all.by_path["tablet-app"]
  watchMl: { count: 9, first: "2026-08-12", last: "2026-08-28" }, // all.by_path["ml-modules"]
} as const;

const c = commitEvidence;

export const commitCopy = {
  hero: {
    value: String(c.total),
    label: `조직 레포 커밋 · ${c.first.slice(0, 7).replace("-", ".")}–${c.last.slice(5, 7)} · 전 브랜치`,
  },
  resume: `조직 레포 기여: 커밋 ${c.total}건(전 브랜치) · main ${c.mainTotal}건`,
  roles: {
    db: `커밋 근거 — 관제 웹·서버 ${c.dashboard}건 중 DB·RLS·마이그레이션·크론·판정 SQL 관련 ${c.dbKeywords}건, db/ ${c.db}건 (${c.first.slice(0, 7)} ~ ${c.last.slice(5, 7)})`,
    hardware: `커밋 근거 — Final_GasPod ${c.gaspod.count}건 · hardware/ ${c.hardware}건 (${c.gaspod.first.slice(0, 7)} ~ ${c.gaspod.last.slice(5, 7)}). 펌웨어·회로·케이스는 실물 작업이 대부분이라 커밋 수는 적다`,
    // Sole authorship follows TASK_P5c §1–2, not a new count of all_authors.
    tablet: `커밋 근거 — tablet-app/ ${c.tablet.count}건, 전부 본인 (${c.tablet.first} ~ ${c.tablet.last.slice(5)})`,
    watchMl: `커밋 근거 — ML 3종 모듈/ ${c.watchMl.count}건, 전부 본인 (${c.watchMl.first} ~ ${c.watchMl.last.slice(8)})`,
  },
} as const;

// TASK_P5c §1–2: contribution scope from the supplied commit-title summary.
export const dashboardContribution = {
  scope: "화면·API 구현은 팀원 담당 / 신 DB 연동·판정 SQL·크론·테스트는 내 담당",
  statement: "관제 웹·서버 — 화면·API 구현은 팀원 담당 / 신 DB 연동·판정 SQL·크론·테스트는 내 담당",
  screenLabel: "화면 · 팀원 담당",
} as const;

// TASK_P5c §2-4 supplies this commit-title narrative. Test/defect counts and
// the series/date are NOT fields in commit-evidence.json or commit counts.
export const dbCutover = {
  title: "신 DB 계약으로 라우트를 옮기고 이식 대기 테스트를 복원했습니다",
  paragraphs: ["신 DB 이식 ⑥ 시리즈로 업로드·크론·가스 판정 라우트를 신 DB 계약으로 옮겼습니다."],
  result: "이식 대기 테스트 203건을 신 DB 어휘로 복원해 결함 3건을 잡았습니다(2026-09-16~17 커밋).",
} as const;
