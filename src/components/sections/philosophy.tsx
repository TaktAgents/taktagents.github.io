import React from "react"
import { EyeOff, Command, Cpu } from "lucide-react"

export const Philosophy: React.FC = () => {
  const principles = [
    {
      icon: <EyeOff className="w-6 h-6 text-brand-pulse" />,
      title: "Local-first",
      description: "No servers, no telemetry, no cloud database. Everything is kept inside your local machine in plain sight.",
    },
    {
      icon: <Command className="w-6 h-6 text-status-success" />,
      title: "Scriptable",
      description: "Designed for power developers. Seamless control using environment variables, local scripts, or UNIX domain socket CLI.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-status-warning" />,
      title: "Predictable",
      description: "No smart-agent AI wrappers, magic workflows, or unexpected decisions. Takt simply schedules and guards your local runs exactly as configured.",
    },
  ]

  return (
    <section id="philosophy" className="py-16 md:py-24 border-t border-border-default/50 bg-bg-panel/20 transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-brand-pulse">Core Values</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary">
            Not another AI wrapper.
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Takt does not chat with your agents, proxy your requests, store your prompts, or add a cloud layer. It simply starts the right local command at the right time, after the right checks.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-bg-canvas/40 border border-border-default/50 rounded-brand-lg glass-panel">
              <div className="w-12 h-12 rounded-full bg-bg-panel border border-border-default flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
