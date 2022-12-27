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

import ChatHeaderInfo from "./ChatHeaderInfo";

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
    <AppBar position="fixed" theme={theme} open={open}>
      <Toolbar
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "var(--ieru-color)"
              : "var(--ieru-color-dark)",
        }}
      >
        {selectedChannel !== null && (
          <>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                { mr: 2, ...(open && { display: "none" }) },
                {
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "var(--ieru-color-hover)"
                        : "var(--ieru-color-hover-dark)",
                  },
                },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <StyledIcon>
              <TagIcon />
            </StyledIcon>
            <Typography
              ml={0.5}
              mb={0.3}
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                color:
                  theme.palette.mode === "light"
                    ? "var(--white)"
                    : "var(--text-dark)",
              }}
            >
              {selectedChannel?.name}
            </Typography>
            <ChatHeaderInfo />
          </>
        )}
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

const StyledIcon = styled("div")(({ theme }) =>
  theme.palette.mode === "light"
    ? {
        paddingTop: "0.1rem",
        color: "var(--white-icon)",
      }
    : {
        paddingTop: "0.1rem",

        color: "var(--text-dark)",
      }
);

export default observer(ChatHeader);
