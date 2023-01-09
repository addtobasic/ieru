import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
// import SidebarHeaderInfo from "./SidebarHeaderInfo";

interface SideBarHeaderProps {
  handleDrawerClose: () => void;
}

const SidebarHeader: React.FC<SideBarHeaderProps> = ({ handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <DrawerHeader theme={theme}>
      <IconButton
        sx={{
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light"
                ? "var(--ieru-color-hover)"
                : "var(--ieru-color-hover-dark)",
          },
        }}
        onClick={handleDrawerClose}
      >
        <MenuIcon
          sx={
            theme.palette.mode === "light"
              ? { color: "var(--white)" }
              : {
                  color: "var(--text-dark)",
                }
          }
        />
      </IconButton>
    </DrawerHeader>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  "": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default SidebarHeader;
