import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
        sx={[
          {
            "&:hover": {
              backgroundColor: "var(--ieru-color-hover)",
            },
          },
        ]}
        onClick={handleDrawerClose}
      >
        {theme.direction === "ltr" ? (
          <ChevronLeftIcon sx={{ color: "var(--white)" }} />
        ) : (
          <ChevronRightIcon />
        )}
      </IconButton>
    </DrawerHeader>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  "": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default SidebarHeader;
