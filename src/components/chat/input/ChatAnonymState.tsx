import React, { useState } from "react";
import styled from "styled-components";

interface ChatAnonymStateProps {
  // isDefaultAnonym: boolean;
}

interface AnonymizeProps {
  isAnonymize: boolean;
}

const ChatAnonymState: React.FC<ChatAnonymStateProps> = () => {
  const [isDefaultAnonym, setIsDefaultAnonym] = useState(true);

  const handleChangeDefaultAnonym = () => {
    setIsDefaultAnonym(!isDefaultAnonym);
  };

  return (
    <>
      <StyledContainer>
        <StyledAnonymizeButton
          isAnonymize={isDefaultAnonym}
          onClick={handleChangeDefaultAnonym}
          type="button"
        >
          {isDefaultAnonym ? "匿名ON" : "匿名OFF"}
        </StyledAnonymizeButton>
      </StyledContainer>
    </>
  );
};

export default ChatAnonymState;

const StyledContainer = styled.div``;

const StyledAnonymizeButton = styled.button<AnonymizeProps>`
  background: ${(props) => (props.isAnonymize ? "white" : "white")};
  color: ${(props) => (props.isAnonymize ? "#007ab7" : "black")};
`;
