import { styled , useTheme } from "@mui/material/styles";
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
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const handleChangeDefaultAnonym = () => {
    colorMode.toggleColorMode();
    setIsDefaultAnonym(!isDefaultAnonym);
  };

  return (
    <>
      <StyledDefaultAnonymizeButton
        isAnonymize={isDefaultAnonym}
        onClick={handleChangeDefaultAnonym}
        type="button"
      >
        {theme.palette.mode} mode
        <Typography>{isDefaultAnonym ? "匿名ON" : "匿名OFF"}</Typography>
      </StyledDefaultAnonymizeButton>
    </>
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
  backgroundColor: "var(--white)",
  color: isAnonymize ? "var(--ieru-color)" : "var(--black)",
}));
