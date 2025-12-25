/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        card: "#111722",
        accent: "#4f8cff",
      },
    },
  },
  plugins: [],
};
