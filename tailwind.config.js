/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryShade: "var(--primary-shade)",
        secondary: "var(--secondary)",
        accent: {
          1: "var(--accent1)",
          2: "var(--accent2)",
        },
        radial: {
          1: "var(--radial1)",
          2: "var(--radial2)",
          3: "var(--radial3)",
          4: "var(--radial4)",
        },
        darkShade: "rgb(20, 20, 20)",
      },
      class: {
        active: "bg-primary",
        sectionH1: "font-bold text-zinc-700",
      },
    },
  },
  darkMode: ["class"],
  plugins: [
    // require("@tailwindcss/forms")
  ],
};
