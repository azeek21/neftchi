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
                ":focus-within": {
                  border: "1px solid #e53b35",
                },
                ":hover": {
                  background: "#eff0f4",
                },
              },
              outlinedSuccess: {
                color: "#ffffff",
                background: "#6ca695",
                border: "1px solid #6ca695",
                ":hover": {
                  color: "#ffffff",
                  background: "#88b875",
                  border: "1px solid #88b875",
                },
              },
              outlinedSecondary: {
                background: "#8e8e8e",
                color: "#ffffff",
                ":hover": {
                  backgroundColor: "#a1a1a1",
                },
              },
              outlinedPrimary: {
                color: "#505050",
              },
              containedPrimary: {
                color: "white",
                backgroundColor: "#f25627",
                ":hover": {
                  color: "white",
                  backgroundColor: "#e32d0d",
                },
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
          MuiLink: {
            styleOverrides: {
              root: {
                color: "#f25627",
                fontWeight: 500,
                textUnderlineOffset: 1,
                textDecorationColor: "#f25627",
              },
            },
          },
        },
      }),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
