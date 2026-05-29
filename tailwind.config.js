/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
          default: "hsl(var(--border-default))",
          strong: "hsl(var(--border-strong))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          pulse: "hsl(var(--brand-pulse))",
          pulseHover: "hsl(var(--brand-pulse-hover))",
          navy: "hsl(var(--brand-navy))",
          graphite: "hsl(var(--brand-graphite))",
          ink: "hsl(var(--brand-ink))",
          onDark: "hsl(var(--brand-on-dark))",
        },
        bg: {
          canvas: "hsl(var(--bg-canvas))",
          panel: "hsl(var(--bg-panel))",
          panelAlt: "hsl(var(--bg-panel-alt))",
          elevated: "hsl(var(--bg-elevated))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
          onAccent: "hsl(var(--text-on-accent))",
        },
        status: {
          success: "hsl(var(--status-success))",
          running: "hsl(var(--status-running))",
          warning: "hsl(var(--status-warning))",
          error: "hsl(var(--status-error))",
          skipped: "hsl(var(--status-skipped))",
          blocked: "hsl(var(--status-blocked))",
          timeout: "hsl(var(--status-timeout))",
          idle: "hsl(var(--status-idle))",
          scheduled: "hsl(var(--status-scheduled))",
          paused: "hsl(var(--status-paused))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Brand radii tokens
        'brand-sm': "6px",
        'brand-md': "10px",
        'brand-lg': "14px",
      },
      spacing: {
        'brand-1': "4px",
        'brand-2': "8px",
        'brand-3': "12px",
        'brand-4': "16px",
        'brand-5': "24px",
        'brand-6': "32px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
        mono: ["SF Mono", "ui-monospace", "Consolas", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,15,23,.06)",
        popover: "0 8px 24px rgba(11,15,23,.12)",
        glow: "0 0 32px var(--glow-color)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
