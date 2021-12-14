module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "sans": ["Helvetica Neue", "ui-sans-serif", "system-ui"]
    },    
    extend: {
      colors: {
        "107-neutral": "#DCDCDC",
        "107-juni-purple-100": "#AA73FF",
        "107-copa-green-100": "#BEFAAA",
        "107-copa-green-200": "#8EFC69",
      },
      spacing: {
        "1/24": "4.1666666667%",
        "2/24": "8.3333333333%",
        "3/24": "12.5%",
        "5/24": "20.8333333333%",
        "7/24": "29.1666666667%",
        "11/24": "45.8333333333%",
        "21/24": "87.5%"
      }
    },
  },
  plugins: [],
}
