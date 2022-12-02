import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

import IsAuth from "modules/auth/IsAuth";
import Home from "modules/home/Home";
import { useStore } from "stores/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0096fa",
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
            backgroundColor: "var(--hover-background-color)",
          },
          "&.Mui-selected": {
            "&:hover": {
              backgroundColor: "var(--hover-background-color)",
            },

            backgroundColor: "var(--hover-background-color)",
          },
        },
      },
    },
  },
});

const HomePage = () => {
  const { channels, loadChannels } = useStore().channelStore;

  useEffect(() => {
    if (channels.length === 0) {
      loadChannels();
    }
  }, [channels, loadChannels]);

  return (
    <IsAuth>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </IsAuth>
  );
};

export default HomePage;
