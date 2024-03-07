/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "rgb(20, 87, 211)",
        darkBg: "rgb(27, 27, 27)",
        lightBg: "rgb(224, 231, 243)",
        darkShade: "rgb(39, 39, 39)"
      },
      class:{
        active: "bg-primary",
        sectionH1: "font-bold text-zinc-700"
      }
    },
    
  },
  darkMode: ["class"],
  plugins: [],
};
