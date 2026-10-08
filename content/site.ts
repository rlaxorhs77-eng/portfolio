export const SITE_URL = "https://kimtaegon.kr";
export const ORG_REPO_PUBLIC = false;
export const ORG_REPO_URL = "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong";

export const site = {
  name: "김태곤",
  title: "김태곤 | IoT · 임베디드 풀스택 개발자",
  description: "김태곤의 포트폴리오. VitAlGuard에서 맡은 DB 설계, GasPod와 AED-alert, 태블릿 요구정의·검수, 워치 낙상 ML 학습·검증을 소개합니다.",
  github: "https://github.com/rlaxorhs77-eng",
  githubLabel: "@rlaxorhs77-eng",
  email: "rlaxorhs77@gmail.com",
  // 사이트 기준일·푸터 연도: TASK_P1_scaffold.md §9 H-2·§6.
  asOf: "2026-10-08",
  asOfLabel: "내용 기준일",
  copyright: "© 2026 김태곤",
  fontStylesheet: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-gov-dynamic-subset.min.css",
  og: { src: "/og.png", width: 1200, height: 630, alt: "김태곤, IoT·임베디드 풀스택 개발자와 VitAlGuard 로고" },
} as const;

export const attributionLabels = {
  self: "내 담당",
  teammate: "팀원 담당",
  team: "팀 성과",
} as const;

export const navigation = [
  { label: "소개", href: "#요약" },
  { label: "기술 스택", href: "#기술스택" },
  { label: "경험", href: "#이력" },
  { label: "프로젝트", href: "#프로젝트" },
  { label: "문제 해결", href: "#문제해결" },
  { label: "영상", href: "#영상" },
  { label: "보도", href: "#보도" },
  { label: "연락", href: "#연락" },
] as const;

export const sectionLabels = {
  summary: { english: "SUMMARY", korean: "요약" },
  resume: { english: "RESUME", korean: "이력" },
  about: { english: "ABOUT", korean: "소개" },
  project: { english: "PROJECT", korean: "프로젝트" },
  roles: { english: "CONTRIBUTION", korean: "역할" },
  troubleshooting: { english: "TROUBLESHOOTING", korean: "문제해결" },
  video: { english: "DEMONSTRATION", korean: "영상" },
  press: { english: "PRESS", korean: "보도" },
  gallery: { english: "GALLERY", korean: "화면" },
  contact: { english: "CONTACT", korean: "연락" },
} as const;

export const ui = {
  skip: "본문으로 바로 가기",
  navigation: "주요 메뉴",
  home: "페이지 맨 위로",
  portfolio: "포트폴리오",
  github: "GitHub",
  privateRepo: "공개 준비 중",
  repository: "프로젝트 저장소",
  releases: "배포 자료",
  assigned: "맡은 것",
  decisions: "핵심 결정과 이유",
  implementation: "구현",
  validation: "검증·수치",
  outputs: "산출물 경로",
  enlarge: "확대 보기",
  close: "닫기",
  galleryDialog: "이미지 확대",
  email: "이메일",
  artifactSource: "저장소 문서 기준",
  overview: "개요",
  achievements: "팀 성과",
  achievementCategory: "항목",
  achievementResult: "결과",
  achievementScope: "담당 범위",
  includesSelf: "내 담당 포함",
  sceneNumber: "순서",
  sceneTitle: "장면",
  sceneDescription: "내용",
  sceneContribution: "내 담당 장면",
  sceneNotIncluded: "해당 없음",
  notFoundTitle: "페이지를 찾을 수 없습니다.",
  notFoundDescription: "페이지 위치가 바뀌었거나 잘못된 링크입니다.",
  backHome: "포트폴리오로 돌아가기",
  credits: "크레딧",
} as const;
