/** @type {import('tailwindcss').Config} */
export default {
  // all file types on which we want to apply styles
  content: ["./indedx.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        sm: "10rem",
      },
    },
  },
  plugins: [],
}

