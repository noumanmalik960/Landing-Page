module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // We can use it as <h2 class="text-bookmark-purple"></h2>
      // We can add our custom colors by extending the orignal ones as:
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      }
    },
    /*  To add fonts, ctrl C+V font name from google fonts and paste
     the import inside src/style.css and then paste it in this file
      like this, now we can use this font in any HTML element as <h2 class="font-Poppins"></h2> */
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      // On large screens, screen size should remain "1124px"
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
