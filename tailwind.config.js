/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Geist Sans"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(227.32deg, #F85204 39.42%, #F37600 64.33%, #FFBA2C 94.22%)",
        "hero-pattern": "url('/different-patterns.png')",
      },
      screens: {
        "xs": { min: "100px", max: "390px" },
      },
      animation: {
        'spin': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
