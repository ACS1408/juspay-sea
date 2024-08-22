import type { Config } from "tailwindcss";

const colors = {
  primary: {
    DEFAULT: "var(--wac-primary)",
    900: "var(--wac-primary-900)",
    800: "var(--wac-primary-800)",
  },
  black: {
    DEFAULT: "var(--wac-black)",
    900: "var(--wac-black-900)",
    800: "var(--wac-black-800)",
  },
  white: {
    DEFAULT: "var(--wac-white)",
    900: "var(--wac-white-900)",
  },
  transparent: "var(--wac-transparent)",
  grey: {
    DEFAULT: "var(--wac-grey)",
    900: "var(--wac-grey-900)",
    800: "var(--wac-grey-800)",
  },
};

const fontWeight = {
  light: "var(--wac-font-light)",
  regular: "var(--wac-font-regular)",
  medium: "var(--wac-font-medium)",
  semibold: "var(--wac-font-semibold)",
  bold: "var(--wac-font-bold)",
};

const container = {
  center: true,
  padding: "calc(var(--gutter-x) / 2)",
};

const screens = {
  xs: { max: "576px" },
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1420px",
  xxxl: "1600px",
  laptop: { min: "1200px", max: "1450px" },
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors,
    fontWeight,
    container,
    screens,
    extend: {},
  },
  plugins: [],
};
export default config;
