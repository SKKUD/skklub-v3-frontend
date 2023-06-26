"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import getDesignTokens from "@/utils/getDesignTokens";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const Providers = ({ children }) => {
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <RecoilRoot>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default Providers;
