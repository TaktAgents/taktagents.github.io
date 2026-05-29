import React from "react"
import { ShieldAlert, ShieldCheck, Info } from "lucide-react"

export const Guard: React.FC = () => {
  return (
    <section id="network-guard" className="py-16 md:py-24 border-t border-border-default/50 bg-bg-canvas transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual card */}
          <div className="lg:col-span-7 lg:order-last">
            <div className="rounded-brand-lg border border-border-default bg-brand-graphite p-6 glass-panel space-y-4">
              
              <div className="flex items-center justify-between border-b border-border-default/40 pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-text-secondary">Network Guard Panel</span>
                <span className="text-[10px] text-text-tertiary">Live Status Check</span>
              </div>

              {/* Guard: Allowed Simulation */}
              <div className="bg-brand-navy/60 border border-status-success/30 rounded-brand-md p-4 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-status-success">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Guard: Allowed</span>
                  <span>100% Secure</span>
                </div>
                <div className="font-mono text-text-secondary space-y-1">
                  <p>Current public IP: <span className="text-text-primary">203.0.113.45</span></p>
                  <p>Rule: Allowed (Standard Office Network)</p>
                  <p>Decision: <span className="text-status-success font-semibold">Allowed</span></p>
                </div>
              </div>

              {/* Guard: Blocked Simulation */}
              <div className="bg-brand-navy/60 border border-status-error/30 rounded-brand-md p-4 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-status-error">
                  <span className="flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5" /> Guard: Skipped / Blocked</span>
                  <span>IP Filter Active</span>
                </div>
                <div className="font-mono text-text-secondary space-y-1">
                  <p>Current public IP: <span className="text-text-primary">198.51.100.12</span></p>
                  <p>Rule: Matches Blocked IP List (Insecure Connection / Public WiFi)</p>
                  <p>Decision: <span className="text-status-error font-semibold">Run Skipped</span></p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[10px] text-text-tertiary leading-relaxed">
                <Info className="w-3.5 h-3.5 text-brand-pulse flex-shrink-0" />
                <span>
                  Takt checks first, then launches. Never the other way around. No telemetry is shared.
                </span>
              </div>

            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-status-success/20 bg-status-success/10 text-status-success text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Network Guard
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
              Pre-flight checks before anything leaves your machine.
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Before Takt launches an agent, it can verify the current public outgoing IP. If the address matches your blocked list, the agent command is never spawned.
              </p>
              <p>
                This is designed for workflows where automated requests should only happen from approved network conditions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
