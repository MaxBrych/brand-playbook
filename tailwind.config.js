/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        nk: {
          primary: {
            10: "#001E2C",
            20: "#003549",
            30: "#004D68",
            40: "#006689",
            50: "#0080AB",
            60: "#209BCC",
            70: "#4AB6E8",
            80: "#78D1FF",
            90: "#C3E8FF",
            95: "#E2F3FF",
            99: "#FBFCFF",
          },
          neutral: {
            10: "#191C1E",
            20: "#2E3133",
            30: "#454749",
            40: "#57585C",
            50: "#757779",
            60: "#8F9193",
            70: "#AAABAE",
            80: "#C5C6C9",
            90: "#E1E2E5",
            95: "#F0F1F3",
            99: "#FBFBFF",
            100: "#FFFFFF",
          },
        },
        sz: {
          primary: {
            10: "#410001",
            20: "#680002",
            30: "#900C0D",
            40: "#B32922",
            50: "#D54237",
            60: "#F95C4E",
            70: "#FF8979",
            80: "#FFB4A9",
            90: "#FFDAD4",
            95: "#FFEDE9",
            99: "#FCFCFC",
          },
          neutral: {
            10: "#191C1E",
            20: "#2E3133",
            30: "#454749",
            40: "#57585C",
            50: "#757779",
            60: "#8F9193",
            70: "#AAABAE",
            80: "#C5C6C9",
            90: "#E1E2E5",
            95: "#F0F1F3",
            99: "#FBFBFF",
            100: "#FFFFFF",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-ubuntu)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

