import Link from "next/link"
import { ArrowRight, Zap, Palette, Shield, Layers, FormInput, LayoutDashboard } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { EXAMPLE_ROUTES } from "@/lib/constants"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "홈",
  description: "Next.js 15 + TailwindCSS v4 + shadcn/ui 기반 스타터킷",
})

const STACK_BADGES = [
  "Next.js 15", "TypeScript", "TailwindCSS v4", "shadcn/ui", "Zustand", "React Hook Form", "Zod",
]

const FEATURES = [
  { icon: Zap, title: "빠른 시작", description: "프로젝트 구조가 미리 설정되어 바로 개발을 시작할 수 있습니다." },
  { icon: Palette, title: "다크모드", description: "Zustand로 관리되는 라이트/다크/시스템 테마를 지원합니다." },
  { icon: Shield, title: "타입 안전성", description: "any 타입 없이 TypeScript로 엄격하게 작성된 코드베이스입니다." },
  { icon: Layers, title: "UI 컴포넌트", description: "shadcn/ui 기반의 접근성 높은 재사용 컴포넌트를 제공합니다." },
  { icon: FormInput, title: "폼 검증", description: "React Hook Form + Zod로 안전하고 간결한 폼 처리를 구현합니다." },
  { icon: LayoutDashboard, title: "레이아웃 예시", description: "대시보드, 사이드바 등 다양한 레이아웃 패턴을 참고할 수 있습니다." },
]

const ROUTE_ICONS = {
  "/components": Layers,
  "/forms": FormInput,
  "/dashboard": LayoutDashboard,
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* 히어로 섹션 */}
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <Zap className="h-3.5 w-3.5 text-primary" />
          Next.js 15 App Router 기반 스타터킷
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          빠르게 시작하는{" "}
          <span className="text-primary">웹 개발</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Next.js 15, TypeScript, TailwindCSS v4, shadcn/ui가 미리 구성된 스타터킷입니다.
          반복적인 설정 없이 바로 비즈니스 로직 개발에 집중하세요.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {STACK_BADGES.map((badge) => (
            <Badge key={badge} variant="secondary">{badge}</Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href="/components" className={cn(buttonVariants({ size: "lg" }))}>
            컴포넌트 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/dashboard" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            대시보드 예시
          </Link>
        </div>
      </section>

      {/* 기능 그리드 */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">포함된 기능</h2>
          <p className="text-muted-foreground">개발에 필요한 것들이 미리 준비되어 있습니다</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* 예시 페이지 */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">예시 페이지</h2>
          <p className="text-muted-foreground">실제 사용 패턴을 바로 확인해보세요</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {EXAMPLE_ROUTES.map((route) => {
            const Icon = ROUTE_ICONS[route.path as keyof typeof ROUTE_ICONS] ?? Layers
            return (
              <Link key={route.path} href={route.path}>
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30 cursor-pointer">
                  <CardHeader>
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-base">{route.label}</CardTitle>
                    <CardDescription>{route.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
