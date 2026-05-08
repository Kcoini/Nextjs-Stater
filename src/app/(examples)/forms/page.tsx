import { createMetadata } from "@/lib/metadata"
import { FormsClient } from "./FormsClient"

export const metadata = createMetadata({
  title: "폼 예시",
  description: "React Hook Form + Zod 기반 폼 패턴",
})

export default function FormsPage() {
  return <FormsClient />
}
