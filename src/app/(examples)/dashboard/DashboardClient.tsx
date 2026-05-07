"use client"

import { useState } from "react"
import { LayoutDashboard, Users, BarChart3, Settings, Menu, TrendingUp, ShoppingCart, DollarSign, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn, formatNumber } from "@/lib/utils"

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "대시보드", active: true },
  { icon: Users, label: "사용자 관리", active: false },
  { icon: BarChart3, label: "통계", active: false },
  { icon: Settings, label: "설정", active: false },
]

const STATS = [
  { title: "총 사용자", value: 14520, change: "+12%", icon: Users, trend: "up" },
  { title: "이번 달 매출", value: 4850000, change: "+8%", icon: DollarSign, trend: "up", prefix: "₩" },
  { title: "주문 건수", value: 1247, change: "-3%", icon: ShoppingCart, trend: "down" },
  { title: "활성 세션", value: 382, change: "+24%", icon: Activity, trend: "up" },
]

const RECENT_USERS = [
  { name: "김민준", email: "minjun@example.com", role: "관리자", initials: "김민" },
  { name: "이서연", email: "seoyeon@example.com", role: "사용자", initials: "이서" },
  { name: "박도현", email: "dohyun@example.com", role: "사용자", initials: "박도" },
  { name: "최지아", email: "jia@example.com", role: "편집자", initials: "최지" },
  { name: "정하은", email: "haeun@example.com", role: "사용자", initials: "정하" },
]

export function DashboardClient() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* 사이드바 */}
      <aside
        className={cn(
          "flex flex-col border-r border-border bg-background transition-all duration-300",
          isSidebarOpen ? "w-60" : "w-16"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          {isSidebarOpen && <span className="text-sm font-semibold">관리자 메뉴</span>}
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <nav className="flex-1 space-y-1 p-2">
          {SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {isSidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 overflow-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
          <p className="text-sm text-muted-foreground">오늘의 현황을 확인하세요</p>
        </div>

        {/* 통계 카드 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ title, value, change, icon: Icon, trend, prefix }) => (
            <Card key={title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {prefix}{formatNumber(value)}
                </p>
                <p className={cn("text-xs mt-1 flex items-center gap-1", trend === "up" ? "text-green-600" : "text-destructive")}>
                  <TrendingUp className={cn("h-3 w-3", trend === "down" && "rotate-180")} />
                  {change} 전월 대비
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 최근 사용자 */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">최근 가입 사용자</CardTitle>
            <Button variant="outline" size="sm">전체 보기</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {RECENT_USERS.map((user) => (
                <div key={user.email} className="flex items-center justify-between rounded-lg p-2 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">{user.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Badge variant={user.role === "관리자" ? "default" : "secondary"}>
                    {user.role}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
