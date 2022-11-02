// import styled from "styled-components";
// import SidebarOptions from "./options/SidebarOptions";
// import SidebarOptionsLoader from "./options/SidebarOptionsLoader";

// const Sidebar = () => (
//   <StyledContainer>
//     <SidebarHeader />
//     <SidebarOptions />
//     <SidebarChannels />
//     <SidebarOptionsLoader />
//   </StyledContainer>
// );

// export default Sidebar;

// const StyledContainer = styled.section`
//   width: 16rem;
//   color: white;
//   background-color: var(--ieru-color);
//   border-top: 1px solid var(--sidebar-color);
//   overflow: scroll;

//   ::-webkit-scrollbar {
//     display: none;
//   }
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
// `;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import SidebarChannels from "./channels/SidebarChannels";
import SidebarHeader from "./header/SidebarHeader";
import ChatHeader from "../chat/header/ChatHeader";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const PersistentDrawerLeft: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);

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
        <Divider />
      </Drawer>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        {children}
      </Main>
    </Box>
  );
};

export default PersistentDrawerLeft;
