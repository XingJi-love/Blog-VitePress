import type { Config } from "tailwindcss";

export default {
  content: [".vitepress/**/*.{js,ts,vue}", "docs/**/*.md"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
