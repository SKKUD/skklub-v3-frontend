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
            main: "#80a4ff",
          },
          background: {
            default: "#262626",
            paper: "#262626",
            default: "#151717",
          },
          text: {
            primary: "rgba(255,255,255,0.87)",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#80a4ff",
          },
          secondary: {
            main: "#fc7b95",
          },
          background: {
            paper: "#262626",
            default: "#151717",
          },
          text: {
            primary: "rgba(255,255,255,0.87)",
          },
        }),
  },
});

export default getDesignTokens;
