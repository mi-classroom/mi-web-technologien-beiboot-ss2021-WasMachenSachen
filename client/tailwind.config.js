module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        medium: "var(--medium)",
        dark: "var(--dark)",
        darker: "var(--darker)",
        darkest: "var(--darkest)",
        light: "var(--light)",
        lighter: "var(--lighter)",
        lightest: "var(--lightest)",
        lighten: "var(--lighten)",
        "lighten-strong": "var(--lighten-strong)",
        accent: "var(--accent)",
        error: "var(--error)",
        darken: "var(--darken)",
        "darken-medium": "var(--darken-medium)",
        "darken-strong": "var(--darken-strong)",
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
