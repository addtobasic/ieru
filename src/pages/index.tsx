import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";

import IsAuth from "modules/auth/IsAuth";
import Home from "modules/home/Home";
import { useStore } from "stores/store";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const HomePage = () => {
  const { channels, loadChannels } = useStore().channelStore;

  useEffect(() => {
    if (channels.length === 0) {
      loadChannels();
    }
  }, [channels, loadChannels]);

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#1491fa",
          },
          secondary: {
            main: "#757575",
          },
        },

        typography: {
          fontFamily: [
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Roboto",
            '"Segoe UI"',
            "sans-serif",
          ].join(","),
        },

        components: {
          MuiListItemButton: {
            styleOverrides: {
              root: {
                ":hover": {
                  backgroundColor: "var(--ieru-color-hover)",
                },
                "&.Mui-selected": {
                  "&:hover": {
                    backgroundColor: "var(--ieru-color-hover)",
                  },

                  backgroundColor: "var(--ieru-color-hover)",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <IsAuth>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </IsAuth>
  );
};

export default HomePage;
