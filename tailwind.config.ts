import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: {
          100: "#E8E1FF",
          500: "#825EF6",
        },
        dark: {
          700: "#393E4F",
          800: "#262935",
          900: "#1F2128",
          border: "#393E4F",
        },
        white: {
          100: "#FFFFFF",
          200: "#F8FAFC",
          300: "#C5D0E6",
          400: "#808191",
          border: "#C5D0E6",
        },
        misc: {
          error: "#F65E5E",
        },
      },
      fontSize: {
        custom: ["32px", "40px"], // The second value is for line-height
        custom_1: ["24px", "32px"],
        custom_2: ["20px", "28px"],
        custom_3: ["10px", "12px"],
        custom_4: ["18px", "22px"],
        custom_5: ["10px", "14px"],
        custom_6: ["10px", "auto"],
        custom_7: ["8px", "auto"],
      },
      letterSpacing: {
        custom: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
