import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark palette
        bg: {
          primary: '#0f0f0f',
          secondary: '#1a1a1a',
          tertiary: '#2d2d2d',
        },
        // Accent color - Turuncu vurgu
        accent: {
          DEFAULT: '#FF6B00',
          50: '#FFF5EB',
          100: '#FFE5CC',
          200: '#FFD4B0',
          300: '#FFC299',
          400: '#FFB380',
          500: '#FF9966',
          600: '#FF8040',
          700: '#FF6B00',
          800: '#E55A00',
          900: '#CC4A00',
        },
      },

      boxShadow: {
        // Glow effects
        'glow-orange': '0 0 20px rgba(255, 107, 0, 0.4)',
        'glow-orange-lg': '0 0 40px rgba(255, 107, 0, 0.6)',
        'glow-orange-xl': '0 0 60px rgba(255, 107, 0, 0.8)',
        // Glassmorphism
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },

      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'border-rotate': 'borderRotate 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },

      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 107, 0, 0.4)',
            opacity: '1',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 107, 0, 0.8)',
            opacity: '0.8',
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        borderRotate: {
          from: { borderImageSource: 'conic-gradient(from 0deg, #FF6B00, transparent)' },
          to: { borderImageSource: 'conic-gradient(from 360deg, #FF6B00, transparent)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 107, 0, 0.6)',
          },
        },
      },

      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },

  plugins: [],
} satisfies Config;
