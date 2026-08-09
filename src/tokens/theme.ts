/**
 * PrimeDev 2026 Design Tokens
 * Reusable constants for design consistency across the architecture.
 */

export const TOKENS = {
  colors: {
    obsidian: {
      950: '#06080D',
      900: '#0B0F17',
      850: '#101622',
      800: '#161F2E',
      750: '#1D283A',
      700: '#26344B',
      600: '#3B4D6B',
      500: '#64748B',
      400: '#94A3B8',
      300: '#CBD5E1',
      200: '#E2E8F0',
      100: '#F1F5F9',
      50: '#F8FAFC',
    },
    brand: {
      cobalt: '#3B82F6',
      cobaltDark: '#2563EB',
      cobaltLight: '#60A5FA',
      glow: 'rgba(59, 130, 246, 0.18)',
    },
    semantic: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#F43F5E',
      info: '#06B6D4',
    }
  },
  typography: {
    fonts: {
      sans: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    tracking: {
      tight: '-0.02em',
      editorial: '-0.035em',
    }
  },
  transitions: {
    default: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    smooth: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  }
} as const;

export type DesignTokens = typeof TOKENS;
