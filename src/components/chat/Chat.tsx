import { styled } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import { FC } from "react";

import { useStore } from "stores/store";

import ChatInput from "./input/ChatInput";
import ChatMessages from "./messages/ChatMessages";

interface ChatProps {
  open: boolean;
}

const Chat: FC<ChatProps> = ({ open }) => {
  const { selectedChannel } = useStore().channelStore;

  if (!selectedChannel) {
    return null;
  }

  return (
    <StyledContainer>
      <ChatMessages />
      <ChatInput open={open} />
    </StyledContainer>
  );
};

export default observer(Chat);

const StyledContainer = styled("section")(({ theme }) =>
  theme.palette.mode === "light"
    ? {
        backgroundColor: "var(--white)",
      }
    : {
        backgroundColor: "var(--ieru-color-dark)",
      }
);
