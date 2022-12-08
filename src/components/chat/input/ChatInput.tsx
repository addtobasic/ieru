import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
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
    if (input === "") {
      return;
    }

    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      // inputから改行や空白を取り除く
      const trimmedInput = input.trim();
      const success = sendMessage(trimmedInput, isDefaultAnonym);

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
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              multiline
              maxRows={10}
              onChange={handleChangeInput}
              onKeyDown={handleSendMessage}
              placeholder={`Message #${selectedChannel?.name || ""}`}
              id="outlined-adornment-password"
              type="text"
              value={input}
              sx={{
                color: "var(--black)",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <ChatSendButton
                    input={input}
                    setInput={setInput}
                    isDefaultAnonym={isDefaultAnonym}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
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
    textAlign: "right",
  },
});

const StyledDiv = styled("div")({
  "": {
    padding: "10px",
    backgroundColor: "var(--white)",
  },
});

export default observer(ChatInput);
