import type { Metric } from "./types";

// 담당 정본: content-inventory.md:351-371; 조직 README.md:52-54; TASK_P3_attribution.md §1.
export const hero = {
  title: "김태곤",
  positioning: "IoT · 임베디드 풀스택 / 센서에서 서버까지",
  lines: ["DB 설계, 현장 하드웨어, 태블릿 요구정의·검수와 워치 ML을 맡았습니다.", "직접 설계·제작한 결과와 검수한 범위를 설명합니다."],
  metricsLabel: "내가 맡은 영역의 수치",
  // DB: 2026-09-28 카탈로그 실측, 파티션 자식·내부 생성 트리거 제외.
  // 신 DB 라이브 연결 보류. content-inventory.md:250-251,261; 신규_스키마_ERD.md:6-7,21-29.
  // JVM은 앱 전체 결과를 검수 기준으로 확인한 수치. content-inventory.md:232,243,357.
  metrics: [
    { value: "74", label: "DB 테이블 설계" },
    { value: "149", label: "RLS 정책 설계" },
    { value: "327/327", label: "태블릿 JVM 검수 확인" },
    { value: "0.971", label: "워치 ML 기각 정밀도 · LOSO" },
  ] satisfies readonly Metric[],
  // work_veto LOSO 기각 정밀도: content-inventory.md:150; ML 3종 모듈/README.md:56.
  videoCta: "팀 시연 영상 보기",
  badges: [
    // content-inventory.md:34-35; AWARDS.md:9-10.
    { title: "대상(조달청장상)", date: "2026.08.03", dateTime: "2026-08-03" },
    // content-inventory.md:46-47; AWARDS.md:28-29.
    { title: "범정부 통합본선 발표", date: "2026.09.30", dateTime: "2026-09-30" },
  ],
} as const;

export const project = {
  name: "VitAlGuard",
  // 전체 프로젝트 기간: TASK_P2_restyle.md §3; content-inventory.md:308-314,345.
  period: "2026.06–2026.10",
  // 팀 규모: TASK_P4_assets.md §1, 2026-10-08 사용자 정정. 이전 인벤토리보다 우선.
  team: "2인 팀",
  tags: ["IoT", "PostgreSQL", "ESP32", "Kotlin/Compose", "온디바이스 ML"],
  definition: "산업현장 생체·환경 통합 관제 기반, 건설현장 안전관리비 실집행 검증 플랫폼.",
  description: "나라장터 조달데이터와 현장 IoT·AI를 연결해 계상된 안전관리비가 작업자에게 실제 도달했는지 검증합니다.",
  quote: "문제의 정식화 — 예산이 부족한 것이 아니라, 계상된 예산이 현장에 도달했는지 확인할 수 없는 것이 문제다. 현행 구조는 시공사 서류를 시공사 서류로 검증한다.",
  quoteSource: "VitAlGuard · 문제의 정식화",
  // 정의·인용: content-inventory.md:17-18,55-60; README.md:17-22.
  achievements: [
    // content-inventory.md:31-35,42-47.
    { category: "대회 수상", result: "대상(조달청장상)", scope: "2026.08.03 · 공공조달데이터·AI 활용 창업경진대회", attribution: "team", includesSelf: false },
    { category: "대회 발표", result: "범정부 통합본선 아이디어 부문 발표", scope: "2026.09.30 · 왕중왕전 미진출", attribution: "team", includesSelf: false },
    // DB 기준일·전환 상태는 히어로 주석과 동일. 신규 설계의 검증 수치이며 운영 DB 수치가 아니다.
    { category: "DB 설계·검증", result: "표 74 · 외래키 119 · 인덱스 246 · RLS 정책 149 · 트리거 146 · 마이그레이션 101 · 뷰 13", scope: "신규 스키마 설계·법 요건 반영·외부 감사 대응", attribution: "self", includesSelf: true },
    // content-inventory.md:232,243,357. 앱 구현 실적이 아닌 검수 기준으로 확인한 앱 전체 결과.
    { category: "태블릿 검수", result: "검수에서 확인한 JVM 테스트 327/327 · 프리뷰 35/35", scope: "요구정의·UI/UX 계획·단계별 검수·실기기 검증", attribution: "self", includesSelf: true },
    // content-inventory.md:219,359; README.md:54,80,113.
    { category: "공공데이터", result: "12종 실연동", scope: "관제 웹·서버의 클라이언트 구현·실응답 확인", attribution: "teammate", includesSelf: false },
  ],
  // 시스템 전체: content-inventory.md:64-96; README.md:58-82. 전체 구조·기준액 룰엔진은 팀 산출물.
  architecture: {
    title: "조달이 기준을 세우고, 현장 실측이 확인합니다.",
    inputs: [
      { title: "ERP·공공데이터 연동", attribution: "teammate", items: ["나라장터 입찰·계약·낙찰", "종합쇼핑몰 품목 단가", "국세청 사업자 진위 · 법제처 요율 고시"] },
      { title: "웨어러블 수집·앱", attribution: "teammate", items: ["Apple Watch → iPhone → 서버 수집", "Wear OS 수집기", "iOS/watchOS(Swift) · Android/Wear OS(Flutter)"] },
      // content-inventory.md:168; 기존_조달청모듈/safetymonitor/ml/ppe-detection/README.md:18-20.
      { title: "CCTV AI 엣지", attribution: "teammate", items: ["안전모 착용 판정 R 0.987 @ P 0.999"] },
      { title: "워치 낙상 ML", attribution: "self", items: ["work_veto · impact · recovery 학습·검증", "낙상 판정 모듈 제작·관리"] },
      { title: "GasPod · AED-alert", attribution: "self", items: ["가스·온습도 수집 펌웨어 · OTA · 케이스", "응급 위치 유도 · 장비 상태 경보"] },
      { title: "담당관 태블릿 앱", attribution: "self", items: ["Compose 재작성 요구정의·UI/UX 계획", "단계별 검수·실기기 검증"] },
    ],
    engine: { title: "VitAlGuard 검증 엔진", items: ["장부 ↔ 사람", "돈 ↔ 장부", "사람 ↔ 대장", "증빙: 촬영시각·GPS"], description: "기준액 룰엔진 · 결정적 계산" },
    outputs: [
      { title: "신규 PostgreSQL 설계·검증", attribution: "self", description: "스키마·법 요건 반영·외부 감사 대응" },
      { title: "관제 대시보드·API", attribution: "teammate", description: "웹·서버 구현 · Cloud Run 배포·운영 · CI" },
      { title: "주간 검증 보고서 · 알림 · 조치", attribution: "team", description: "조달 기준과 현장 물증을 잇는 시스템 전체 흐름" },
    ],
    principle: "입력이 부족하면 ‘검토 필요’로 분류합니다. 금액은 재현 가능한 규칙으로 계산하고, 최종 판단은 사람이 합니다.",
    legend: "앰버 테두리: 내 담당 · 회색 테두리: 팀원 담당 · 중립 구획: 팀 성과",
  },
} as const;

// 연표 원문·날짜·버전: content-inventory.md:302-314; README.md:36-44. P1 §9에 따라 검사기 개수만 제외.
// 혼합 행의 문구는 유지하고 담당 범위를 따로 명시한다. 태블릿 재작성의 내 범위는 요구정의·검수다.
export const timeline = {
  title: "만들고, 검증하고, 발표한 과정",
  year: "2026",
  entries: [
    { date: "6월", text: "아이디어 플랜 V2.x 제출 · 신규 DB 설계 착수", attribution: "team", scope: "내 담당: 신규 DB 설계" },
    { date: "7/13 → 7/16", text: "2차 심사 자료 제출 → 5분 대면 발표(v2.8)", attribution: "team", scope: "" },
    { date: "8/3", text: "대상(조달청장상) 수상 → 조달청 추천으로 범정부 통합본선 진출", attribution: "team", scope: "" },
    { date: "8월", text: "DB 외부 감사·보안 보강(RLS·트리거), GasPod v5 OTA 실증", attribution: "self", scope: "" },
    { date: "9월", text: "담당관 태블릿 앱 Flutter → Compose 재작성(1.0 → 1.3.18), 통합본선 발표자료 V3.0", attribution: "team", scope: "내 담당: 태블릿 요구정의·UI/UX 계획·단계별 검수·실기기 검증" },
    { date: "9/30", text: "범정부 통합본선 아이디어 부문 발표(A09)", attribution: "team", scope: "" },
    { date: "10/2", text: "시연 영상 공개 · 포트폴리오 정리", attribution: "team", scope: "" },
  ],
} as const;
