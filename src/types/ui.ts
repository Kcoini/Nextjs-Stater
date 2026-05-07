export type ButtonVariant = "default" | "secondary" | "ghost" | "destructive" | "outline" | "link"
export type ButtonSize = "sm" | "default" | "lg" | "icon"

export type ToastType = "success" | "error" | "warning" | "info"

export interface ToastMessage {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
}

export interface NavLink {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  children?: NavLink[]
}

export interface BreadcrumbItem {
  label: string
  href?: string
}
