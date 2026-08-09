/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep obsidian dark neutral scale
        obsidian: {
          950: '#06080D', // Deepest background
          900: '#0B0F17', // Base canvas
          850: '#101622', // Surface layer 1
          800: '#161F2E', // Surface layer 2 / Card bg
          750: '#1D283A', // Elevated hover surface
          700: '#26344B', // Subtle borders
          600: '#3B4D6B', // Secondary borders / muted text
          500: '#64748B', // Muted slate
          400: '#94A3B8', // Subtitle text
          300: '#CBD5E1', // Body text (dark mode)
          200: '#E2E8F0', // Strong body text
          100: '#F1F5F9', // High-contrast text
          50: '#F8FAFC',  // Light mode background
        },
        // Signature Electric Cobalt Accent
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Primary brand accent
          600: '#2563EB', // Primary interactive accent
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
          glow: 'rgba(59, 130, 246, 0.18)',
        },
        // Functional / Semantic feedback tokens
        accent: {
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        editorial: '-0.035em',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.15)',
        'glow-sm': '0 0 16px -2px rgba(59, 130, 246, 0.25)',
        'glow-md': '0 0 28px -4px rgba(59, 130, 246, 0.35)',
        'glow-lg': '0 0 48px -6px rgba(59, 130, 246, 0.45)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'grid-pattern-light': 'linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
