import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";

import Chat from "components/chat/Chat";

import ChatHeader from "../chat/header/ChatHeader";
import SidebarChannels from "./channels/SidebarChannels";
import SidebarHeader from "./header/SidebarHeader";
import SidebarInfo from "./info/SidebarInfo";

const drawerWidth = 240;

const PersistentDrawerLeft: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ChatHeader open={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={
          theme.palette.mode === "light"
            ? {
                width: drawerWidth,
                flexShrink: 0,

                "& .MuiDrawer-paper": {
                  color: "var(--white)",
                  backgroundColor: "var(--ieru-color)",
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }
            : {
                width: drawerWidth,
                flexShrink: 0,

                "& .MuiDrawer-paper": {
                  color: "var(--text-dark)",
                  backgroundColor: "var(--ieru-color-dark)",
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }
        }
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <SidebarHeader handleDrawerClose={handleDrawerClose} />
        <Divider />
        <SidebarChannels />
        <SidebarInfo />
        <Divider />
      </Drawer>
      <Main open={isDrawerOpen}>
        <Chat open={isDrawerOpen} />
      </Main>
    </Box>
  );
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  height: "100vh",
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    height: "100vh",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default PersistentDrawerLeft;
