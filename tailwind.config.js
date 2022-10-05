module.exports = {
  content: ["./*.html", "./src/**/*.{scss,css,js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
        'dark-grey': '#2B2D42',
        'grey': '#8D99AE',
        'light-grey': '#EDF2F4',
        'dark-red': '#7F1028',
        'light-red': '#AD646D',
        'white': '#FFFFFF',
    },
      backgroundImage: {
          'product-1': "url('/products/product-1-transparent.png')",
          'product-2': "url('/products/product-2-transparent.png')",
      }
  },
};
