import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      maxWidth: {
        content: "1440px",
      },
      spacing: {
        10.5: "2.625rem",
        14.5: "3.625rem",
        19.5: "4.875rem",
        30: "7.5rem",
        35: "8.75rem",
        42: "10.5rem",
        45: "11.25rem",
        47: "11.75rem",
        58: "14.5rem",
        65: "16.25rem",
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
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
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
        700: "#332673",
        750: "#2C2261",
        800: "#1F1452",
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
      wireframes: {
        darkGrey: "#282828",
        grey: "#818181",
        lightGrey: "#B7B7B7",
      },
      error: "#EF3456",
      missionError: "#EF3456",
      superfluid: "#8A86FF",
      supercharged: "#64C5EE",
      transparent: "transparent",
      black: "black",
      inherit: "inherit",
      barFill: "#4f4aa2",
      chartGradientPrimary: "#C41BFF",
      chartGradientSecondary: "#1867FF",
      yourBalanceActionButton: "#2A2553",
    },
    fontSize: {
      xxs: "0.5rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2.25rem",
      "3xl": "3rem",
      "4xl": "3.75rem",
      "5xl": "6rem",
      h1: ["6rem", { lineHeight: "7rem", letterSpacing: "-1.5px" }],
      h2: ["3.75rem", { lineHeight: "4.5rem", letterSpacing: "-0.5px" }],
      h3: ["3rem", { lineHeight: "3.5rem", letterSpacing: "0" }],
      h4: ["2.25rem", { lineHeight: "2.25rem", letterSpacing: "0" }],
      h5: ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.18px" }],
      h6: ["1.25rem", { lineHeight: "1.5rem", letterSpacing: "0.15px" }],
      subtitle1: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.15px" }],
      subtitle2: ["0.875rem", { lineHeight: "1.5rem", letterSpacing: "0.1px" }],
      body1: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.5px" }],
      body2: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.25px" }],
      button: ["0.875rem", { lineHeight: "1rem", letterSpacing: "0" }],
      caption: ["0.75rem", { lineHeight: "0.875rem", letterSpacing: "0.4px" }],
      overline: ["0.625rem", { lineHeight: "1rem", letterSpacing: "2.5px" }],
    },
    fontFamily: {
      h1: ["Poppins", "ui-sans-serif", "system-ui"],
      h2: ["Poppins", "ui-sans-serif", "system-ui"],
      h3: ["Poppins", "ui-sans-serif", "system-ui"],
      h4: ["Poppins", "ui-sans-serif", "system-ui"],
      h5: ["Poppins", "ui-sans-serif", "system-ui"],
      h6: ["Poppins", "ui-sans-serif", "system-ui"],
      subtitle1: ["Inter", "ui-sans-serif", "system-ui"],
      subtitle2: ["Inter", "ui-sans-serif", "system-ui"],
      body1: ["Inter", "ui-sans-serif", "system-ui"],
      body2: ["Inter", "ui-sans-serif", "system-ui"],
      button: ["Inter", "ui-sans-serif", "system-ui"],
      caption: ["Inter", "ui-sans-serif", "system-ui"],
      overline: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      h1: "600",
      h2: "600",
      h3: "600",
      h4: "600",
      h5: "600",
      h6: "600",
      subtitle1: "600",
      subtitle2: "400",
      body1: "400",
      body2: "400",
      button: "600",
      caption: "400",
      overline: "400",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
