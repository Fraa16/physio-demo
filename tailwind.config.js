/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petrol: "#0B3D42",
        lime: "#C6FF3D",
        anthracite: "#1F2426",
        offwhite: "#F7F8F6",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(11,61,66,0.08)",
        "card-hover": "0 12px 32px rgba(11,61,66,0.16)",
      },
    },
  },
  plugins: [],
}
