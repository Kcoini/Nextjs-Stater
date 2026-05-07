export interface ApiResponse<T = unknown> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T = unknown> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface User {
  id: string
  email: string
  name: string
  avatarUrl?: string
  role: "admin" | "user" | "guest"
}

export interface RouteConfig {
  path: string
  label: string
  description: string
}
