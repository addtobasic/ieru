import { SvgIconTypeMap } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import React from "react";

interface SidebarOptionsItemProps {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  onClick?: () => any;
}

const SidebarOptionItem: React.FC<SidebarOptionsItemProps> = ({
  title,
  Icon,
  onClick,
}) => (
  <StyledContainer onClick={onClick}>
    <ListItemButton>
      <ListItemIcon
        sx={{
          color: "#fff",
        }}
      >
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  </StyledContainer>
);

const StyledContainer = styled("div")({
  "": {
    "&:hover": {
      backgroundColor: "var(--hover-background-color)",
    },
  },
});

export default SidebarOptionItem;
