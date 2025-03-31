import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./client/**/*.{ts,tsx}', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
    },
    extend: {
      fontFamily: {
        title: ['Bangers', 'bold'],
        sans: ['Roboto', 'sans-serif'],
        header: ['Sen', 'sans-serif'],
      },
      colors: {
        // Pet-themed colors
        blue: 'var(--pet-blue)',
        green: 'var(--pet-green)',
        orange: 'var(--pet-orange)',
        pink: 'var(--pet-pink)',
        purple: 'var(--pet-purple)',
        red: 'var(--pet-red)',
        yellow: 'var(--pet-yellow)',
        brown: 'var(--pet-brown)',
        cream: 'var(--pet-cream)',
        
        // System colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#e6f9f6',
          100: '#ccf3ec',
          200: '#99e7d9',
          300: '#66dbc6',
          400: '#33cfb3',
          500: '#14b89a', // Primary color
          600: '#10937b',
          700: '#0c6e5c',
          800: '#08493e',
          900: '#04251f',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          50: '#fef1eb',
          100: '#fde3d7',
          200: '#fbc7af',
          300: '#f9ab87',
          400: '#f79e5f',
          500: '#f58c59', // Secondary color
          600: '#c47047',
          700: '#935435',
          800: '#623823',
          900: '#311c12',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          50: '#fefae9',
          100: '#fdf5d3',
          200: '#fbeba6',
          300: '#f9e17a',
          400: '#f7d74d',
          500: '#f5c22b', // Accent color
          600: '#c49b22',
          700: '#93741a',
          800: '#624e11',
          900: '#312709',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)'},
          '50%': { transform: 'rotate(3deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulsate: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        wag: {
          '0%, 100%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          to: { transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
        bounce: 'bounce 3s ease-in-out infinite',
        pulsate: 'pulsate 2s ease-in-out infinite',
        wag: 'wag 0.5s ease-in-out infinite',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    // These plugins are commented out but can be uncommented by students as needed
    // require("tailwindcss-animate"), 
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
}
