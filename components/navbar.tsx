"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          verahmokaya
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <Link
              href="/projects"
              className={`text-sm transition-colors ${
                isActive("/projects") ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className={`text-sm transition-colors ${
                isActive("/skills") ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Skills
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors ${
                isActive("/about") ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm transition-colors ${
                isActive("/contact") ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Resume Button */}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/resume.pdf" download>
              Resume
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
