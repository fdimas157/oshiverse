/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['"Dosis", sans-serif'],
        abel: ['"Abel", sans-serif'],
        colorPopUp: "rgb(0, 0, 0, 0.8)",
        outfit: ['"Outfit", sans-serif'],
        ptsans: ['"PT Sans", sans-serif'],
        reddit: ['"Reddit Mono", monospace']
      },
    },
  },
  plugins: [],
};
