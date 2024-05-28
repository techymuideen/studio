/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    extend: {
      animation: {
        wiggle: "wiggle 300ms ease-out forwards",
      },
      keyframes: {
        wiggle: {
          "0%": {
            opacity: "0",
            transform: "scale(.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      boxShadow: {
        neum: "5px 5px 5px #dadada, -5px -5px 5px #ffffff",
        "neum-dark": "3px 3px 3px #000000, -3px -3px 3px #121212",
        deneum: "inset 5px 5px 5px #dadada, inset -5px -5px 5px #dadada",
        "deneum-dark": "5px 5px 5px #000000, -5px -5px 5px #121212 !important",
        "rounded-neum-dark": "3px 3px 3px #000000, -3px -3px 3px #262626",
        "round-deneum-dark":
          "inset 3px 5px 5px #000000, inset -3px -5px 5px #252525",
        activedenum:
          "inset 5px 5px 5px #F3CEDB, inset -5px -5px 5px #F3CEDB !important",
        "neum-dark-2": "3px 3px 3px #000000, -1px -1px 1px #fff",
        "neum-dark-3": "5px 5px 5px #000000, -1px -1px 1px #fff",
        header: "0px 3px 5px rgba(0,0,0,.4)",

        button: "4px 4px 4px rgba(0,0,0,.4)",
        darkbutton: "4px 4px 3px rgba(0,0,0,.8)",

        "modal-shadow": "0 2px 8px rgba(0, 0, 0, 0.25)",

        smallbutton: "3px 3px 3px rgba(0,0,0,.4)",
        hoversmallbutton: "4px 4px 4px rgba(0,0,0,.4)",

        box: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
        boxabout: " 2px 2px 5px 0 rgba(0,0,0,.5)",
        modalbox:
          " 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)",
      },

      colors: {
        ash: "#F5F5F5",
        darkash: "#dadada",
        bgash: "#AEB1A6",
        pink: "#E91E63",
        lightpink: "#F3CEDB",
        "lightpink-dark": "#3A1522",
        black: "#121212",
        white: "#efefef",
        "neum-bg-dark": "#262626",
        "border-white": "#ffffff88",
        "light-black": "rgba(0,0,0,87)",
      },
      backgroundImage: {
        "studio-light": "url(../src/assets/homelight.webp)",
        "studio-dark": "url('../src/assets/dark.webp')",
        "about-light":
          "linear-gradient(to top,  rgba(255,255,255,0.8), rgba(255,255,255,0.0)), url(../src/assets/neoncityday.gif)",
        "about-dark":
          "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.0)), url(../src/assets/neoncitydark.gif)",
        "video-light":
          "linear-gradient(90deg,  rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 45%, transparent 45%), url(../src/assets/lightt.gif)",
        "video-dark":
          "linear-gradient(90deg,  rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 45%, transparent 45%), url(../src/assets/neoncitydark.gif)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
