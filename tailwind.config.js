module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "sans": ["Helvetica Neue", "ui-sans-serif", "system-ui"]
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     md: "2rem",
    //     lg: "3rem",
    //     xl: "4rem"
    //   }
    // },
    extend: {
      colors: {
        "107-neutral": "#DCDCDC"
      },
      spacing: {
        "2/24": "8.3333333333%",
        "3/24": "12.5%"
      }
    },
  },
  plugins: [],
}
