import { styled } from "@mui/material/styles";
import * as React from "react";

import { useStore } from "stores/store";

import SidebarInfoAvatar from "./SidebarInfoAvatar";
import SidebarInfoMenu from "./SidebarInfoMenu";

const SidebarInfo = () => {
  const { user } = useStore().userStore;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <StyledContainer>
      <StyledButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <SidebarInfoAvatar />
        <StyledName>{user?.displayName}</StyledName>
      </StyledButton>
      <SidebarInfoMenu anchorRef={anchorRef} open={open} setOpen={setOpen} />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  "": {
    position: "fixed",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "4.5rem",
  },
});

const StyledButton = styled("button")({
  "": {
    display: "flex",
    alignItems: "center",
    height: "3.5rem",
    marginLeft: "1rem",
    cursor: "pointer",
    backgroundColor: "var(--ieru-color)",
    border: "none",
    borderRadius: "1rem",
    outline: "none",

    "&:hover": {
      backgroundColor: "var(--sidebar-option-color)",
    },
  },
});

const StyledName = styled("h4")({
  "": {
    marginLeft: "0.5rem",
    fontSize: "16px",
    color: "white",
  },
});

export default SidebarInfo;
