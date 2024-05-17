/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        mdark: "#333",
        brown: "#a18a4d",
      },
      spacing: {
        32: "7.5rem",
      },
      fontSize: {
        sm: "0.9rem",
      },
    },
  },
  plugins: [],
};
