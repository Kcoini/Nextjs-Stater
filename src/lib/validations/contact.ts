import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  subject: z.string().min(5, "제목은 5자 이상이어야 합니다"),
  message: z.string().min(10, "메시지는 10자 이상이어야 합니다"),
})

export type ContactFormData = z.infer<typeof contactSchema>
