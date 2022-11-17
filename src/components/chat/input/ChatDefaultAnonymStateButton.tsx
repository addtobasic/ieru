import { styled } from "@mui/material/styles";
import React from "react";

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
  const handleChangeDefaultAnonym = () => {
    setIsDefaultAnonym(!isDefaultAnonym);
  };

  return (
    <>
      <StyledDefaultAnonymizeButton
        isAnonymize={isDefaultAnonym}
        onClick={handleChangeDefaultAnonym}
        type="button"
      >
        {isDefaultAnonym ? "匿名ON" : "匿名OFF"}
      </StyledDefaultAnonymizeButton>
    </>
  );
};

export default ChatAnonymState;

const StyledDefaultAnonymizeButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "isAnonymize",
})<AnonymizeProps>(({ isAnonymize }) => ({
  padding: "0.5rem",
  cursor: "pointer",
  border: "none",
  outline: "none",
  backgroundColor: "white",
  color: isAnonymize ? "var(--ieru-color)" : "black",
}));
