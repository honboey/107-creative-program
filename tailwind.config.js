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
        "107-juni-purple-200": "#8E45FF",
        "107-copa-green-100": "#C2DFA4",
        "107-copa-green-200": "#8EFC69",
        "107-janz-orange-100": "#F37232",
        "107-janz-orange-200": "#FF5A07",
        "107-inqa-turquoise-100": "#7FD1E1",
        "107-inqa-turquoise-200": "#91E5EA",
        "107-tula-pink-100": "rgb(247, 179, 209)",
        "107-tula-pink-200": "#F681B5",
        "107-reva-green-100": "#30a582",
        "107-reva-green-200": "#00A774",
        "107-yellow-100": "#F9EE47",
      },
      spacing: {
        "1/24": "4.1666666667%",
        "2/24": "8.3333333333%",
        "3/24": "12.5%",
        "5/24": "20.8333333333%",
        "7/24": "29.1666666667%",
        "11/24": "45.8333333333%",
        "21/24": "87.5%"
      },
      backgroundImage: {
        "blob-multi": "url('../images/blob-bg.jpg')",
        "blob01": "url('../images/blob01.gif')",
        "blob02": "url('../images/blob02.gif')",
        "blob03": "url('../images/blob03.gif')",
        "blob-orange": "url('../images/blob-orange.svg')",
        "blob04": "url('../images/blob04.gif')",
        "blob05": "url('../images/blob05.gif')",
        "blob06": "url('../images/blob06.gif')"
      }
    },
  },
  plugins: [],
}
