const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#3f51b5",
          },
          secondary: {
            main: "#86DDC8",
          },
          background: {
            paper: "#FFF",
            default: "#FFFEF4",
          },
          text: {
            primary: "rgba(36, 36, 34, 1)",
            secondary: "#585858",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#80A4FF",
          },
          secondary: {
            main: "#16A480",
          },
          background: {
            paper: "#2A3133",
            default: "#151717",
          },
          text: {
            primary: "rgba(255,255,255,0.87)",
            secondary: "#DFE3E4",
          },
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'GmarketSansMedium';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#00ff0000",
        },
      },
    },
  },
});

export default getDesignTokens;
