import React, { useState } from "react"
import { Terminal as TerminalIcon, Copy, Check } from "lucide-react"

export const Cli: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const commands = [
    "takt status",
    "takt agents",
    "takt run claude",
    "takt run-all",
    "takt guard check",
    "takt limits",
    "takt pause 2h",
    "takt resume",
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(commands.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="cli" className="py-16 md:py-24 border-t border-border-default/50 bg-bg-panel/20 transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-pulse/20 bg-brand-pulse/10 text-brand-pulse text-xs font-semibold">
              <TerminalIcon className="w-3.5 h-3.5" /> CLI First
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
              Everything is scriptable.
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Takt ships with a local CLI, so you can control the menu bar app from shell scripts, Raycast, Antigravity, Codex, launchd jobs, or project automation.
              </p>
              <p>
                The CLI talks to the running macOS app over a local-only interface. No remote server. No account. No cloud control plane.
              </p>
            </div>
          </div>

          {/* Terminal Block */}
          <div className="lg:col-span-7">
            <div className="rounded-brand-lg border border-border-default bg-brand-navy shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-bg-panelAlt/30 border-b border-border-default/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-border-strong/50 inline-block" />
                  <span className="text-[10px] tracking-wider text-text-secondary font-semibold font-sans">zsh</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1 hover:bg-bg-panelAlt rounded transition-colors text-text-tertiary hover:text-text-primary"
                  aria-label="Copy commands"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-status-success" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 text-brand-onDark space-y-3 bg-[#080b11]">
                {commands.map((cmd, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-text-tertiary select-none">~</span>
                    <div>
                      <p className="text-brand-pulse font-bold">{cmd}</p>
                      {cmd === "takt status" && (
                        <div className="mt-1 text-[11px] text-text-secondary pl-2 border-l border-border-default/30 space-y-0.5">
                          <p><span className="text-status-success">✓</span> Takt Core daemon running (PID 8473)</p>
                          <p>Schedule: Enabled (4 agents loaded)</p>
                        </div>
                      )}
                      {cmd === "takt agents" && (
                        <div className="mt-1 text-[11px] text-text-secondary pl-2 border-l border-border-default/30 space-y-0.5">
                          <p>- claude: 08:00, 13:00, 18:00, 23:00 (next run: 18:00)</p>
                          <p>- codex: 09:00, 14:00, 19:00 (next run: 14:00)</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
