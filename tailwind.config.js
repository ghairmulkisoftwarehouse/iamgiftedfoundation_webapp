// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Add this line!
  ],
  theme: {
    extend: {
         screens: {
      tiny: "18rem",
      phone: "25.625rem",
      tinyNormal: "22.375rem",
      xs: "30rem",
    },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
  },
  plugins: [],
};