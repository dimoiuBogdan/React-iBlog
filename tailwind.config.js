// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "60vh": "60vh",
        "33rem": "36rem",
      },
      minWidth: {
        "30rem": "15rem",
      },
      padding: {
        "10vw": "5vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
