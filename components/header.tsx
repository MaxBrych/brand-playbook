"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, User } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Get started", href: "/get-started" },
  { name: "Brand strategy", href: "/brand-strategy", locked: true },
  { name: "Foundations", href: "/foundations" },
  { name: "Design system", href: "/design-system" },
  { name: "Expressions", href: "/expressions" },
  { name: "Resources", href: "/resources" },
  { name: "Articles", href: "/articles" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="font-bold text-xl">Brand Playbook</span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-foreground" : "text-muted-foreground",
                item.locked && "flex items-center gap-1",
              )}
            >
              {item.name}
              {item.locked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/account" className="text-muted-foreground hover:text-foreground">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Link>
          <ModeToggle />
          <Link href="/search" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

