import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import * as React from "react";

import Chat from "components/chat/Chat";

import ChatHeader from "../chat/header/ChatHeader";
import SidebarChannels from "./channels/SidebarChannels";
import SidebarHeader from "./header/SidebarHeader";
import SidebarInfo from "./info/SidebarInfo";

const drawerWidth = 240;

const PersistentDrawerLeft: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ChatHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            color: "white",
            backgroundColor: "var(--ieru-color)",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <SidebarHeader handleDrawerClose={handleDrawerClose} />
        <Divider />
        <SidebarChannels />
        <SidebarInfo />
        <Divider />
      </Drawer>
      <Main open={open}>
        <Chat open={open} />
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
