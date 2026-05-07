import type { NavLink, RouteConfig } from "@/types"

export const SITE_NAME = "NextJS Starter Kit"
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const NAV_LINKS: NavLink[] = [
  { label: "홈", href: "/" },
  { label: "컴포넌트", href: "/components" },
  { label: "폼 예시", href: "/forms" },
  { label: "대시보드", href: "/dashboard" },
]

export const EXAMPLE_ROUTES: RouteConfig[] = [
  { path: "/components", label: "UI 컴포넌트", description: "버튼, 카드, 모달 등 재사용 컴포넌트" },
  { path: "/forms", label: "폼 예시", description: "입력, 유효성 검사, 제출 패턴" },
  { path: "/dashboard", label: "대시보드", description: "사이드바 레이아웃, 데이터 테이블" },
]
