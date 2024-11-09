import type { Config } from "tailwindcss";

import { getProjectColors, getProjectColorSafelist } from "./app/data/projects";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [...getProjectColorSafelist("to-")],
  theme: {
    fontFamily: {
      mono: ["inherit"],
    },
    extend: {
      colors: {
        black: "#373737",
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...getProjectColors(),
      },
    },
  },
  plugins: [],
} satisfies Config;
