/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Specifically scan index.html in the root
    "./pages/**/*.html", // Scan any HTML files in a "pages" folder
    "./js/**/*.js", // Scan any JavaScript files where you might toggle classes
    "./src/**/*.{html,js}", // If you have a src folder, scan that too
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
