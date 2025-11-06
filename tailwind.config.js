
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#1F2937",
        charcoal: "#111827",
        steel: "#6B7280",
        lightsteel: "#E5E7EB",
        accent: "#F97316"
      },
      borderRadius: { "2xl": "1rem" }
    },
  },
  plugins: [],
}
