/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: "#fff6e3",
        mist: "#a4c3b2",
        mint: "#b1cce4",
        sage: "#6cae75",
        leaf: "#65655e",
      },
    },
  },
  plugins: [],
};

