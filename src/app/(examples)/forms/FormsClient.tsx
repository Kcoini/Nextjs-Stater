"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { loginSchema, registerSchema, type LoginFormData, type RegisterFormData } from "@/lib/validations/auth"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"
import { cn } from "@/lib/utils"

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="text-sm text-destructive">{message}</p>
}

function FieldLabel({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}{required && <span className="text-destructive ml-1">*</span>}
    </label>
  )
}

function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    await new Promise((r) => setTimeout(r, 1000))
    toast.success(`${data.email}로 로그인 성공!`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>이메일과 비밀번호로 로그인하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="login-email" required>이메일</FieldLabel>
            <Input
              id="login-email"
              type="email"
              placeholder="email@example.com"
              className={cn(errors.email && "border-destructive")}
              {...register("email")}
            />
            <FieldError message={errors.email?.message} />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="login-pw" required>비밀번호</FieldLabel>
            <Input
              id="login-pw"
              type="password"
              placeholder="••••••••"
              className={cn(errors.password && "border-destructive")}
              {...register("password")}
            />
            <FieldError message={errors.password?.message} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            로그인
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function RegisterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    await new Promise((r) => setTimeout(r, 1000))
    toast.success(`${data.name}님, 회원가입 완료!`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>새 계정을 만들어 시작하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            { id: "reg-name", label: "이름", name: "name" as const, type: "text", placeholder: "홍길동" },
            { id: "reg-email", label: "이메일", name: "email" as const, type: "email", placeholder: "email@example.com" },
            { id: "reg-pw", label: "비밀번호", name: "password" as const, type: "password", placeholder: "••••••••" },
            { id: "reg-cpw", label: "비밀번호 확인", name: "confirmPassword" as const, type: "password", placeholder: "••••••••" },
          ].map(({ id, label, name, type, placeholder }) => (
            <div key={name} className="space-y-1.5">
              <FieldLabel htmlFor={id} required>{label}</FieldLabel>
              <Input
                id={id}
                type={type}
                placeholder={placeholder}
                className={cn(errors[name] && "border-destructive")}
                {...register(name)}
              />
              <FieldError message={errors[name]?.message} />
            </div>
          ))}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            회원가입
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    void data
    await new Promise((r) => setTimeout(r, 1000))
    toast.success("문의가 성공적으로 전송되었습니다!")
    reset()
  }

  return (
    <Card className="sm:col-span-2">
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
        <CardDescription>궁금한 점을 남겨주세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <FieldLabel htmlFor="contact-name" required>이름</FieldLabel>
              <Input id="contact-name" placeholder="홍길동" className={cn(errors.name && "border-destructive")} {...register("name")} />
              <FieldError message={errors.name?.message} />
            </div>
            <div className="space-y-1.5">
              <FieldLabel htmlFor="contact-email" required>이메일</FieldLabel>
              <Input id="contact-email" type="email" placeholder="email@example.com" className={cn(errors.email && "border-destructive")} {...register("email")} />
              <FieldError message={errors.email?.message} />
            </div>
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="contact-subject" required>제목</FieldLabel>
            <Input id="contact-subject" placeholder="문의 제목" className={cn(errors.subject && "border-destructive")} {...register("subject")} />
            <FieldError message={errors.subject?.message} />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="contact-message" required>메시지</FieldLabel>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="문의 내용을 입력해주세요"
              className={cn(
                "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none",
                errors.message && "border-destructive"
              )}
              {...register("message")}
            />
            <FieldError message={errors.message?.message} />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            문의 전송
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export function FormsClient() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">폼 예시</h1>
        <p className="mt-2 text-muted-foreground">React Hook Form + Zod 기반 폼 패턴</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <LoginForm />
        <RegisterForm />
        <ContactForm />
      </div>
    </div>
  )
}
