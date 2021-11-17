module.exports = {
  purge: [
    "./components/**/*.ts",
    "./components/**/*.tsx",
    "./icons/**/*.ts",
    "./icons/**/*.tsx",
    "./stories/**/*.stories.tsx",
  ],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 0.25s ease-in-out 0s 1 forwards',
      },
      colors: {
        yieldBlue: "#1568CA",
        yieldLightBlue: "#75C7EE",
        denimBlue: "#7FBEEA",
        principalBlue: "#6ACDE2",
        principalRoyalBlue: "#005EBE",
        clay: "#242E36",
        black: "#1B1D21",
        blueGrey: "#B2CAE3",
        paleLily: "#D1ECF1",
        votingGreen: "#CDFFCD",
        deepRed: "#F73030",
        indianYellow: "#E1AF55",
        topaz: "#19C2A3",
        goldYellow: "#FFC300",
        statusGreen: "#007F00",
        statusRed: "#FAEAEA",
        hackerSky: "#F1F5FE",
        appBackgroundLight: "#FAF9F9",
        textGrey: "#979797",
        writersGrey: "#979797",
        evergreen: "#4FBF67",

        brandLightBlue: {
          light: "#acffff",
          DEFAULT: "#78D3E2",
          dark: "#42a2b0",
        },
        brandDarkBlue: {
          light: "#588bf1",
          DEFAULT: "#005EBE",
          dark: "#00368d",
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      borderRadius: {
        regular: "10px",
      },
      padding: {
        btn: "10px 20px"
      },
      boxShadow: {
        btn: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        btnAccent: "0px 6px 10px rgba(0, 0, 0, 0.3)",
      },
      fontSize: {
        xxs: "12px",
        l22: "22px",
        l28: "28px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
