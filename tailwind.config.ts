import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      colors: {
        background: "#F5F5F3",
        foreground: "#0D0D0D",
        muted: "#A3A3A3",
        "muted-foreground": "#737373",
        accent: "#E8E8E6",
        "accent-foreground": "#1A1A1A",
        border: "#E5E5E3",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: [
          'clamp(1.75rem, 4vw + 1rem, 3.75rem)', 
          { lineHeight: '1.5', letterSpacing: '-0.02em', fontWeight: '300' },
        ],
        section: [
          'clamp(1.375rem, 2.5vw + 1rem, 3.125rem)',
          { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '300' },
        ],
        subheading: [
          '1.5rem',
          { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '400' },
        ],
        'body-1': [
          '1rem',
          { lineHeight: '1.8', fontWeight: '400' },
        ],
        'body-2': [
          '0.75rem',
          { lineHeight: '1.7', fontWeight: '400' },
        ],
        accent: [
          '0.625rem',
          { lineHeight: '1', letterSpacing: '0.3em', fontWeight: '500' },
        ],
      },
      spacing: {
        'site-pad': 'clamp(1.5rem, 5vw, 4rem)', 
        'section-gap': 'clamp(4rem, 10vw, 12rem)', 
      },
      letterSpacing: {
        widest: "0.25em",
        wider: "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
