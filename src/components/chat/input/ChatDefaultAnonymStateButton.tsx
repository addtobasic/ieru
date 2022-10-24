import React from "react";
import styled from "styled-components";

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

const StyledDefaultAnonymizeButton = styled.button<AnonymizeProps>`
  cursor: pointer;
  border: none;
  outline: none;
  background: ${(props) => (props.isAnonymize ? "white" : "white")};
  color: ${(props) => (props.isAnonymize ? "#007ab7" : "black")};
`;
