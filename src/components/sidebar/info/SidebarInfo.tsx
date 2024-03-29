import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useStore } from "stores/store";

import SidebarInfoAvatar from "./SidebarInfoAvatar";
import SidebarInfoMenu from "./SidebarInfoMenu";

const SidebarInfo = () => {
  const { user } = useStore().userStore;

  const [isUserInfoOpen, setIsUserInfoOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setIsUserInfoOpen((prevOpen) => !prevOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(isUserInfoOpen);
  React.useEffect(() => {
    if (prevOpen.current === true && isUserInfoOpen === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = isUserInfoOpen;
  }, [isUserInfoOpen]);

  return (
    <StyledContainer>
      <StyledButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={isUserInfoOpen ? "composition-menu" : undefined}
        aria-expanded={isUserInfoOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <SidebarInfoAvatar />
        <StyledName>{user?.displayName}</StyledName>
      </StyledButton>
      <SidebarInfoMenu
        anchorRef={anchorRef}
        open={isUserInfoOpen}
        setOpen={setIsUserInfoOpen}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  "": {
    position: "fixed",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    height: "4.5rem",
  },
});

const StyledButton = styled("button")(({ theme }) =>
  theme.palette.mode === "light"
    ? {
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
          backgroundColor: "var(--ieru-color-hover)",
        },
      }
    : {
        display: "flex",
        alignItems: "center",
        height: "3.5rem",
        marginLeft: "1rem",
        cursor: "pointer",
        backgroundColor: "var(--ieru-color-dark)",
        border: "none",
        borderRadius: "1rem",
        outline: "none",

        "&:hover": {
          backgroundColor: "var(--ieru-color-hover-dark)",
        },
      }
);

const StyledName = styled(Typography)(({ theme }) =>
  theme.palette.mode === "light"
    ? {
        "": {
          marginLeft: "0.5rem",
          fontSize: "16px",
          fontWeight: "500",
          color: "var(--white)",
        },
      }
    : {
        "": {
          marginLeft: "0.5rem",
          fontSize: "16px",
          fontWeight: "500",
          color: "var(--text-dark)",
        },
      }
);

export default SidebarInfo;
