import { createMetadata } from "@/lib/metadata"
import { ComponentsClient } from "./ComponentsClient"

export const metadata = createMetadata({
  title: "UI 컴포넌트",
  description: "shadcn/ui 기반 컴포넌트 갤러리",
})

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">UI 컴포넌트</h1>
        <p className="mt-2 text-muted-foreground">shadcn/ui 기반 컴포넌트 모음</p>
      </div>
      <ComponentsClient />
    </div>
  )
}
