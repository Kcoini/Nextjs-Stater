import { createMetadata } from "@/lib/metadata"
import { DashboardClient } from "./DashboardClient"

export const metadata = createMetadata({
  title: "대시보드",
  description: "사이드바 레이아웃 예시",
})

export default function DashboardPage() {
  return <DashboardClient />
}
