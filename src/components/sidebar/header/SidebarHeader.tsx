import React from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";
// import SidebarHeaderInfo from "./SidebarHeaderInfo";

interface SideBarHeaderProps {
  handleDrawerClose: () => void;
}

const SidebarHeader: React.FC<SideBarHeaderProps> = ({ handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default SidebarHeader;
