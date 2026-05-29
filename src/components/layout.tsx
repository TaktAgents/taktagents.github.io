import React, { useEffect, useState } from "react"
import { Moon, Sun, ArrowUpRight } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Takt is dark theme by default, check if there is a saved setting
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-bg-canvas text-text-primary selection:bg-brand-pulse selection:text-text-onAccent transition-colors duration-200">
      {/* Background Glows for Premium Aesthetic */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-pulse/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-1/4 w-[400px] h-[400px] bg-status-success/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border-default/50 bg-bg-canvas/80 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-brand-md bg-brand-pulse/10 text-brand-pulse overflow-hidden transition-transform group-hover:scale-105">
              <div className="absolute inset-0 bg-brand-pulse/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Pulse Icon / Soundwave */}
              <div className="flex items-end gap-[2px] h-4">
                <span className="w-[2px] h-2 bg-current rounded-full animate-pulse-slow" style={{ animationDelay: '0.1s' }} />
                <span className="w-[2px] h-4 bg-current rounded-full animate-pulse-slow" style={{ animationDelay: '0.3s' }} />
                <span className="w-[2px] h-3 bg-current rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                <span className="w-[2px] h-1 bg-current rounded-full animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-text-primary">
              Takt
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
            <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
            <a href="#cli" className="hover:text-text-primary transition-colors">CLI</a>
            <a href="#network-guard" className="hover:text-text-primary transition-colors">Network Guard</a>
            <a href="#limits" className="hover:text-text-primary transition-colors">Limits</a>
            <a href="https://github.com/TaktAgents/takt" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1">
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-brand-sm text-text-secondary hover:text-text-primary hover:bg-bg-panelAlt transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#download"
              className="inline-flex h-9 items-center justify-center rounded-brand-sm bg-brand-pulse px-4 text-sm font-semibold text-text-onAccent hover:bg-brand-pulseHover transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border-default bg-bg-panel py-12 transition-colors duration-200">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-[2px] h-3 text-text-tertiary">
              <span className="w-[1.5px] h-1.5 bg-current rounded-full" />
              <span className="w-[1.5px] h-3 bg-current rounded-full" />
              <span className="w-[1.5px] h-2 bg-current rounded-full" />
              <span className="w-[1.5px] h-1 bg-current rounded-full" />
            </div>
            <span className="text-sm font-semibold text-text-secondary">Takt Agents</span>
          </div>

          <p className="text-xs text-text-tertiary text-center md:text-left">
            Takt is open-source. Local-first. No cloud account required. Built for macOS power users.
          </p>

          <div className="flex gap-4 text-xs font-semibold text-text-secondary">
            <a href="https://github.com/TaktAgents" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
            <a href="https://taktagents.github.io/docs/" className="hover:text-text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
