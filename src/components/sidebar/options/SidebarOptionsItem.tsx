import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { styled } from "@mui/material/styles";

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
    <StyledIconContainer>
      <Icon fontSize="small" />
    </StyledIconContainer>
    <StyledTitle>{title}</StyledTitle>
  </StyledContainer>
);

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "0.75rem",
  paddingReft: "2px",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.9,
    backgroundColor: "var(--sidebar-option-color)",
  },
});

const StyledIconContainer = styled("div")({
  margin: "0.75rem",
});

const StyledTitle = styled("h3")({
  fontWeight: 500,
});

export default SidebarOptionItem;
