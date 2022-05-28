module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark': {
          900: '#241722',
          800: '#352432',
          700: '#462730',
          600: '#632329',
        },
        'primary': '#F25551',
        'second': {
          100: '#FFFBFF',
          200: '#FEEDE1',
        }
      },
      borderRadius: {
        'sm': '0.25rem',
        'xl': '2.5rem',
      },
      fontSize: {
        'md': '1rem'  
      }
    },
  },
  plugins: [],
}
