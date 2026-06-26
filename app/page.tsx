"use client"

import Link from "next/link"
import { useAuth } from "@/providers/auth-provider"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { GraduationCap, Sun, Moon, LogOut, LayoutDashboard } from "lucide-react"

export default function LandingPage() {
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Premium Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-primary to-violet-500 text-primary-foreground shadow-md shadow-primary/20">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-xl font-bold tracking-tight">
              Baby_Bytez
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <span className="h-4 w-px bg-border" />
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            </Button>

            {/* Authentication Action Buttons */}
            {!user ? (
              <div className="flex items-center gap-2">
                <Link href="/auth/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm font-semibold"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button
                    size="sm"
                    className="bg-primary text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="hidden rounded-full border border-border/50 bg-muted px-2.5 py-1 text-xs text-muted-foreground sm:inline-block">
                  Logged in as{" "}
                  <strong className="font-semibold text-foreground">
                    {user.email}
                  </strong>{" "}
                  ({user.role})
                </span>
                <Link
                  href={
                    user.role === "admin" || user.role === "lecturer"
                      ? "/admin/dashboard"
                      : "/students/dashboard"
                  }
                >
                  <Button size="sm" className="gap-1.5 text-sm font-semibold">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="gap-1.5 border-destructive/20 text-sm font-semibold text-destructive hover:border-destructive/30 hover:bg-destructive/10"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 sm:py-32">
          {/* Background Decorative Gradients */}
          <div className="absolute inset-0 -z-10 bg-radial-[at_top_right] from-primary/10 via-background to-background" />
          <div className="absolute top-1/2 left-1/4 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="container mx-auto max-w-4xl space-y-8 px-4 text-center sm:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Empowering Team Collboration with <br />
              <span className="bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                Next-Gen Portal Controls
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A secure, role-based dashboard application tailored for students,
              lecturers, and administrators. Manage courses, track performance,
              and directory lists in real-time.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Baby_Bytez_Portal Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <span className="font-mono">
              Press{" "}
              <kbd className="rounded-sm border bg-muted px-1 py-0.5">d</kbd> to
              toggle themes
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
