import type { ImageAsset } from "./types";
import { dashboardContribution } from "./commits";

// 이미지 출처: content-inventory.md §F, 작업기록/REPORT_P1.md 자산 대응표.
// 관제·워치 앱 화면은 팀원 담당. 관제 캡처를 신규 DB의 운영 연결 증거로 쓰지 않는다.
// 내 기여의 근거: content-inventory.md:101-110,160,201-209,243,250-264,357.
// 워치 캡션은 P1 §9 H-4의 표현을 유지한다. 이미지 내부 표시값은 해당 화면에 귀속된다.
// DB SVG는 P1에서 작성한 설명용 도식이다. 관계·방어 원문: content-inventory.md:114-131,254-255.
// P3에서 DB SVG 하단의 원문 참조·저장소 출처 주석을 제거하고, RLS 설명은 행 접근 제어 문장으로 정리했다.
export const assets = {
  logo: { src: "/img/brand/vitalguard-dark.svg", width: 1024, height: 1024, alt: "방패와 심전도를 결합한 VitAlGuard 로고", caption: "VitAlGuard · 팀 로고", attribution: "team" },
  webOverview: { src: "/img/web/control-overview.webp", width: 1511, height: 812, alt: "현장 상태와 CCTV 관제 영역을 함께 보여 주는 관제 웹", caption: `관제 웹 · 실시간 현장 관제 — ${dashboardContribution.scope}`, attribution: "teammate", attributionLabel: dashboardContribution.screenLabel },
  webWorkers: { src: "/img/web/worker-monitoring.webp", width: 1511, height: 812, alt: "작업자 식별 정보가 마스킹된 생체 신호와 전송 상태 목록", caption: `관제 웹 · 작업자 모니터링 — ${dashboardContribution.scope}`, attribution: "teammate", attributionLabel: dashboardContribution.screenLabel },
  webGas: { src: "/img/web/gas-monitoring.webp", width: 1511, height: 812, alt: "가스 종류와 감지 단계, 최근 수신 상태를 표시하는 관제 웹", caption: `관제 웹 · 가스 감지 상태 — ${dashboardContribution.scope}`, attribution: "teammate", attributionLabel: dashboardContribution.screenLabel },
  webAed: { src: "/img/web/aed-monitoring.webp", width: 1511, height: 812, alt: "관리자 정보가 마스킹된 제세동기 배터리와 패드 상태 목록", caption: `관제 웹 · AED 상태 — ${dashboardContribution.scope}`, attribution: "teammate", attributionLabel: dashboardContribution.screenLabel },
  tabletAlerts: { src: "/img/tablet/alerts.webp", width: 1600, height: 1000, alt: "담당관 태블릿의 경보 조회 필터와 경보가 없는 상태", caption: "태블릿 · 경보 목록 — 요구정의·검수", attribution: "self" },
  tabletCalendar: { src: "/img/tablet/work-calendar.webp", width: 1600, height: 1000, alt: "현장 기록을 날짜별로 확인하는 태블릿 워크 캘린더", caption: "태블릿 · 워크 캘린더 — UI/UX 계획·검수", attribution: "self" },
  tabletTransfers: { src: "/img/tablet/transfers.webp", width: 1600, height: 1000, alt: "전체, 완료, 실패, 결과 불명, 전송 중 상태를 구분한 태블릿 전송 이력", caption: "태블릿 · 전송 이력 — 요구정의·실기기 검증", attribution: "self" },
  tabletHelp: { src: "/img/tablet/help.webp", width: 1600, height: 1000, alt: "로그인과 메뉴 이동 방법을 설명하는 태블릿 사용 안내", caption: "태블릿 · 사용 안내 — 단계별 검수", attribution: "self" },
  watchNormal: { src: "/img/watch/normal.webp", width: 480, height: 480, alt: "정상 상태의 심박, 산소포화도, 피부온을 표시한 워치 앱 사양 화면", caption: "워치 · 정상 상태 · 앱 사양 기준 화면(일부 시안 포함)", attribution: "teammate" },
  watchHeat: { src: "/img/watch/heat-warning.webp", width: 480, height: 480, alt: "온열 위험을 색상과 수치로 나타낸 워치 앱 사양 화면", caption: "워치 · 온열 위험 상태 · 앱 사양 기준 화면(일부 시안 포함)", attribution: "teammate" },
  watchOxygen: { src: "/img/watch/oxygen-warning.webp", width: 480, height: 480, alt: "산소포화도 위험을 나타낸 워치 앱 사양 화면", caption: "워치 · 산소포화도 위험 상태 · 앱 사양 기준 화면(일부 시안 포함)", attribution: "teammate" },
  watchTrend: { src: "/img/watch/heart-trend.webp", width: 480, height: 480, alt: "심박 변화 추이를 그래프로 표시한 워치 앱 사양 화면", caption: "워치 · 심박 추이 · 앱 사양 기준 화면(일부 시안 포함)", attribution: "teammate" },
  gaspod: { src: "/img/hardware/gaspod.webp", width: 1600, height: 589, alt: "아크릴 케이스 안 센서와 배선을 확인할 수 있는 GasPod 실물", caption: "GasPod · 펌웨어·OTA·배터리 곡선 실측·케이스 설계", attribution: "self" },
  aed: { src: "/img/hardware/aed-alert.webp", width: 1460, height: 480, alt: "흰 본체 위 빨간 경광등과 노란 받침으로 제작한 AED-alert 실물", caption: "AED-alert · 라즈베리파이 알람 제작", attribution: "self" },
  // P4 §5: 생성 장면 포스터를 실제 관제 캡처로 대체. 같은 파일을 재사용한다.
  // TASK_P5_polish.md §2: P4 제외 판정 철회. 공직자 서명·공공기관명 허용.
  // AWARDS.md:3,7-10,19,26-29; 마스킹 유지, WebP q80·긴 변 ≤1200px.
  grandPrize: { src: "/img/awards/grand-prize.webp", width: 913, height: 1200, alt: "팀원 성명이 마스킹된 공공조달데이터·AI 활용 창업경진대회 대상 상장", caption: "공공조달데이터·AI 활용 창업경진대회 대상(조달청장상) · 2026.08.03 · 제9562호", attribution: "team" },
  finalistOrder: { src: "/img/awards/finalist-order.webp", width: 1200, height: 644, alt: "타 팀명이 마스킹된 범정부 통합본선 발표순서표에서 조달청 추천 VitAlGuard의 A09 행", caption: "범정부 공공데이터 활용 창업경진대회 통합본선 아이디어 부문 발표 · 조달청 추천 · 2026.09.30 · A09", attribution: "team" },
  dbRelations: { src: "/img/database/relationships.svg", width: 1200, height: 720, alt: "조직과 사용자, 현장 구성원, 장치, 경보, 계약, 증빙의 관계를 요약한 DB 도식", caption: "DB 관계 요약 · 신규 스키마 설계", attribution: "self" },
  dbDefense: { src: "/img/database/defense.svg", width: 1200, height: 720, alt: "값 검증, 현장별 접근 제한, 원천 데이터 보호로 이어지는 DB 방어 구조", caption: "DB 방어 구조 · 값 검증과 접근 제어 설계", attribution: "self" },
} as const satisfies Record<string, ImageAsset>;
