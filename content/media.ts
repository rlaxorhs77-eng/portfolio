import { assets } from "./assets";
import { dashboardContribution } from "./commits";
import type { GalleryGroup } from "./types";

// 팀 공동 영상: TASK_P3_attribution.md §1. 길이·구성·합성 방식: content-inventory.md:294-297.
// 원문 10장면: 조직 레포 포트폴리오/시연 영상/README.md:13-26.
export const video = {
  title: "현장에서 어떻게 이어지는지",
  attributionLabel: "팀 시연 영상",
  description: "팀이 실물 사진·생성 장면·서비스 캡처를 합성해 낙상 감지와 AED 위치 유도, GasPod 경보, 태블릿과 관제 화면의 흐름을 담았습니다.",
  playLabel: "팀 시연 영상 재생",
  iframeTitle: "VitAlGuard 팀 시연 영상",
  loadingLabel: "영상 플레이어를 불러오는 중입니다.",
  fallbackLabel: "재생되지 않으면 YouTube에서 보기",
  directLabel: "YouTube에서 보기",
  dismissLabel: "영상 닫기",
  duration: "3분 37초",
  youtube: "https://youtu.be/suM9BOJuzj0",
  embed: "https://www.youtube-nocookie.com/embed/suM9BOJuzj0",
  sloganUrl: "https://youtu.be/BzLAVj-9yo4",
  sloganLabel: "팀 시연 · 슬로건 카드판",
  releasePath: "/releases/tag/portfolio-2026-10",
  poster: assets.webOverview,
  posterLabel: "포스터 화면",
  scenesTitle: "팀 시연 구성",
  contributionLegend: "● 내 담당 장면",
  // 관제 허브·앱 화면만으로 신 DB 연결이나 낙상 모델 동작을 추정하지 않는다.
  // 04에는 낙상→AED 위치 유도, 08에는 태블릿 홈이 명시됨(영상 README:20,24). DB 독립 시연 장면은 정본에 없다.
  scenes: [
    { title: "오프닝", description: "방패와 심전도 로고", contribution: null },
    { title: "아버지의 귀가", description: "현장을 나서 가족에게 돌아가는 일상", contribution: null },
    { title: "관제 플랫폼 허브", description: "팀원이 구현한 관제 화면에서 연결되는 서비스", contribution: null },
    { title: "AED-alert", description: "낙상 감지에서 경광등과 제세동기 위치 유도로", contribution: "낙상 ML·AED-alert" },
    { title: "GasPod", description: "가스 위험 단계 전환과 대피 흐름", contribution: "GasPod" },
    { title: "워치 앱", description: "팀원 담당 앱에서 확인하는 생체 신호", contribution: null },
    { title: "태블릿 앱", description: "워크 캘린더, 촬영, 전송과 펜 주석", contribution: "태블릿 요구정의·검수" },
    { title: "관제 웹", description: "팀원이 구현한 관제 화면의 AED·가스·작업자 모니터링과 태블릿 홈", contribution: "태블릿 홈 검수" },
    { title: "다섯 개의 귀가", description: "가족의 품으로 돌아가는 장면", contribution: null },
    { title: "엔딩", description: "작업자가 안전하게 집으로 돌아가는 길", contribution: null },
  ],
} as const;

export const gallery = {
  title: "사람이 확인하는 화면, 현장에서 쓰는 장치",
  description: "화면을 선택하면 크게 볼 수 있습니다.",
  // 캡처의 표시값은 원본 화면의 데모 값이다. 포트폴리오 성능 수치로 추출하지 않는다.
  groups: [
    // 신 DB 운영 연결은 보류(content-inventory.md:261). 표시 데이터가 내 신규 DB에서 왔다는 주장은 하지 않는다.
    { id: "web", title: "관제 웹·서버", attribution: "team", scope: dashboardContribution.scope, description: "실서비스 화면 · 식별 정보 마스킹본", images: [assets.webOverview, assets.webWorkers, assets.webGas, assets.webAed] },
    { id: "tablet", title: "태블릿", attribution: "self", scope: "요구정의·검수", description: "실서비스 화면 · 현장 기록과 전송 흐름", images: [assets.tabletAlerts, assets.tabletCalendar, assets.tabletTransfers, assets.tabletHelp] },
    { id: "watch", title: "워치", attribution: "teammate", scope: "내 담당은 ML 판정 로직 / 앱 화면은 팀원 담당", description: "앱 사양 기준 화면(일부 시안 포함)", compact: true, images: [assets.watchNormal, assets.watchHeat, assets.watchOxygen, assets.watchTrend] },
    { id: "hardware", title: "장치", attribution: "self", scope: "", description: "제작한 실물 · GasPod는 교육용 프로토타입", images: [assets.gaspod, assets.aed] },
  ] satisfies readonly GalleryGroup[],
} as const;
