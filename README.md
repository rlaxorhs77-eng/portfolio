# 김태곤 포트폴리오

2인 팀 VitAlGuard에서 맡은 DB 설계, 현장 하드웨어, 담당관 태블릿 요구정의·검수, 워치 ML 작업을 소개하는 한국어 포트폴리오입니다.

사이트: https://kimtaegon.kr · [크레딧 · 출처](https://kimtaegon.kr/credits/)

Next.js 16 App Router · React 19 · TypeScript strict · Tailwind CSS v4.

## 로컬 실행

Node 22와 pnpm 11.1.2를 사용합니다.

```sh
corepack enable
corepack prepare pnpm@11.1.2 --activate
pnpm install
pnpm dev
```

```sh
pnpm typecheck
pnpm build
pnpm start
```

`pnpm start`는 빌드된 `out/`을 로컬에서 확인하는 정적 서버입니다. 첫 설치로 생성된 `pnpm-lock.yaml`을 커밋한 뒤 Amplify에 연결합니다. `amplify.yml`이 잠금 파일 기준 설치 → 빌드 → `out/` 배포를 수행합니다.

문구·이미지·캡션은 `content/*.ts`에서 수정합니다. `content/site.ts`의 `SITE_URL`은 `https://kimtaegon.kr`입니다. 조직 저장소 공개 후 `ORG_REPO_PUBLIC`을 켜면 산출물·Release 링크가 함께 표시됩니다. 내부 기록은 Git에서 제외됩니다.

## 콘텐츠 권리

이미지·영상·로고는 팀 VitAlGuard의 자산이며, 팀원 포트폴리오 사용 범위로 게시합니다. 원본의 공개·재배포 범위는 조직 저장소 포트폴리오 폴더의 공개 전환 결정과 연동합니다. 글은 김태곤의 저작물입니다.

코드 라이선스는 김태곤의 결정 대기 중입니다. 자체 코드와 글은 **별도 고지 전까지 All rights reserved**입니다. 외부 의존성에는 각 원 라이선스가 적용됩니다. [에셋 출처 대장](THIRD_PARTY_ASSETS.md)에 파일별 출처·변환·권리 조건을 기록합니다.
