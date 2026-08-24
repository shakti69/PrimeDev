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
        // Brix Studio Signature Orange-Red Accent
        brand: {
          50: '#FFF5F2',
          100: '#FFEBE5',
          200: '#FFD6CC',
          300: '#FFA894',
          400: '#FF7A5C',
          500: '#FF4E27', // Primary Brix orange
          600: '#E83D16', // Hover orange
          700: '#C42E0D',
          800: '#9C250B',
          900: '#7A1F0A',
          950: '#450D03',
          glow: 'rgba(255, 78, 39, 0.22)',
        },
        // Neutral Surfaces
        surface: {
          canvas: '#FBFBFD',     // Main background
          card: '#F2F3F6',       // Light gray card surface
          cardHover: '#EAECEF',
          dark: '#0D0E12',       // Dark section container
          darkElevated: '#16171D',
          darkBorder: '#23252E',
        },
        obsidian: {
          950: '#07080A',
          900: '#0D0E12',
          850: '#14151B',
          800: '#1A1C24',
          750: '#232530',
          700: '#2F3240',
          600: '#474B5E',
          500: '#686D82',
          400: '#9197AB',
          300: '#CBD0DC',
          200: '#E4E7EE',
          100: '#F4F5F8',
          50: '#FBFBFD',
        }
      },
      fontFamily: {
        sans: ['"Pangea Afrikan Trial"', '"Suisse Int\'l"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Pangea Afrikan Trial"', '"Suisse Int\'l"', 'Inter', 'sans-serif'],
        mono: ['"DM Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        editorial: '-0.035em',
        eyebrow: '0.12em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 16px 36px -4px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
        'orange-glow': '0 8px 24px -4px rgba(255, 78, 39, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
