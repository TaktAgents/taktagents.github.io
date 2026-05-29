import React from "react"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 border-t border-border-default/50 bg-bg-panel/20 transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-status-warning/20 bg-status-warning/10 text-status-warning text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" /> Session Alignment
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
              AI sessions should not start at random times.
            </h2>
            
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Many AI coding tools start quota or session windows when you first use them. That means one accidental launch at 10:37 can shift your entire work rhythm for the day.
              </p>
              <p>
                Takt lets you intentionally start those windows at useful times — before deep work, before standups, before evening sessions, or whenever your workflow actually begins.
              </p>
            </div>
          </div>

          {/* Visual: Timeline comparison */}
          <div className="lg:col-span-7">
            <div className="rounded-brand-lg border border-border-default p-6 glass-panel space-y-6">
              
              {/* BEFORE */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-status-error">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-bold">Before: Random Start</span>
                </div>
                
                <div className="bg-bg-panelAlt/60 border border-border-default/50 rounded-brand-md p-4 font-mono text-xs space-y-2 text-text-secondary">
                  <div className="flex justify-between items-center border-b border-border-default/20 pb-2">
                    <span className="text-text-primary">10:37</span>
                    <span className="text-status-error bg-status-error/10 px-2 py-0.5 rounded-full border border-status-error/20 font-semibold">Accidental Start</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border-default/20 py-2">
                    <span>15:37</span>
                    <span>Quota Reset during deep work</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span>20:37</span>
                    <span>Awkward next window reset</span>
                  </div>
                </div>
              </div>

              {/* ARROW */}
              <div className="flex justify-center text-text-tertiary">
                <div className="h-6 w-0.5 bg-border-strong/50" />
              </div>

              {/* AFTER */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-status-success">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-bold">After: Takt in Rhythm</span>
                </div>

                <div className="bg-bg-panelAlt/80 border border-brand-pulse/30 rounded-brand-md p-4 font-mono text-xs space-y-2 text-text-secondary">
                  <div className="flex justify-between items-center border-b border-border-default/20 pb-2">
                    <span className="text-brand-pulse font-bold">08:00</span>
                    <span className="text-status-success bg-status-success/10 px-2 py-0.5 rounded-full border border-status-success/20 font-semibold">Morning Work</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border-default/20 py-2">
                    <span className="text-brand-pulse font-bold">13:00</span>
                    <span className="text-status-success bg-status-success/10 px-2 py-0.5 rounded-full border border-status-success/20 font-semibold">Afternoon Session</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border-default/20 py-2">
                    <span className="text-brand-pulse font-bold">18:00</span>
                    <span className="text-status-success bg-status-success/10 px-2 py-0.5 rounded-full border border-status-success/20 font-semibold">Evening Session</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-brand-pulse font-bold">23:00</span>
                    <span className="text-status-success bg-status-success/10 px-2 py-0.5 rounded-full border border-status-success/20 font-semibold">Night Window</span>
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
