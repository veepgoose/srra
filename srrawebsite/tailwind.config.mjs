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
        ivory: "#F6FFF8",
        mist: "#EAF4F4",
        mint: "#CCE3DE",
        sage: "#A4C3B2",
        leaf: "#6B9080",
      },
    },
  },
  plugins: [],
};

