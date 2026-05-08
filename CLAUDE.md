# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev      # Turbopack 개발 서버 (포트 3000, 사용 중이면 3001, 3002... 순서로 자동 변경)
npm run build    # Turbopack 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

테스트 프레임워크는 설정되어 있지 않음.

## 아키텍처 핵심 규칙

### 서버 컴포넌트 vs 클라이언트 컴포넌트 분리 패턴

페이지 라우트(`page.tsx`)는 **반드시 서버 컴포넌트**로 유지해야 `metadata` export가 동작한다.
클라이언트 로직이 필요한 경우 `*Client.tsx` 파일로 분리한다.

```
app/(examples)/forms/
  page.tsx          ← 서버 컴포넌트: metadata export + FormsClient 렌더링만
  FormsClient.tsx   ← 클라이언트 컴포넌트: "use client" + 실제 UI 로직
```

`components/page.tsx`, `dashboard/page.tsx`, `forms/page.tsx` 모두 이 패턴을 따름.

### 메타데이터 생성

`src/lib/metadata.ts`의 `createMetadata()` 함수를 사용한다. 직접 `Metadata` 객체를 만들지 않는다.

```ts
export const metadata = createMetadata({ title: "페이지명", description: "설명" })
```

### 테마 관리

테마는 Zustand(`useThemeStore`)로 관리한다. `next-themes`는 설치되어 있으나 프로젝트에서 사용하지 않는다. 테마 관련 작업 시 반드시 `useThemeStore` 또는 커스텀 `useTheme` 훅(`src/hooks/useTheme.ts`)을 사용한다.

- 테마 상태: `src/store/useThemeStore.ts` (Zustand persist, localStorage 저장)
- 테마 적용: `useTheme` 훅이 `useEffect`로 `document.documentElement`의 `.dark` 클래스를 토글

### 폼 처리 패턴

React Hook Form + Zod 조합. Zod 스키마는 `src/lib/validations/`에 위치.

```ts
const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
})
```

### Toast 알림

`sonner` 라이브러리 사용. `toast.success()`, `toast.error()` 등 직접 호출.
`Toaster` 컴포넌트는 `layout.tsx`에 전역 등록되어 있어 별도 Provider 불필요.

## 디렉토리 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃: Header, Footer, Toaster 포함
│   ├── (examples)/         # 예시 페이지 라우트 그룹 (URL에 미포함)
│   │   ├── components/
│   │   ├── forms/
│   │   └── dashboard/
├── components/
│   ├── ui/                 # shadcn/ui 기반 기본 컴포넌트 (수정 주의)
│   ├── layout/             # Header, Footer
│   ├── custom/             # ThemeToggle, Spinner
│   └── common/             # EmptyState, ErrorBoundary
├── lib/
│   ├── utils.ts            # cn(), formatDate(), formatNumber() 등 유틸리티
│   ├── constants.ts        # SITE_NAME, SITE_URL, NAV_LINKS
│   ├── metadata.ts         # createMetadata() 팩토리
│   └── validations/        # Zod 스키마 (auth.ts, contact.ts)
├── store/                  # Zustand 스토어
├── hooks/                  # 커스텀 훅
└── types/                  # TypeScript 타입 정의
```

## 환경변수

`.env.local` 파일이 없으면 `.env.example`을 복사해서 생성한다.

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=NextJS Starter Kit
```

## 타입 시스템

공통 타입은 `src/types/common.ts`에 정의되어 있음. `ApiResponse<T>`, `PaginatedResponse<T>`, `User`, `RouteConfig` 등.
UI 관련 타입은 `src/types/ui.ts`.
`any` 타입 사용 금지.
