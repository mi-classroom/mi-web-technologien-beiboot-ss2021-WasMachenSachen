module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        medium: "#666",
        dark: "#444",
        darker: "#222",
        darkest: "#000",
        light: "#B4B4B4",
        lighter: "#F2F2F2",
        lightest: "#fff",
        lighten: "rgba(255,255,255,0.1)",
        "lighten-strong": "rgba(255,255,255,0.3)",
        accent: "#FFCC00",
        error: "#cc0000",
        darken: "rgba(0,0,0,.04)",
        "darken-medium": "rgba(0,0,0,.1)",
        "darken-strong": "rgba(0,0,0,.2)",
      },
      fontFamily: {
        primary: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
