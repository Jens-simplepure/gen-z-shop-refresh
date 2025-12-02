import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Gen Z accent colors
        lime: {
          DEFAULT: "hsl(82, 100%, 50%)",
          light: "hsl(82, 100%, 65%)",
          dark: "hsl(82, 100%, 35%)",
        },
        coral: {
          DEFAULT: "hsl(12, 100%, 64%)",
          light: "hsl(12, 100%, 75%)",
          dark: "hsl(12, 100%, 50%)",
        },
        cyan: {
          DEFAULT: "hsl(180, 100%, 50%)",
          light: "hsl(180, 100%, 65%)",
          dark: "hsl(180, 100%, 35%)",
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Permanent Marker', 'cursive'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(82, 100%, 50%, 0.3)",
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(82, 100%, 50%, 0.6)",
          },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, hsl(82, 100%, 50%) 0%, hsl(60, 100%, 60%) 100%)",
        "gradient-secondary": "linear-gradient(135deg, hsl(12, 100%, 64%) 0%, hsl(340, 100%, 65%) 100%)",
        "gradient-accent": "linear-gradient(135deg, hsl(180, 100%, 50%) 0%, hsl(200, 100%, 60%) 100%)",
        "gradient-dark": "linear-gradient(180deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 2%) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
