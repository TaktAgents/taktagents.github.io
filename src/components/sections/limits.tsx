import React from "react"
import { Gauge } from "lucide-react"

export const Limits: React.FC = () => {
  return (
    <section id="limits" className="py-16 md:py-24 border-t border-border-default/50 bg-bg-panel/20 transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-status-error/20 bg-status-error/10 text-status-error text-xs font-semibold">
              <Gauge className="w-3.5 h-3.5" /> CodexBar Integration
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
              Optional limits awareness with CodexBar.
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                If CodexBar is installed and its CLI is enabled, Takt can use it as an optional limits provider.
              </p>
              <p>
                That means scheduled launches can become smarter: skip exhausted windows, show reset countdowns, and avoid wasting warm-up runs when the provider is not ready.
              </p>
              <p className="text-xs text-text-tertiary">
                * CodexBar is optional. Takt works fully as a standalone scheduler and launcher.
              </p>
            </div>
          </div>

          {/* Visual: Progress Rings Simulation */}
          <div className="lg:col-span-7">
            <div className="rounded-brand-lg border border-border-default p-6 glass-panel space-y-6">
              
              <div className="flex items-center justify-between border-b border-border-default/40 pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-text-secondary">CodexBar Limits Provider</span>
                <span className="text-[10px] text-text-tertiary">Local CLI sync active</span>
              </div>

              {/* Progress Rings grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Codex Ring Card */}
                <div className="bg-bg-panelAlt/60 border border-border-default/80 rounded-brand-md p-4 flex items-center gap-4">
                  
                  {/* Styled Circle representing progress */}
                  <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-bg-panelAlt"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-status-warning"
                        strokeWidth="3.5"
                        strokeDasharray="89, 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute font-display font-bold text-xs text-text-primary">89%</div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-text-primary">Codex</h4>
                    <p className="text-[10px] text-text-secondary">5h window: 89% used</p>
                    <p className="text-[9px] text-status-warning font-semibold mt-1">Reset in: 41m</p>
                  </div>
                </div>

                {/* Claude Code Ring Card */}
                <div className="bg-bg-panelAlt/60 border border-border-default/80 rounded-brand-md p-4 flex items-center gap-4">
                  
                  {/* Styled Circle representing progress */}
                  <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-bg-panelAlt"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-status-success"
                        strokeWidth="3.5"
                        strokeDasharray="43, 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute font-display font-bold text-xs text-text-primary">43%</div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-text-primary">Claude Code</h4>
                    <p className="text-[10px] text-text-secondary">5h window: 43% used</p>
                    <p className="text-[9px] text-status-success font-semibold mt-1">Reset in: 2h 12m</p>
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
