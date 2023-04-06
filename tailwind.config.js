/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          inverted: "var(--color-text-inverted)",
          muted: "var(--color-text-muted)",
          primary: "var(--color-text-primary)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          inverted: "var(--color-fill-inverted)",
          muted: "var(--color-fill-muted)",
          primary: "var(--color-fill-primary)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
