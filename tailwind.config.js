/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "400px",
        25: "100px",
        125: "500px",
      },
    },
  },
  plugins: [],
};
