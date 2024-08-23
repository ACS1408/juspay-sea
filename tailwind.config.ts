import type { Config } from "tailwindcss";

const colors = {
  primary: {
    DEFAULT: "var(--jp-primary)",
    900: "var(--jp-primary-900)",
    800: "var(--jp-primary-800)",
  },
  black: {
    DEFAULT: "var(--jp-black)",
    900: "var(--jp-black-900)",
    800: "var(--jp-black-800)",
  },
  white: {
    DEFAULT: "var(--jp-white)",
    900: "var(--jp-white-900)",
  },
  transparent: "var(--jp-transparent)",
  grey: {
    DEFAULT: "var(--jp-grey)",
    900: "var(--jp-grey-900)",
    800: "var(--jp-grey-800)",
  },
};

const fontWeight = {
  light: "var(--jp-font-light)",
  regular: "var(--jp-font-regular)",
  medium: "var(--jp-font-medium)",
  semibold: "var(--jp-font-semibold)",
  bold: "var(--jp-font-bold)",
};

const container = {
  center: true,
  padding: "calc(var(--jp-gutter-x) / 2)",
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
