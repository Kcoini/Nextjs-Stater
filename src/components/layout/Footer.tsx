import Link from "next/link"
import { Zap } from "lucide-react"
import { SITE_NAME } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Zap className="h-4 w-4 text-primary" />
          <span>{SITE_NAME}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} {SITE_NAME}. Next.js 15 · TailwindCSS v4 · shadcn/ui
        </p>
        <nav className="flex gap-4">
          {[
            { label: "GitHub", href: "https://github.com/Kcoini/Nextjs-Stater" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
