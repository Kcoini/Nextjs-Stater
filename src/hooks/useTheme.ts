"use client"

import { useEffect } from "react"
import { useThemeStore } from "@/store/useThemeStore"

export function useTheme() {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = theme === "dark" || (theme === "system" && prefersDark)
    root.classList.toggle("dark", isDark)
  }, [theme])

  return { theme, setTheme }
}
