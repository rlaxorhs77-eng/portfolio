// P4 source ledger. Private source URLs are records, never public hrefs while
// ORG_REPO_PUBLIC is false. Dates distinguish local verification from acquisition.
export type Credit = Readonly<{
  id: string; category: string; files: readonly string[]; source: string;
  sourceUrl: string; channel: string; received: string; license: string;
  licenseUrl: string; notice: string; changes: string; ai: string;
  check: string; privateSource: boolean;
}>;

export const credits = [
  {
    "id": "font",
    "category": "Pretendard GOV",
    "files": [
      "외부 CSS 링크"
    ],
    "source": "orioncactus / Pretendard",
    "sourceUrl": "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-gov-dynamic-subset.min.css",
    "channel": "공식 jsDelivr 가변 다이나믹 서브셋 CSS만 링크, 폰트 파일 미수록",
    "received": "2026-10-08 링크 반영",
    "license": "OFL 1.1",
    "licenseUrl": "https://github.com/orioncactus/pretendard/blob/main/LICENSE",
    "notice": "Pretendard GOV Variable · 예약 글꼴명 ‘Pretendard’(그 밖에 Source, Inter, M PLUS 1)",
    "changes": "수정 없음 · 직접 서브셋 없음",
    "ai": "제공된 OFL 조사에 별도 AI 제한은 기록되지 않음. 수정·예약명 조건 유지.",
    "check": "없음: P4 제공 온라인 확인 결과 사용. 이 작업의 네트워크 재검증 없음",
    "privateSource": false
  },
  {
    "id": "21st",
    "category": "21st.dev",
    "files": [
      "미사용"
    ],
    "source": "21st Labs",
    "sourceUrl": "https://21st.dev",
    "channel": "미사용 · 다운로드·구독 사용 없음",
    "received": "해당 없음",
    "license": "서비스 약관 2026-07-20판",
    "licenseUrl": "https://21st.dev/terms",
    "notice": "미사용 · 약관 2026-07-20판: 공통 라이선스 없음, 타 플랫폼 복사 시 원 페이지 링크 필수",
    "changes": "해당 없음",
    "ai": "미사용. 향후 채택 시 개별 컴포넌트 라이선스와 AI 조건 확인.",
    "check": "없음: 미사용 확인",
    "privateSource": false
  },
  {
    "id": "icons",
    "category": "자체 아이콘 3종",
    "files": [
      "components/icons.tsx"
    ],
    "source": "Astra가 P1에서 직접 작성한 화살표·재생·확대 SVG",
    "sourceUrl": "",
    "channel": "자체 작성 · 외부 아이콘 세트 미사용",
    "received": "2026-10-08 로컬 확인",
    "license": "자체 코드 · 별도 고지 전까지 All rights reserved",
    "licenseUrl": "",
    "notice": "자체 제작 · 외부 아이콘 세트 미사용",
    "changes": "수정 없음 · SVG 경로 3개 확인",
    "ai": "별도 허락 없는 외부 학습·재배포 권한을 부여하지 않음",
    "check": "확인 필요: 자체 코드 라이선스 결정",
    "privateSource": false
  },
  {
    "id": "logo",
    "category": "VitAlGuard 로고 SVG",
    "files": [
      "public/img/brand/vitalguard-dark.svg"
    ],
    "source": "팀 VitAlGuard · VitAlGuard_logo/vitalguard_logo_dark_mode.svg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/VitAlGuard_logo/vitalguard_logo_dark_mode.svg",
    "channel": "읽기 전용 조직 저장소 원본 복사",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용",
    "changes": "수정 없음 · 색 변경 없음 · 원본 해시 일치",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-1",
    "category": "관제 웹 화면",
    "files": [
      "public/img/web/control-overview.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/관제웹/11_실시간현장관제_메인_다크.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/관제웹/11_실시간현장관제_메인_다크.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-2",
    "category": "관제 웹 화면",
    "files": [
      "public/img/web/worker-monitoring.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/관제웹/12_작업자모니터링_다크.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/관제웹/12_작업자모니터링_다크.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-3",
    "category": "관제 웹 화면",
    "files": [
      "public/img/web/gas-monitoring.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/관제웹/13_가스누출감지기_다크.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/관제웹/13_가스누출감지기_다크.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-4",
    "category": "관제 웹 화면",
    "files": [
      "public/img/web/aed-monitoring.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/관제웹/14_AED알림_다크.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/관제웹/14_AED알림_다크.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-5",
    "category": "태블릿 화면",
    "files": [
      "public/img/tablet/alerts.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/태블릿/02_경보.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/태블릿/02_경보.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-6",
    "category": "태블릿 화면",
    "files": [
      "public/img/tablet/work-calendar.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/태블릿/03_기록_워크캘린더.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/태블릿/03_기록_워크캘린더.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-7",
    "category": "태블릿 화면",
    "files": [
      "public/img/tablet/transfers.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/태블릿/05_전송이력.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/태블릿/05_전송이력.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-8",
    "category": "태블릿 화면",
    "files": [
      "public/img/tablet/help.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/태블릿/07_사용방법.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/태블릿/07_사용방법.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-9",
    "category": "워치 앱 사양 화면",
    "files": [
      "public/img/watch/normal.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/워치/w08_정상_480.png",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/워치/w08_정상_480.png",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동 · 앱 사양 기준 화면(일부 시안 포함)",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-10",
    "category": "워치 앱 사양 화면",
    "files": [
      "public/img/watch/heat-warning.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/워치/w10_위험(온열)_480.png",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/워치/w10_위험(온열)_480.png",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동 · 앱 사양 기준 화면(일부 시안 포함)",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-11",
    "category": "워치 앱 사양 화면",
    "files": [
      "public/img/watch/oxygen-warning.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/워치/w11_위험(SpO₂)_480.png",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/워치/w11_위험(SpO₂)_480.png",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동 · 앱 사양 기준 화면(일부 시안 포함)",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-12",
    "category": "워치 앱 사양 화면",
    "files": [
      "public/img/watch/heart-trend.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/워치/w15_1·심박추이_480.png",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/워치/w15_1·심박추이_480.png",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동 · 앱 사양 기준 화면(일부 시안 포함)",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-13",
    "category": "장치 실물 사진",
    "files": [
      "public/img/hardware/gaspod.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/장치/GasPod_실물_3컷.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/장치/GasPod_실물_3컷.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "screen-14",
    "category": "장치 실물 사진",
    "files": [
      "public/img/hardware/aed-alert.webp"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/장치/AED-alert_실물_3컷.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/장치/AED-alert_실물_3컷.jpg",
    "channel": "읽기 전용 조직 저장소 포트폴리오 폴더",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 허락 범위: 팀원 포트폴리오 사용 · 공개 범위는 조직 저장소 포트폴리오 폴더 공개 전환 결정과 연동",
    "changes": "WebP q80 변환 · 긴 변 ≤1600px · 메타데이터 제거 외 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "poster",
    "category": "영상 포스터",
    "files": [
      "public/img/web/control-overview.webp (재사용)"
    ],
    "source": "팀 VitAlGuard · 포트폴리오/서비스 화면/관제웹/11_실시간현장관제_메인_다크.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/포트폴리오/서비스 화면/관제웹/11_실시간현장관제_메인_다크.jpg",
    "channel": "기존 실제 관제 화면 재사용",
    "received": "2026-10-08 교체",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀 시연 영상 · 포스터 화면은 팀원 담당",
    "changes": "생성 장면 포스터 사용 중단. 실제 캡처 WebP 재사용 · 내용 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "grand-prize",
    "category": "수상 증빙(팀 자산·마스킹본)",
    "files": [
      "awards/2026-공공조달데이터AI-창업경진대회-대상.jpg (미게시)"
    ],
    "source": "팀 VitAlGuard · awards/2026-공공조달데이터AI-창업경진대회-대상.jpg",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/awards/2026-공공조달데이터AI-창업경진대회-대상.jpg",
    "channel": "읽기 전용 조직 저장소 원본 육안 확인",
    "received": "2026-10-08 확인",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "팀원 성명 마스킹은 확인했으나 타인 성명이 남아 미게시",
    "changes": "P4 제외 조건 적용. 신규 변환·크롭·추가 마스킹 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 공개 제외 요소가 없는 새 마스킹본·재배포 범위",
    "privateSource": true
  },
  {
    "id": "finalist-order",
    "category": "수상 증빙(팀 자산·마스킹본)",
    "files": [
      "awards/2026-범정부-공공데이터-창업경진대회-통합본선-발표순서-A09.png (미게시)"
    ],
    "source": "팀 VitAlGuard · awards/2026-범정부-공공데이터-창업경진대회-통합본선-발표순서-A09.png",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/awards/2026-범정부-공공데이터-창업경진대회-통합본선-발표순서-A09.png",
    "channel": "읽기 전용 조직 저장소 원본 육안 확인",
    "received": "2026-10-08 확인",
    "license": "팀 VitAlGuard 자산 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "타 팀·개인 명칭 마스킹은 확인했으나 금지 검사 대상 지명이 남아 미게시",
    "changes": "P4 제외 조건 적용. 신규 변환·크롭·추가 마스킹 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 공개 제외 요소가 없는 새 마스킹본·재배포 범위",
    "privateSource": true
  },
  {
    "id": "db-relations",
    "category": "DB 관계 요약",
    "files": [
      "public/img/database/relationships.svg"
    ],
    "source": "김태곤의 DB 설계 자료를 토대로 작성한 설명 도식",
    "sourceUrl": "",
    "channel": "P1 자체 작성 SVG · 실제 서비스 캡처 아님",
    "received": "2026-10-08 로컬 확인",
    "license": "자체 도식 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "내 담당 · 신규 DB 설계 설명",
    "changes": "P3에서 출처 안내 삭제 및 설명 정리. P4 내용 변경 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 자체 산출물의 공개·재배포 허락 범위",
    "privateSource": false
  },
  {
    "id": "db-defense",
    "category": "DB 방어 구조",
    "files": [
      "public/img/database/defense.svg"
    ],
    "source": "김태곤의 DB 설계 자료를 토대로 작성한 설명 도식",
    "sourceUrl": "",
    "channel": "P1 자체 작성 SVG · 실제 서비스 캡처 아님",
    "received": "2026-10-08 로컬 확인",
    "license": "자체 도식 · 무단 사용 금지",
    "licenseUrl": "",
    "notice": "내 담당 · 신규 DB 설계 설명",
    "changes": "P3에서 출처 안내 삭제 및 설명 정리. P4 내용 변경 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 자체 산출물의 공개·재배포 허락 범위",
    "privateSource": false
  },
  {
    "id": "og",
    "category": "OG 이미지",
    "files": [
      "public/og.png"
    ],
    "source": "자체 제작 · 팀 VitAlGuard 다크 PNG 로고 재사용",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/VitAlGuard_logo/vitalguard_logo_dark_mode.png",
    "channel": "P2 자체 합성 · 원본 로고 재사용",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "자체 구성 + 팀 로고 권리",
    "licenseUrl": "",
    "notice": "자체 제작(로고 재사용) · 팀원 포트폴리오 사용",
    "changes": "흰 배경·개인 소개 문구·로고 합성. P4 변경 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "favicon",
    "category": "favicon",
    "files": [
      "app/icon.svg"
    ],
    "source": "자체 제작 · 팀 VitAlGuard SVG 로고 경로 재사용",
    "sourceUrl": "https://github.com/VitAlGuard-jodal/vitalguard-jodalcheong/blob/main/VitAlGuard_logo/vitalguard_logo_dark_mode.svg",
    "channel": "P1 경로 재사용 · P2 단색 구성",
    "received": "2026-10-08 로컬 확인 · 최초 수령일 확인 필요",
    "license": "자체 구성 + 팀 로고 권리",
    "licenseUrl": "",
    "notice": "자체 제작(로고 재사용) · 팀원 포트폴리오 사용",
    "changes": "방패·심전도 경로를 흰 배경·앰버 단색으로 구성. 로고 원본 수정 없음",
    "ai": "팀 허락 범위에 AI 학습·데이터셋 이용은 포함되지 않음",
    "check": "확인 필요: 최초 수령일·조직 저장소 포트폴리오 폴더 공개 및 재배포 범위",
    "privateSource": true
  },
  {
    "id": "youtube",
    "category": "YouTube 임베드",
    "files": [
      "components/video-player.tsx"
    ],
    "source": "팀 VitAlGuard 시연 영상",
    "sourceUrl": "https://www.youtube-nocookie.com/embed/suM9BOJuzj0",
    "channel": "클릭 뒤 youtube-nocookie 임베드 생성 · 초기 iframe 없음",
    "received": "2026-10-08 로컬 확인",
    "license": "YouTube 서비스 약관 + 팀 영상 권리",
    "licenseUrl": "https://www.youtube.com/static?template=terms",
    "notice": "팀 시연 영상 · 실물 사진·생성 장면·서비스 캡처 합성",
    "changes": "영상 수정·다운로드·재배포 없음. 썸네일은 실제 관제 캡처로 교체",
    "ai": "임베드는 영상의 AI 학습·재배포 권한을 부여하지 않음",
    "check": "확인 필요: 팀 영상 재배포 범위. 임베드 서비스 약관은 이번 작업에서 온라인 재확인하지 않음",
    "privateSource": false
  },
  {
    "id": "next",
    "category": "Next.js",
    "files": [
      "package.json / pnpm-lock.yaml · next 16.4.0"
    ],
    "source": "Next.js",
    "sourceUrl": "vercel/next.js",
    "channel": "기설치 node_modules 읽기 전용 확인 · 설치·의존성 변경 없음",
    "received": "설치일 확인 필요 · 2026-10-08 로컬 확인",
    "license": "MIT",
    "licenseUrl": "https://github.com/vercel/next.js/blob/canary/license.md",
    "notice": "Next.js · MIT · 원 저작권·라이선스 고지 유지",
    "changes": "수정 없음",
    "ai": "로컬 라이선스에 AI 용도만을 별도로 제한하는 조항은 확인되지 않음",
    "check": "확인 필요: 최초 설치·수령일. 라이선스는 로컬 원문 확인",
    "privateSource": false
  },
  {
    "id": "react",
    "category": "React / React DOM",
    "files": [
      "package.json / pnpm-lock.yaml · react 19.3.0"
    ],
    "source": "React / React DOM",
    "sourceUrl": "https://github.com/react/react",
    "channel": "기설치 node_modules 읽기 전용 확인 · 설치·의존성 변경 없음",
    "received": "설치일 확인 필요 · 2026-10-08 로컬 확인",
    "license": "MIT",
    "licenseUrl": "https://github.com/facebook/react/blob/main/LICENSE",
    "notice": "React / React DOM · MIT · 원 저작권·라이선스 고지 유지",
    "changes": "수정 없음",
    "ai": "로컬 라이선스에 AI 용도만을 별도로 제한하는 조항은 확인되지 않음",
    "check": "확인 필요: 최초 설치·수령일. 라이선스는 로컬 원문 확인",
    "privateSource": false
  },
  {
    "id": "tailwind",
    "category": "Tailwind CSS",
    "files": [
      "package.json / pnpm-lock.yaml · tailwindcss 4.3.3"
    ],
    "source": "Tailwind CSS",
    "sourceUrl": "https://github.com/tailwindlabs/tailwindcss",
    "channel": "기설치 node_modules 읽기 전용 확인 · 설치·의존성 변경 없음",
    "received": "설치일 확인 필요 · 2026-10-08 로컬 확인",
    "license": "MIT",
    "licenseUrl": "https://github.com/tailwindlabs/tailwindcss/blob/main/LICENSE",
    "notice": "Tailwind CSS · MIT · 원 저작권·라이선스 고지 유지",
    "changes": "수정 없음",
    "ai": "로컬 라이선스에 AI 용도만을 별도로 제한하는 조항은 확인되지 않음",
    "check": "확인 필요: 최초 설치·수령일. 라이선스는 로컬 원문 확인",
    "privateSource": false
  },
  {
    "id": "typescript",
    "category": "TypeScript",
    "files": [
      "package.json / pnpm-lock.yaml · typescript 5.9.3"
    ],
    "source": "TypeScript",
    "sourceUrl": "https://github.com/microsoft/TypeScript",
    "channel": "기설치 node_modules 읽기 전용 확인 · 설치·의존성 변경 없음",
    "received": "설치일 확인 필요 · 2026-10-08 로컬 확인",
    "license": "Apache-2.0",
    "licenseUrl": "https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt",
    "notice": "TypeScript · Apache-2.0 · 원 저작권·라이선스 고지 유지",
    "changes": "수정 없음",
    "ai": "로컬 라이선스에 AI 용도만을 별도로 제한하는 조항은 확인되지 않음",
    "check": "확인 필요: 최초 설치·수령일. 라이선스는 로컬 원문 확인",
    "privateSource": false
  }
] as const satisfies readonly Credit[];

export const creditsCopy = {
  "title": "크레딧 · 출처",
  "intro": "이 사이트에 사용한 자산과 도구의 출처, 사용 범위를 기록합니다.",
  "headers": [
    "파일/범주",
    "출처",
    "라이선스",
    "표기"
  ],
  "unused": "스톡 사진 0 · 일러스트(unDraw 등) 0 · Lottie 0 · 디바이스 목업 이미지 0 · Figma 키트 0. 사이트 이미지로 게시한 AI 생성 이미지 0장.",
  "rights": "이미지·영상·로고는 팀 VitAlGuard 의 자산이며 무단 사용을 금합니다. 코드와 문서 구조는 김태곤."
} as const;
