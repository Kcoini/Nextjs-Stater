import Link from "next/link"
import { Home } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-6 py-32 text-center">
      <p className="text-8xl font-bold text-primary">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">페이지를 찾을 수 없습니다</h1>
        <p className="text-muted-foreground">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
      </div>
      <Link href="/" className={cn(buttonVariants())}>
        <Home className="mr-2 h-4 w-4" />홈으로
      </Link>
    </div>
  )
}
