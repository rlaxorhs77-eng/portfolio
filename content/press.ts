// Source: 작업기록/press-2026-08-raw.md, confirmed rows only.
// Article titles/bylines are verbatim metadata; no article body or image is copied.
// Historical team-size wording in a quoted title does not change our 2-person team.
export type PressEntry = Readonly<{
  date: string;
  outlet: string;
  title: string;
  reporter?: string;
  url: string;
  kind: "article" | "photo" | "release" | "blog";
  note?: "원문 표기";
}>;

export const press: readonly PressEntry[] = [
  {
    "date": "2026-08-03",
    "outlet": "이데일리",
    "title": "공공 건설현장도 AI가 안전·공사비 체크한다",
    "reporter": "박진환",
    "url": "https://www.edaily.co.kr/News/Read?newsId=02499366645543712&mediaCodeNo=257",
    "kind": "article"
  },
  {
    "date": "2026-08-03",
    "outlet": "헤럴드경제",
    "title": "조달청, ‘공공조달데이터·AI 활용 창업경진대회’ 시상식 개최",
    "reporter": "이권형",
    "url": "https://biz.heraldcorp.com/article/10829101",
    "kind": "article"
  },
  {
    "date": "2026-08-03",
    "outlet": "대한건설경제",
    "title": "조달청 AI 창업경진대회, 건설현장 안전관리비 검증부터 공사비 예측까지 대상",
    "reporter": "최항서",
    "url": "https://www.kcenews.kr/9086",
    "kind": "article"
  },
  {
    "date": "2026-08-03",
    "outlet": "뉴스웍스",
    "title": "\"공사비 예측부터 안전 관리까지\"…조달 혁신 아이디어 쏟아졌다",
    "reporter": "박광하",
    "url": "https://www.newsworks.co.kr/news/articleView.html?idxno=849132",
    "kind": "article"
  },
  {
    "date": "2026-08-03",
    "outlet": "조달경제신문",
    "title": "조달청 창업경진대회 대상에 안전관리비 검증·공사비 예측 플랫폼",
    "reporter": "윤혜숙",
    "url": "https://www.jodaleconomy.com/news/articleView.html?idxno=2890",
    "kind": "article"
  },
  {
    "date": "2026-08-03",
    "outlet": "데일리안",
    "title": "조달청 ‘공공조달데이터·AI 활용 창업경진대회’ 시상식 개최",
    "reporter": "장정욱",
    "url": "https://www.dailian.co.kr/news/view/1674031",
    "kind": "article"
  },
  {
    "date": "2026-08-03",
    "outlet": "장애인인식개선신문",
    "title": "조달청, '공공조달데이터·AI 활용 창업경진대회' 시상식 개최",
    "reporter": "방은숙",
    "url": "https://www.dpi1004.com/16385",
    "kind": "article"
  },
  {
    "date": "2026-08-06",
    "outlet": "조달경제신문",
    "title": "\"현장 안전에 쓸 돈이 딴데로 세네?\"…학원생 세명이 공공API 로 개발, 대상 영예",
    "reporter": "윤혜숙",
    "url": "https://www.jodaleconomy.com/news/articleView.html?idxno=2887",
    "kind": "article",
    "note": "원문 표기"
  },
  {
    "date": "2026-08-06",
    "outlet": "전자신문",
    "title": "스마트인재개발원 VitAIGuard팀, '공공조달데이터 AI 창업경진대회' 대상 수상",
    "reporter": "김한식",
    "url": "https://www.etnews.com/20260806000285",
    "kind": "article",
    "note": "원문 표기"
  },
  {
    "date": "2026-08-06",
    "outlet": "뉴시스",
    "title": "스마트인재개발원팀, 조달청 AI 데이터 경진대회서 대상",
    "reporter": "배상현",
    "url": "https://www.newsis.com/view/NISX20260806_0003739130",
    "kind": "article"
  },
  {
    "date": "2026-08-03",
    "outlet": "조달청 보도자료",
    "title": "공공조달데이터·AI 활용 창업 아이디어 눈길",
    "url": "https://www.pps.go.kr/kor/bbs/view.do?bbsSn=2608030008&key=00634",
    "kind": "release"
  },
  {
    "date": "2026-08-03",
    "outlet": "대한민국 정책브리핑",
    "title": "공공조달데이터·AI 활용 창업 아이디어 눈길",
    "url": "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156773123",
    "kind": "release"
  },
  {
    "date": "2026-08-03",
    "outlet": "연합뉴스 사진",
    "title": "공공조달데이터·AI활용 창업경진대회 시상식 (조달청장 인사말)",
    "url": "https://www.yna.co.kr/view/PYH20260803151400013",
    "kind": "photo"
  },
  {
    "date": "2026-08-03",
    "outlet": "연합뉴스 사진",
    "title": "공공조달데이터·AI활용 창업경진대회 시상식 (수상자 기념 촬영)",
    "url": "https://www.yna.co.kr/view/PYH20260803151500013",
    "kind": "photo"
  },
  {
    "date": "2026-08-03",
    "outlet": "비드프로",
    "title": "공공조달데이터·AI 활용 창업 아이디어 눈길 (보도자료 재게시)",
    "url": "https://www.bidpro.co.kr/n3ew.asp?ggubun=1103&num=845502",
    "kind": "release"
  },
  {
    "date": "2026-08-03",
    "outlet": "조달법인 강산 (네이버 블로그)",
    "title": "조달청 '26년 공공조달데이터·AI 창업경진대회 결과 분석",
    "url": "https://blog.naver.com/kangsan2023/224366590510",
    "kind": "blog"
  }
];

export const pressCopy = {
  title: "대상 수상 보도 — 2026년 8월",
  description: "2026 공공조달데이터·AI 활용 창업경진대회 대상 수상(8월 3일)을 다룬 기사·보도자료",
  articles: "수상 보도 기사",
  supporting: "사진 기사·보도자료",
  photos: "사진 기사",
  releases: "보도자료",
  blog: "번외: 블로그",
  blogCaption: "블로그 글",
  headers: ["날짜", "매체", "기사 제목", "기자"],
} as const;
