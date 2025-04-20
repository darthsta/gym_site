export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    colors: {
      'my-red': '#a7031e',
      // include Tailwind's default colors if needed
      ...require('tailwindcss/colors'),
    },
    extend: {},
  },
  plugins: [],
};