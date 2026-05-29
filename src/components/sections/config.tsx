import React from "react"
import { Settings, FileCode } from "lucide-react"

export const Config: React.FC = () => {
  const yamlConfig = `name: Claude Code
enabled: true
command: claude
args:
  - --dangerously-skip-permissions
stdin: "ok"
schedule:
  - "0 8 * * *"
  - "0 13 * * *"
  - "0 18 * * *"
  - "0 23 * * *"
execution_mode: interactive_tty
timeout_seconds: 30`

  return (
    <section id="config" className="py-16 md:py-24 border-t border-border-default/50 bg-bg-canvas transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* YAML Config Block */}
          <div className="lg:col-span-7 lg:order-last">
            <div className="rounded-brand-lg border border-border-default bg-brand-navy shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Header */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-bg-panelAlt/30 border-b border-border-default/50">
                <FileCode className="w-4 h-4 text-brand-pulse" />
                <span className="text-[10px] tracking-wider text-text-secondary font-semibold font-sans">agents/claude.yaml</span>
              </div>

              {/* YAML Body */}
              <pre className="p-5 overflow-x-auto text-brand-onDark bg-[#080b11] leading-relaxed select-all">
                <code>{yamlConfig}</code>
              </pre>

            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-pulse/20 bg-brand-pulse/10 text-brand-pulse text-xs font-semibold">
              <Settings className="w-3.5 h-3.5" /> Configuration
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
              Plain config. Native UI.
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Use the settings window for day-to-day changes, or edit YAML directly when you want full control.
              </p>
              <p>
                Every agent is fully configured as a separate, human-readable declarative YAML file. You can easily version control your schedules, parameters, and network conditions in a dotfiles repository.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
