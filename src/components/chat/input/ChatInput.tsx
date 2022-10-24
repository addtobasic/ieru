import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "stores/store";
import styled from "styled-components";

import ChatDefaultAnonymStateButton from "./ChatDefaultAnonymStateButton";

const ChatInput = () => {
  const { selectedChannel } = useStore().channelStore;
  const { sendMessage } = useStore().messageStore;
  const [input, setInput] = useState("");
  const [isDefaultAnonym, setIsDefaultAnonym] = useState(false);

  const handleSendMessage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (input === "") {
      return;
    }
    const success = sendMessage(input, isDefaultAnonym);

    if (success) {
      setInput("");
    }
  };

  return (
    <StyledContainer>
      <StyledContent>
        <ChatDefaultAnonymStateButton
          isDefaultAnonym={isDefaultAnonym}
          setIsDefaultAnonym={setIsDefaultAnonym}
        />
        <StyledInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${selectedChannel?.name || ""}`}
          type="text"
        />
        <button hidden type="submit" onClick={handleSendMessage}>
          Send Message
        </button>
      </StyledContent>
    </StyledContainer>
  );
};

export default observer(ChatInput);

const StyledContainer = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledContent = styled.div`
  text-align: right;
  position: relative;
  bottom: 2rem;
  width: 75%;
`;

const StyledInput = styled.input`
  display: block;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 1.25rem;
  outline: none;
  width: 100%;
`;
