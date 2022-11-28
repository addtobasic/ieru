import MenuIcon from "@mui/icons-material/Menu";
import TagIcon from "@mui/icons-material/Tag";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import React from "react";

import { useStore } from "stores/store";

const drawerWidth = 240;

interface ChatHeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ open, handleDrawerOpen }) => {
  const theme = useTheme();
  const { selectedChannel } = useStore().channelStore;

  return (
    <AppBar
      sx={{
        backgroundColor: "var(--ieru-color)",
      }}
      position="fixed"
      theme={theme}
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            { mr: 2, ...(open && { display: "none" }) },
            {
              "&:hover": {
                backgroundColor: "var(--hover-background-color)",
              },
            },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <TagIcon />
        <Typography ml={0.5} mb={0.3} variant="h6" noWrap component="div">
          {selectedChannel?.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default observer(ChatHeader);
