
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0F172A",
        graphite: "#1F2937",
        steel: "#6B7280",
        lightsteel: "#E5E7EB",
        accent: "#F97316"
      },
      boxShadow: {
        card: "0 6px 20px rgba(0,0,0,0.08)"
      },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
}
