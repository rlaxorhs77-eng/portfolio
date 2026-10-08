import { assets } from "./assets";
import { commitCopy, dashboardContribution, dbCutover } from "./commits";
import type { Role } from "./types";

// 담당 범위: TASK_P5c_commits.md §0–2와 commit-evidence.json 우선; 기존 사실은 content-inventory.md:357.
// DB 수치: 2026-09-28 카탈로그 실측, 파티션 자식·내부 생성 트리거 제외. 신 DB 라이브 연결 보류.
// 출처: content-inventory.md:250-251,261; 신규_스키마_ERD.md:6-7,21-29.
// DB·하드웨어·ML 기간은 전체 프로젝트 기간(TASK_P2_restyle.md §3), 개별 역할의 착수·종료일이 아니다.
// 태블릿 기간 2026.09: content-inventory.md:231-233,312,339-342.
// 태블릿 수치는 앱 전체의 저장소 검증 기록을 검수에서 확인한 결과. 구현을 단독 담당했다는 뜻이 아니다.
// GasPod 7–8h는 문서의 구동 시간이며, 정량 ppm 정확도·검교정·방폭·IP 등급·산업안전 인증을 주장하지 않는다.
// AED-alert의 태블릿 기기 상태 피드백은 별도 연결 필요. content-inventory.md:183,187,209.
// recovery는 소규모 동일 인물 평가, impact는 증거 전용. 시스템 전체 탐지 성능이 아니다. content-inventory.md:150.

export const rolesIntro = {
  title: "제가 맡은 영역",
  description: "2인 팀에서 맡은 영역",
} as const;

export const roles = [
  {
    id: "db",
    title: "DB 설계",
    summary: "데이터를 쌓는 구조에서, 근거를 지키는 구조로.",
    scope: `담당 범위 — 신규 스키마·RLS·트리거·마이그레이션 설계와 외부 감사 대응. ${dashboardContribution.statement}`,
    commitEvidence: commitCopy.roles.db,
    owned: "신규 스키마 전체 설계, 법 요건 반영, 외부 감사 대응을 맡았습니다. 조직·현장·장치·증빙을 관계로 연결하고, 수집 항목과 동의 구조를 함께 정리했습니다.",
    period: "프로젝트 기간 2026.06–2026.10",
    tags: ["PostgreSQL", "SQL", "RLS", "트리거", "AES-256-GCM"],
    sections: [
      {
        title: "분리된 표와 문자열 시각을 관계형 구조로 다시 설계했습니다",
        paragraphs: ["시각을 문자열로 다루고 표 사이 관계와 현장 격리가 부족했던 구조를 다시 설계했습니다. 조직·사람, 현장, 장치·센서, 경보, 조달, 증빙과 워치 생체 데이터를 관계로 연결하고 조회 경로를 정리했습니다."],
        result: "설계한 신규 스키마에서 테이블 74개, 외래키 119개, 인덱스 246개, 뷰 13개를 확인했습니다.",
        // 출처: content-inventory.md:250-253,257
      },
      {
        title: "값·접근·변경 이력을 서로 다른 제약으로 보호했습니다",
        paragraphs: ["CHECK는 값의 범위를, RLS는 현장별 행 접근을, 트리거는 시각·행위자와 원천 측정값의 불변성을 맡도록 나누었습니다. 수집 항목과 동의 구조를 정리하고 PII 컬럼에는 AES-256-GCM 암호화를 적용했습니다. RLS의 우회 가능성과 행 단위 보호라는 한계도 문서에 남겼습니다."],
        result: "RLS 정책 149개와 트리거 146개를 설계하고 검증했습니다.",
        // 출처: content-inventory.md:250-251,254-255,258-259
      },
      {
        title: "감사 지적을 재현하고 수정 판정을 검사에 고정했습니다",
        paragraphs: ["외부 AI 감사에서 지적한 내용을 재현한 뒤 결함을 수정하고, 같은 판정을 반복 확인할 수 있도록 검사 스크립트에 고정했습니다."],
        result: "재현된 결함 12건을 수정했고, 신규 스키마의 마이그레이션 101개를 확인했습니다.",
        // 출처: content-inventory.md:250-251,256,261
      },
      dbCutover,
    ],
    paths: ["db/erd-vitalguard2/", "db/audit/", "db/integrated/"],
    images: [assets.dbRelations, assets.dbDefense],
    // 출처: content-inventory.md:246-264,357; 자기소개서_수정본.txt:18
  },
  {
    id: "hardware",
    title: "현장 하드웨어",
    summary: "GasPod · AED-alert",
    scope: `담당 범위 — GasPod 펌웨어·OTA·배터리 곡선·케이스와 AED-alert 알람. ${dashboardContribution.statement}`,
    commitEvidence: commitCopy.roles.hardware,
    owned: "GasPod의 ESP32 펌웨어, 배터리 곡선 실측, 배터리 단독 OTA 실증, 케이스 설계와 AED-alert의 라즈베리파이 알람을 맡았습니다.",
    period: "프로젝트 기간 2026.06–2026.10",
    tags: ["ESP32-S3", "OTA", "Raspberry Pi", "GPIO", "systemd"],
    sections: [
      {
        title: "요동치는 센서 값의 전기적 원인을 분리했습니다",
        paragraphs: ["GasPod는 교육용 프로토타입으로 제작했습니다. 센서 값이 요동칠 때 접촉 저항, 전원 출력 불안정, 접지 분리를 나누어 확인했습니다. 회로를 납땜 모듈로 교체하고 운용 규칙을 정리했으며, 농도 단계(초록/빨강)와 부저로 현장 상태를 알리도록 구성했습니다."],
        result: "산소·일산화탄소·황화수소·온습도를 수집하고 5초 주기로 서버에 전송하도록 구현했습니다.",
        // 출처: 자기소개서_수정본.txt:13; content-inventory.md:180-187
      },
      {
        title: "장치와 화면의 배터리 환산 기준을 통일했습니다",
        paragraphs: ["같은 전압을 장치와 화면에서 서로 다른 식으로 환산하던 지점을 찾아 방전 곡선 기준으로 통일했습니다. 부품 배치에 맞춰 케이스를 설계하고, 하드웨어 v4.2와 펌웨어 v5의 버전을 구분해 기록했습니다."],
        result: "펌웨어 v5의 배터리 단독 OTA를 실증했으며, GasPod의 배터리 구동 시간은 7–8h입니다.",
        // 출처: 자기소개서_수정본.txt:22-23; content-inventory.md:183,188-192,357
      },
      {
        title: "응급 위치 유도와 장비 상태 경보를 연결했습니다",
        paragraphs: ["AED-alert는 낙상 등 응급 상황에서 빛·소리로 제세동기 위치를 안내하고 배터리·패드 교환주기 상태도 경보합니다. 서버 판정에 따라 LED와 부저를 구동하며, 조회 실패 때 직전 경보 수준을 유지하도록 구성했습니다. systemd로 부팅 자동 시작과 재시작도 설정했습니다."],
        result: "서버를 8초마다 폴링하고 위험 상태를 해제 신호가 올 때까지 유지하는 동작을 구현했습니다.",
        // 출처: content-inventory.md:201-207
      },
    ],
    paths: ["Final_GasPod/", "Final_GasPod/firmware/", "hardware/AED_alarm/"],
    images: [assets.gaspod, assets.aed],
    // 출처: content-inventory.md:176-209,357; 자기소개서_수정본.txt:13,22-23
  },
  {
    id: "tablet",
    title: "담당관 태블릿 앱",
    summary: "Compose 재작성의 요구정의와 검수.",
    scope: "담당 범위 — 요구정의·UI/UX 계획·단계별 검수·실기기 검증",
    commitEvidence: commitCopy.roles.tablet,
    owned: "Flutter에서 Kotlin·Jetpack Compose로 재작성하는 과정의 요구정의, UI/UX 계획, 단계별 검수, 실기기 검증을 맡았습니다.",
    period: "2026.09 · 재작성·검수",
    tags: ["Kotlin", "Jetpack Compose", "UI/UX", "JVM 테스트"],
    sections: [
      {
        title: "전송 결과가 불명확한 기록도 복구할 수 있게 정의했습니다",
        paragraphs: ["현장 기록이 촬영에서 끝나지 않도록 사진·잉크·음성·텍스트를 전송 보류 묶음으로 다루는 요구사항을 정리했습니다. 전송 결과가 불명확한 상태를 실패와 구분하고 복구할 수 있게 사용자 흐름을 검토했습니다."],
        result: "1.0 → 1.3.18 재작성 과정을 검수하며 앱 전체 JVM 테스트 327/327 결과를 확인했습니다.",
        // 출처: content-inventory.md:231-232,238,243
      },
      {
        title: "펜과 손가락의 역할을 나눠 현장 입력을 검수했습니다",
        paragraphs: ["펜은 그리기와 압력 입력에, 손가락은 이동과 확대에 쓰도록 입력 요구사항을 정의했습니다. 워크 캘린더에서 촬영·서류 스캔, 기록 뷰어와 펜 주석, 전송 이력으로 이어지는 흐름을 UI/UX 계획과 실기기 검수에서 확인했습니다."],
        result: "단계별 검수에서 앱 전체 프리뷰 35/35 결과를 확인했습니다.",
        // 출처: content-inventory.md:232,235,237,243
      },
      {
        title: "프리뷰 확인을 실제 기기의 로그인 검증까지 이어갔습니다",
        paragraphs: ["화면 프리뷰, JVM 테스트, 실기기 로그인·기능 검증을 단계별로 확인했습니다. 접근 가능한 현장 범위를 서버가 판단하는 흐름도 실기기에서 검수했습니다."],
        result: "1.3.17 앱의 실기기 로그인을 검증하며 6/6 결과를 확인했습니다.",
        // 출처: content-inventory.md:232,236,243
      },
    ],
    paths: ["tablet-app/", "tablet-app/app/vitalguard_field_android/", "tablet-app/artifacts/"],
    images: [assets.tabletCalendar, assets.tabletTransfers],
    // 출처: content-inventory.md:224-244,357
  },
  {
    id: "watch-ml",
    title: "워치 ML",
    summary: "낙상 후보를 거르고, 무반응을 확인합니다.",
    scope: "담당 범위 — 낙상 모델 학습·검증과 판정 모듈 제작·관리 / 팀원 담당: 웨어러블 수집·앱 화면·앱 통합",
    commitEvidence: commitCopy.roles.watchMl,
    owned: "낙상 판정을 위한 work_veto, impact, recovery 모델의 학습·검증과 모듈 제작·관리를 맡았습니다.",
    period: "프로젝트 기간 2026.06–2026.10",
    tags: ["Swift", "Core ML", "Kotlin", "ONNX", "LOSO"],
    sections: [
      {
        title: "작업 동작을 기각하고 경보 확정 권한을 분리했습니다",
        paragraphs: ["작업 동작 기각, 미회복 판정, 충격 증거의 역할을 나누고 ML 단독 경보를 금지했습니다. 충격이 2.8G 게이트를 넘을 때만 30초 카운트다운으로 본인의 무반응을 확인하며, 취소 버튼이나 지속 움직임이 있으면 경보를 취소하도록 구성했습니다."],
        result: "work_veto의 LOSO 기각 정밀도는 0.971이었습니다.",
        // 출처: content-inventory.md:147,149-150,154
      },
      {
        title: "단독 판정에 부족한 모델은 증거 용도로 제한했습니다",
        paragraphs: ["impact는 단독 판정에 적합하지 않아 증거 첨부 전용으로 제한했습니다. recovery는 소규모 동일 인물 평가라는 한계를 함께 기록하고 다른 사람에 대한 일반화 성능으로 해석하지 않았습니다. 모델과 임계값은 검증 게이트 없이 바꾸지 않도록 정리했습니다."],
        result: "impact의 LOSO PR-AUC는 0.460, recovery의 인물내 정확도는 86%였습니다.",
        // 출처: content-inventory.md:150,155
      },
      {
        title: "모듈 전달과 함께 착용 중 전력 소모를 확인했습니다",
        paragraphs: ["센서 입력을 기기 안에서 처리하는 판정 파이프라인과 카운트다운 가드를 구성했습니다. Swift·Core ML과 Kotlin·ONNX 경로가 같은 계약을 따르도록 모듈을 전달하고, 앱 통합 담당과 모듈 제작·관리 범위를 구분했습니다."],
        result: "25h 착용 검증에서 배터리 소모는 2.8%/h였습니다.",
        // 출처: content-inventory.md:145,151,156,160
      },
    ],
    paths: ["ML 3종 모듈/", "ML 3종 모듈/Verification/검증절차.md", "ML 3종 모듈/WearOS통합가이드.md"],
    images: [assets.watchNormal, assets.watchTrend],
    // 출처: content-inventory.md:141-161,357
  },
] as const satisfies readonly Role[];
