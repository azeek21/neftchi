import { ThemeProvider, createTheme } from "@mui/material";
import { PropsWithChildren, useMemo } from "react";

export default function GlobalTheme({ children }: PropsWithChildren) {
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily:
            "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open San', 'Helvetica Neue', sans-serif",
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440,
          },
        },
        palette: {
          mode: "light",
          secondary: {
            main: "#8e8e8e",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              outlined: {
                border: "1px solid #8e8e8e",
                textTransform: "none",
                color: "inherit",
              },
              outlinedSuccess: {
                color: "#ffffff",
                background: "#6ca695",
                border: "1px solid #6ca695",
              },
              outlinedSecondary: {
                background: "#8e8e8e",
                color: "#ffffff",
              },
              outlinedPrimary: {
                color: "#505050",
              },
            },
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                color: "#8e8e8e",
              },
              colorSecondary: {
                color: "#ffffff",
              },
            },
          },
        },
      }),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
