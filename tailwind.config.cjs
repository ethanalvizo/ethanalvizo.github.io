/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
        "press-start": ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [],
};
