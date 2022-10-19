/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        top: "0px 0px 10px rgba(100, 100, 111, 0.5)",
        inside: " -3px -3px 6px 1px rgba(255, 255, 255, 0.5)",
        even:"rgba(0, 0, 0, 0.09) 0px 3px 12px"
    },
    animation: {
      'bounce1': 'bounce 2s infinite;',
    },
    backgroundImage: {
      'cod': "url('/bg2.svg')",
    }
    },

  },
  plugins: [],
}
