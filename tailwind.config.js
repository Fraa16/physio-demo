/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petrol: "#0B3D42",
        "petrol-deep": "#072A2E",
        lime: "#C6FF3D",
        anthracite: "#1F2426",
        offwhite: "#F7F8F6",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.9rem, 6.5vw, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2.1rem, 4.2vw, 3.6rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-xs": ["clamp(1.6rem, 2.6vw, 2.35rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card: "0 4px 20px rgba(11,61,66,0.08)",
        "card-hover": "0 12px 32px rgba(11,61,66,0.16)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
