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
