"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Loader2, Check, Trash, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Spinner } from "@/components/custom/Spinner"
import { EmptyState } from "@/components/common/EmptyState"

export function ComponentsClient() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-12">
      {/* 버튼 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <Card>
          <CardContent className="flex flex-wrap gap-3 pt-6">
            <Button>기본</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>비활성</Button>
            <Button onClick={handleLoadingDemo} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "처리 중..." : "로딩 예시"}
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* 배지 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badge</h2>
        <Card>
          <CardContent className="flex flex-wrap gap-3 pt-6">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </CardContent>
        </Card>
      </section>

      {/* 카드 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Card</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>카드 제목</CardTitle>
              <CardDescription>카드에 대한 설명 텍스트입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">카드 본문 내용이 여기에 들어갑니다.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/50">
            <CardHeader>
              <Badge className="w-fit mb-2">인기</Badge>
              <CardTitle>강조 카드</CardTitle>
              <CardDescription>테두리 색상을 변경한 카드 예시입니다.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* 인풋 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Input</h2>
        <Card>
          <CardContent className="flex flex-col gap-3 pt-6 max-w-sm">
            <Input placeholder="기본 인풋" />
            <Input placeholder="비활성 인풋" disabled />
            <Input type="password" placeholder="비밀번호" />
          </CardContent>
        </Card>
      </section>

      {/* 아바타 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Avatar</h2>
        <Card>
          <CardContent className="flex gap-4 pt-6">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/1" alt="사용자" />
              <AvatarFallback>KO</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">CD</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>
      </section>

      {/* 다이얼로그 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog</h2>
        <Card>
          <CardContent className="flex gap-3 pt-6">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                모달 열기
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>다이얼로그 제목</DialogTitle>
                  <DialogDescription>다이얼로그 내용이 여기에 들어갑니다.</DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">취소</Button>
                  <Button>확인</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </section>

      {/* 토스트 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Toast (Sonner)</h2>
        <Card>
          <CardContent className="flex flex-wrap gap-3 pt-6">
            <Button variant="outline" onClick={() => toast.success("성공적으로 처리되었습니다!")}>
              <Check className="mr-2 h-4 w-4" /> 성공
            </Button>
            <Button variant="outline" onClick={() => toast.error("오류가 발생했습니다.")}>
              <Trash className="mr-2 h-4 w-4" /> 오류
            </Button>
            <Button variant="outline" onClick={() => toast.warning("주의가 필요합니다.")}>
              <Bell className="mr-2 h-4 w-4" /> 경고
            </Button>
            <Button variant="outline" onClick={() => toast.info("새로운 알림이 있습니다.")}>
              <Bell className="mr-2 h-4 w-4" /> 정보
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* 스피너 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spinner</h2>
        <Card>
          <CardContent className="flex gap-6 items-center pt-6">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </CardContent>
        </Card>
      </section>

      {/* 빈 상태 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">EmptyState</h2>
        <Card>
          <EmptyState
            title="데이터가 없습니다"
            description="새 항목을 추가하여 시작하세요."
            action={<Button size="sm">새 항목 추가</Button>}
          />
        </Card>
      </section>
    </div>
  )
}
