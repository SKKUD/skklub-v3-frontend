"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import getDesignTokens from "@/utils/getDesignTokens";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot, useRecoilValue } from "recoil";
import useThemeModeDetect from "@/hooks/useThemeModeDetect";
import { isDarkModeState } from "@/utils/atoms";

const Providers = ({ children }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const lightModeTheme = createTheme(getDesignTokens("light"));
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
      <CssBaseline />

      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
