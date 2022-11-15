import { styled } from "@mui/material/styles";
import { useStore } from "stores/store";
import SidebarInfoAvatar from "./SidebarInfoAvatar";

const SidebarInfo = () => {
  const { user } = useStore().userStore;

  return (
    <StyledContainer>
      <StyledButton>
        <SidebarInfoAvatar />
        <StyledName>{user?.displayName}</StyledName>
      </StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  height: "4.5rem",
  display: "flex",
  alignItems: "center",
  width: "100%",
  position: "fixed",
  bottom: "0",
});

const StyledButton = styled("button")({
  display: "flex",
  alignItems: "center",
  height: "3.5rem",
  marginLeft: "1rem",
  border: "none",
  cursor: "pointer",
  borderRadius: "1rem",
  outline: "none",
  backgroundColor: "var(--ieru-color)",

  "&:hover": {
    backgroundColor: "var(--sidebar-option-color)",
  },
});

const StyledName = styled("h4")({
  marginLeft: "0.5rem",
  fontSize: "16px",
  color: "white",
});

export default SidebarInfo;
