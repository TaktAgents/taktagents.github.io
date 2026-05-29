import React from "react"
import { Download, BookOpen } from "lucide-react"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const Cta: React.FC = () => {
  return (
    <section id="download" className="relative overflow-hidden py-20 md:py-28 border-t border-border-default/50 bg-bg-canvas transition-colors duration-200">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-pulse/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          Take back your session rhythm.
        </h2>
        
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Install Takt and align your agents with your actual workday. Experience a native macOS menu bar experience with absolute local control.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-brand-md bg-brand-pulse px-8 text-base font-semibold text-text-onAccent hover:bg-brand-pulseHover shadow-lg hover:shadow-brand-pulse/25 transition-all duration-150"
          >
            <Download className="w-5 h-5" /> Download for macOS
          </a>
          
          <a
            href="https://github.com/TaktAgents/takt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-brand-md border border-border-default bg-bg-panel px-6 text-base font-semibold text-text-primary hover:bg-bg-panelAlt transition-all duration-150"
          >
            <GithubIcon className="w-5 h-5" /> View on GitHub
          </a>

          <a
            href="/docs"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-brand-md border border-border-default bg-bg-panel px-6 text-base font-semibold text-text-primary hover:bg-bg-panelAlt transition-all duration-150"
          >
            <BookOpen className="w-5 h-5" /> Read the docs
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-text-tertiary pt-6 max-w-xl mx-auto">
          Takt Agents is open-source and built for macOS power users who live in terminal, menu bar utilities, and AI coding workflows.
        </p>

      </div>
    </section>
  )
}
