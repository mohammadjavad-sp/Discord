/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      GrintoBlack: "Grinto-Black",
      GrintoBold: "Grinto-Bold",
      GgBold: "Gg-Bold",
      GgSemiBold: "Gg-SemiBold",
      GgMedium: "Gg-Medium",
      GgRegular: "Gg-Regular",
    },
  },

  plugins: [require("flowbite/plugin")],
};
