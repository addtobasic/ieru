import { SvgIconTypeMap } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled, useTheme } from "@mui/material/styles";
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
}) => {
  const theme = useTheme();

  return (
    <StyledContainer onClick={onClick}>
      <ListItemButton>
        <ListItemIcon
          sx={
            theme.palette.mode === "light"
              ? {
                  color: "var(--white)",
                }
              : {
                  color: "var(--text-dark)",
                }
          }
        >
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({});

export default SidebarOptionItem;
