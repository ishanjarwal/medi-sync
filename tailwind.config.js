/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "bg": "var(--bg)",
        "softBg": "var(--softBg)",
        "darkBg": "var(--darkBg)",
        "darkSoftBg": "var(--darkSoftBg)",
        "hoverBg": "var(--hoverBg)",
        "darkHoverBg": "var(--darkHoverBg)",
      }
    },
  },
  plugins: [],
};
