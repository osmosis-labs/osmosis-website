import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    keyframes: {
      marquee: {
        "0%": { transform: "translateZ(0)" },
        "100%": {
          transform:
            "translate3d(calc((472px * 4 + 16px * 3) * -1 - 16px),0,0)",
        },
      },
      "marquee-sm": {
        "0%": { transform: "translateZ(0)" },
        "100%": {
          transform: "translate3d(calc((309px * 4 + 8px * 3) * -1 - 8px),0,0)",
        },
      },
      "upcoming-airdrops-marquee": {
        "0%": { transform: "translateZ(0)" },
        "100%": {
          transform: "translate3d(calc((48px * 10 + 8px * 9) * -1 - 8px),0,0)",
        },
      },
    },
    animation: {
      marquee: "marquee 40s linear infinite",
      "marquee-reverse": "marquee 40s linear infinite reverse",
      "marquee-sm": "marquee-sm 40s linear infinite",
      "marquee-sm-reverse": "marquee-sm 40s linear infinite reverse",
      "upcoming-airdrops-marquee":
        "upcoming-airdrops-marquee 10s linear infinite",
      "upcoming-airdrops-marquee-reverse":
        "upcoming-airdrops-marquee 10s linear infinite reverse",
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "swap-tool-container": "485px",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        10.5: "2.625rem",
        12.5: "3.125rem",
        13.0: "3.25rem",
        14.5: "3.625rem",
        15.0: "3.75rem",
        16.5: "4.125rem",
        17.0: "4.25rem",
        17.5: "4.375rem",
        18.0: "4.5rem",
        19.5: "4.875rem",
        21.5: "5.375rem",
        22.5: "5.625rem",
        25.0: "6.25rem",
        26.0: "6.5rem",
        30: "7.5rem",
        35: "8.75rem",
        39.0: "9.75rem",
        41.0: "10.25rem",
        42: "10.5rem",
        45: "11.25rem",
        47: "11.75rem",
        58: "14.5rem",
        65: "16.25rem",
      },
      fontSize: {
        "3.5xl": "32px",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        white: {
          full: "#FFFFFF",
          high: "rgba(255, 255, 255, 0.95)",
          emphasis: "rgba(255, 255, 255, 0.87)",
          mid: "rgba(255, 255, 255, 0.6)",
          disabled: "rgba(255, 255, 255, 0.38)",
          faint: "rgba(255, 255, 255, 0.12)",
        },
        alpha: {
          60: "#F9F8F799",
        },
        wosmongton: {
          50: "#492CE1",
          100: "#D3D1FF",
          200: "#B3B1FD",
          300: "#8C8AF9",
          400: "#6A67EA",
          500: "#5B57FA",
          700: "#462ADF",
          800: "#361FB2",
          900: "#2D1B8F",
        },
        ion: {
          100: "#DCF9FF",
          300: "#87DDF8",
          400: "#64C5EE",
          500: "#2994D0",
          700: "#1469AF",
          900: "#02345E",
        },
        bullish: {
          100: "#EBFFFB",
          300: "#95EEDE",
          400: "#6BDEC9",
          500: "#29D0B2",
          600: "#00A399",
        },
        osmoverse: {
          100: "#D8D1FA",
          200: "#B1A3F5",
          300: "#9485E0",
          400: "#7E70C2",
          500: "#6659A6",
          600: "#4B3D8F",
          650: "#3C356D",
          700: "#332673",
          750: "#2C2261",
          760: "#282750",
          775: "#201B43",
          800: "#1F1452",
          850: "#140F34",
          900: "#0E082C",
        },
        ammelia: {
          400: "#D779CF",
          600: "#CA2EBD",
        },
        rust: {
          200: "#F8C2B0",
          300: "#F5A68C",
          500: "#FA825D",
          600: "#E06640",
          700: "#C6451C",
          800: "#B03A20",
        },
        malachite: {
          200: "#37D56D",
        },
        "malachite-alpha": {
          "200": "#37D56D40",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
