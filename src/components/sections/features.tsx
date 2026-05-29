import React from "react"
import { Calendar, Shield, Terminal, Gauge, Database, Layers } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accentColor: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, accentColor }) => {
  return (
    <div className="group relative rounded-brand-lg border border-border-default bg-bg-panel p-6 shadow-card hover:border-border-strong/60 transition-all duration-200 glass-panel">
      {/* Accent hover glow */}
      <div className={`absolute top-0 left-0 w-full h-[2px] rounded-t-brand-lg transition-transform scale-x-0 group-hover:scale-x-100 duration-200 ${accentColor}`} />
      
      <div className="flex flex-col gap-4">
        <div className="w-10 h-10 rounded-brand-md bg-bg-panelAlt border border-border-default/50 flex items-center justify-center text-text-secondary group-hover:text-brand-pulse group-hover:border-brand-pulse/30 transition-colors duration-200">
          {icon}
        </div>
        <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export const Features: React.FC = () => {
  const list = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Scheduled Agent Runs",
      description: "Run any CLI agent at configured times with a tiny prompt like \"ok\" to establish quota windows automatically.",
      accentColor: "bg-brand-pulse",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Native Menu Bar Control",
      description: "See next runs, last successes, skipped launches, and agent state without opening a full app.",
      accentColor: "bg-status-success",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Network Guard",
      description: "Verify public IP before launch. If it matches a blocked list, Takt skips the run before the command starts.",
      accentColor: "bg-status-warning",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "CLI Control",
      description: "Trigger, inspect, pause, resume, and debug Takt from terminal scripts, shell automations, or developer tools.",
      accentColor: "bg-brand-pulse",
    },
    {
      icon: <Gauge className="w-5 h-5" />,
      title: "Limits Provider Integration",
      description: "Optionally read usage windows from CodexBar, so Takt can avoid launching agents when limits are fully exhausted.",
      accentColor: "bg-status-error",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Local-first Logs",
      description: "Every run, skip, timeout, and failure is logged locally for clean developer auditing and troubleshooting.",
      accentColor: "bg-text-secondary",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 border-t border-border-default/50 bg-bg-canvas transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-brand-pulse">Power Tools</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary">
            Small utility. Sharp edges.
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Takt is built specifically for developers who demand high control, native system integration, and scriptability.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>

      </div>
    </section>
  )
}
