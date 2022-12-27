import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import React, { FC } from "react";

import { useStore } from "stores/store";

interface ChatSendButtonProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isDefaultAnonym: boolean;
}

const ChatSendButton: FC<ChatSendButtonProps> = ({
  input,
  setInput,
  isDefaultAnonym,
}) => {
  const { sendMessage } = useStore().messageStore;

  const handleSendMessage = () => {
    if (input === "") {
      return;
    }

    // inputから改行や空白を取り除く
    const trimmedInput = input.trim();
    const success = sendMessage(trimmedInput, isDefaultAnonym);

    if (success) {
      setInput("");
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      {input !== "" ? (
        <IconButton
          sx={{
            color: "var(--ieru-color)",

            "&:hover": {
              color: "#008ae6",
            },
          }}
          onClick={handleSendMessage}
        >
          <SendIcon />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            color: "var(--black-icon)",
          }}
        >
          <SendIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default ChatSendButton;
