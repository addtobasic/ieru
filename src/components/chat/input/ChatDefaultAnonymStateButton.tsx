import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

import { ColorModeContext } from "../../../pages/index";

interface ChatDefaultAnonymStateButtonProps {
  isDefaultAnonym: boolean;
  setIsDefaultAnonym: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AnonymizeProps {
  isAnonymize: boolean;
}

const ChatAnonymState: React.FC<ChatDefaultAnonymStateButtonProps> = ({
  isDefaultAnonym,
  setIsDefaultAnonym,
}) => {
  const colorMode = React.useContext(ColorModeContext);

  const handleChangeDefaultAnonym = () => {
    colorMode.toggleColorMode();
    setIsDefaultAnonym(!isDefaultAnonym);
  };

  return (
    <StyledDefaultAnonymizeButton
      isAnonymize={isDefaultAnonym}
      onClick={handleChangeDefaultAnonym}
      type="button"
    >
      <Typography sx={{ fontSize: "1.1rem" }}>
        {isDefaultAnonym ? "匿名ON" : "匿名OFF"}
      </Typography>
    </StyledDefaultAnonymizeButton>
  );
};

export default ChatAnonymState;

const StyledDefaultAnonymizeButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "isAnonymize",
})<AnonymizeProps>(({ isAnonymize }) => ({
  paddingRight: "11px",
  cursor: "pointer",
  border: "none",
  outline: "none",
  backgroundColor: isAnonymize ? "var(--ieru-color-dark)" : "var(--white)",
  color: isAnonymize ? "var(--text-dark)" : "var(--black)",
}));
