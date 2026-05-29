import React from "react"
import { Shield, Terminal, Download } from "lucide-react"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-pulse/20 bg-brand-pulse/10 text-brand-pulse text-xs font-semibold mb-6 animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pulse opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pulse"></span>
          </span>
          Native macOS Menu Bar App
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-6 max-w-3xl mx-auto leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-brand-pulse">
          Keep your AI agents in rhythm.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Takt is a native macOS menu bar app that schedules AI CLI agents, aligns session windows, checks your network environment before every run, and gives you scriptable control from the terminal.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
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
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-brand-md border border-border-default bg-bg-panelAlt px-8 text-base font-semibold text-text-primary hover:bg-bg-panel transition-all duration-150"
          >
            <GithubIcon className="w-5 h-5" /> View on GitHub
          </a>
        </div>

        {/* Microcopy */}
        <p className="text-xs text-text-tertiary mb-16">
          Open-source. Local-first. No cloud account required.
        </p>

        {/* Hero Visual Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Glowing Effect behind Mockup */}
          <div className="absolute inset-0 bg-brand-pulse/10 rounded-brand-lg blur-2xl -z-10 pointer-events-none" />

          {/* Interactive macOS Mockup Window */}
          <div className="rounded-brand-lg border border-border-default/80 bg-brand-graphite/90 shadow-2xl overflow-hidden glass-panel text-left">
            {/* macOS Window Controls */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-default/50 bg-bg-canvas/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
              </div>
              <span className="text-xs text-text-tertiary font-mono select-none">Takt Agents Dashboard</span>
              <div className="w-12" /> {/* spacing element */}
            </div>

            {/* Split layout inside mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
              
              {/* Left Column: Menu Bar Dropdown Simulation */}
              <div className="lg:col-span-4 border-r border-border-default/50 p-6 bg-bg-canvas/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-text-tertiary">Menu Bar Extra</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-status-success/10 text-status-success font-semibold border border-status-success/20">Running</span>
                  </div>
                  
                  {/* Dropdown Items list */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-brand-sm border border-border-default bg-bg-panel flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🤖</span>
                        <div>
                          <p className="text-xs font-semibold text-text-primary">Claude Code</p>
                          <p className="text-[10px] text-text-tertiary">Next run: 18:00</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-status-success/10 text-status-success border border-status-success/20 font-semibold">✓ Aligned</span>
                    </div>

                    <div className="p-3 rounded-brand-sm border border-border-default bg-bg-panel/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">💻</span>
                        <div>
                          <p className="text-xs font-semibold text-text-primary">Codex Agent</p>
                          <p className="text-[10px] text-text-tertiary">Next run: 13:00</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-status-running/10 text-status-running border border-status-running/20 font-semibold animate-pulse">● Running</span>
                    </div>

                    <div className="p-3 rounded-brand-sm border border-border-default bg-bg-panel/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🛡</span>
                        <div>
                          <p className="text-xs font-semibold text-text-primary">Aider</p>
                          <p className="text-[10px] text-text-tertiary">Last run: Failed</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-status-error/10 text-status-error border border-status-error/20 font-semibold">⊘ Blocked</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-default/40">
                  <p className="text-[10px] text-text-tertiary leading-relaxed">
                    Start Claude, Codex, Aider, Gemini CLI, or any custom command exactly when you want the session window to begin.
                  </p>
                </div>
              </div>

              {/* Right Column: Settings Window / Detail View Simulation */}
              <div className="lg:col-span-8 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-border-default/50 pb-4 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-text-primary">Agent Configuration</h3>
                      <p className="text-xs text-text-secondary">Edit local agents and cron timetables</p>
                    </div>
                    <span className="text-xs text-text-tertiary font-mono">claude.yaml</span>
                  </div>

                  {/* Settings Mock details */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-text-tertiary block mb-1">Command</label>
                        <input type="text" readOnly value="claude" className="w-full bg-bg-panelAlt/50 border border-border-default rounded-brand-sm px-3 py-1.5 text-xs text-text-primary font-mono focus:outline-none" />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-text-tertiary block mb-1">Schedule (Cron)</label>
                        <input type="text" readOnly value="0 8,13,18,23 * * *" className="w-full bg-bg-panelAlt/50 border border-border-default rounded-brand-sm px-3 py-1.5 text-xs text-text-primary font-mono focus:outline-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-semibold text-text-tertiary block mb-1">Arguments</label>
                      <input type="text" readOnly value="--dangerously-skip-permissions" className="w-full bg-bg-panelAlt/50 border border-border-default rounded-brand-sm px-3 py-1.5 text-xs text-text-primary font-mono focus:outline-none" />
                    </div>

                    <div className="p-4 rounded-brand-sm border border-border-default bg-bg-panelAlt/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-brand-sm bg-status-success/10 text-status-success border border-status-success/20">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-text-primary">Network Guard pre-flight check</p>
                          <p className="text-[10px] text-text-secondary">Prevents launching when on blocked IPs</p>
                        </div>
                      </div>
                      <div className="w-8 h-4 rounded-full bg-brand-pulse relative p-0.5 cursor-pointer">
                        <span className="w-3 h-3 rounded-full bg-text-onAccent absolute right-0.5 top-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Mock: CLI Terminal example */}
                <div className="mt-6 pt-4 border-t border-border-default/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-3.5 h-3.5 text-brand-pulse" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-text-tertiary font-mono">Terminal Output</span>
                  </div>
                  <div className="bg-brand-navy p-3 rounded-brand-sm border border-border-default font-mono text-[11px] text-brand-onDark space-y-1">
                    <p className="text-text-tertiary">$ takt status</p>
                    <p><span className="text-status-success">✓</span> Scheduler: Active</p>
                    <p><span className="text-brand-pulse">●</span> Active agents: claude (next: 18:00), codex (running...)</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
