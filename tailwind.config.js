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
      colors:{
        primary: "rgb(20, 87, 211)",
        darkBg: "rgb(15, 15, 15)",
        lightBg: "rgb(238, 238, 238)",
        darkShade: "rgb(20, 20, 20)"
      },
      class:{
        active: "bg-primary",
        sectionH1: "font-bold text-zinc-700"
      }
    },
    
  },
  darkMode: ["class"],
  plugins: [
    // require("@tailwindcss/forms")
  ],
};
