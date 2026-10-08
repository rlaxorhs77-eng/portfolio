export const about = {
  title: "다른 분야에서 배운 것을, 하나의 제품으로",
  // 학력·교육 기간과 시간: TASK_P2_restyle.md §3(직접 입력), TASK_P1_scaffold.md §6.
  education: [
    { label: "학력", name: "전남대학교 경제학부", detail: "학사", period: "2019.03–2026.02" },
    { label: "교육", name: "스마트인재개발원", detail: "엣지 AI 기반 헬스케어 서비스 개발자 과정", period: "2026.03.24–2026.10.06", hours: "1,040시간" },
  ],
  essays: [
    {
      title: "공통점 없던 수업을 하나의 프로젝트에 연결했습니다",
      paragraphs: [
        "경제학을 전공하며 컴퓨터공학, 조소학, 심리학, 경영학 수업을 함께 들었습니다. 서로 다른 분야를 배우면 문제를 볼 각도가 늘어난다고 생각했습니다. C언어 수업에서는 규칙을 세우고 결과를 확인하는 과정이 경제학의 모형을 다루는 방식과 닮아 있음을 발견했습니다.",
        "VitAlGuard에서는 따로 배웠던 것들을 함께 사용했습니다. 조소학의 모델링 경험은 센서와 부품 배치에 맞춘 케이스 설계로 연결했고, 심리학에서 배운 관점은 사용자 입장에서 화면을 검토하는 데 활용했습니다. DB 설계와 현장 하드웨어, 태블릿 요구정의·검수, 워치 ML을 맡으며 장치부터 화면까지의 흐름을 확인했습니다.",
      ],
      // 출처: 자기소개서_수정본.txt:7-10; content-inventory.md:357
    },
    {
      title: "원인을 나누고, 판정 기준을 맞췄습니다",
      paragraphs: [
        "GasPod 센서 값이 요동칠 때 코드와 센서를 다시 확인하는 것만으로는 원인을 찾을 수 없었습니다. 접촉 저항, 전원 출력 불안정, 접지 분리를 나누어 확인한 뒤 회로를 납땜 모듈로 교체하고 운용 규칙을 정리했습니다. 이 경험 이후에는 증상이 같아도 원인을 하나로 단정하지 않고 조건을 나누어 확인했습니다.",
        "장치와 관제 화면의 배터리 잔량이 다를 때는 같은 전압을 서로 다른 식으로 환산하고 있음을 확인했습니다. 방전 곡선을 기준으로 환산 함수를 통일해 전달했고, 위험 단계도 판정 근거를 함께 확인하며 차이가 생긴 지점을 좁혔습니다. 각자의 코드보다 연결 구간의 기준을 맞추는 데 집중했습니다.",
      ],
      // 출처: 자기소개서_수정본.txt:13,21-24; content-inventory.md:357
    },
    {
      title: "기능이 동작한 뒤에도 검증을 이어갔습니다",
      paragraphs: [
        "작업자의 생체·위치 데이터를 다루면서 수집 항목과 동의 구조, 접근 권한도 설계 범위에 넣었습니다. GasPod 전송의 미인증 요청에 대한 거부 응답을 확인했습니다. DB에서는 CHECK로 값의 범위, RLS로 현장별 행 접근, 트리거로 시각·행위자와 원천 측정값을 나누어 보호했습니다.",
        "외부 AI 감사에서 지적된 내용을 직접 재현하고 결함 12건을 수정한 뒤 판정을 검사 스크립트에 고정했습니다. 워치 ML에서도 모델 지표만으로 경보를 확정하지 않고 본인의 무반응을 확인하도록 경계를 두었습니다. 직접 설계·제작한 결과와 검수한 범위를 설명하는 것을 제 작업 기준으로 삼았습니다.",
      ],
      // 출처: 자기소개서_수정본.txt:18-19; content-inventory.md:154,254-256,357
    },
  ],
} as const;

export const resume = {
  personalLabel: "인적사항",
  field: "IoT · 임베디드 풀스택",
  websitesLabel: "웹 페이지",
  githubLabel: "GitHub 프로필",
  // TASK_P5_polish.md §4-5: 개인 포트폴리오 공개 저장소. 조직 저장소 가드와 별개.
  portfolioSource: { label: "포트폴리오 소스", href: "https://github.com/rlaxorhs77-eng/portfolio" },
  videoLabel: "YouTube 팀 시연 영상",
  skillsLabel: "보유 기술",
  skills: ["PostgreSQL", "RLS", "ESP32", "Kotlin/Compose", "CoreML", "ONNX"],
  skillNote: "DB·하드웨어·워치 ML 담당 · Kotlin/Compose는 태블릿 요구정의·검수 범위",
  integrationLabel: "관제·웨어러블 연동 기술",
  integrationTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Cloud Run", "GitHub Actions"],
  platformNote: "팀원 담당 폰·워치 앱: iOS/watchOS(Swift) · Android/Wear OS(Flutter)",
  // 출처: content-inventory.md:157,181,200-209,215,228,250,259,283-284,357
} as const;

export const contact = {
  title: "장치와 데이터가 함께 있는 제품을 만들고 싶습니다.",
  description: "프로젝트와 제가 맡은 일에 관해 더 이야기 나누고 싶다면 연락해 주세요.",
} as const;
