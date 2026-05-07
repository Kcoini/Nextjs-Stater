import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string, locale = "ko-KR"): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
    typeof date === "string" ? new Date(date) : date
  )
}

export function formatNumber(num: number, locale = "ko-KR"): string {
  return new Intl.NumberFormat(locale).format(num)
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
}

export function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
}
