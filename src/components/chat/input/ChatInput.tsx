import { styled } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";

import { useStore } from "stores/store";

import ChatDefaultAnonymStateButton from "./ChatDefaultAnonymStateButton";
import ChatSendButton from "./ChatSendButton";

interface ChatInputProps {
  open: boolean;
}

const drawerWidth = 240;

const ChatInput: FC<ChatInputProps> = ({ open }) => {
  const { selectedChannel } = useStore().channelStore;
  const { sendMessage } = useStore().messageStore;
  const [input, setInput] = useState("");
  const [isDefaultAnonym, setIsDefaultAnonym] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }

    if (input === "") {
      return;
    }

    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      const success = sendMessage(input, isDefaultAnonym);

      if (success) {
        setInput("");
      }
    }
  };

  return (
    <StyledContainer open={open}>
      <StyledContent>
        <ChatDefaultAnonymStateButton
          isDefaultAnonym={isDefaultAnonym}
          setIsDefaultAnonym={setIsDefaultAnonym}
        />
        <StyledDiv>
          <StyledInput
            value={input}
            onChange={handleChangeInput}
            onKeyDown={handleSendMessage}
            placeholder={`Message #${selectedChannel?.name || ""}`}
            type="text"
          />
          <ChatSendButton
            input={input}
            setInput={setInput}
            isDefaultAnonym={isDefaultAnonym}
          />
        </StyledDiv>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled("form", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  width: "100%",
  position: "fixed",
  bottom: "0",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledContent = styled("div")({
  "": {
    // width: "100%",
    textAlign: "right",
    padding: "5px",
  },
});

const StyledDiv = styled("div")({
  "": {
    display: "flex",
    padding: "0 5px",
    border: "2px solid #ccc",
    borderRadius: "5px",
  },
});

const StyledInput = styled("input")({
  "": {
    display: "block",
    width: "100%",
    fontSize: "15px",
    // height: "4rem",
    // padding: "1px",
    border: "none",
    outline: "none",
  },
});

export default observer(ChatInput);
