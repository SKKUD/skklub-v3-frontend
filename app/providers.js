"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import getDesignTokens from "@/utils/getDesignTokens";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const Providers = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const lightModeTheme = createTheme(getDesignTokens("light"));
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
      <CssBaseline />
      <RecoilRoot>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default Providers;
