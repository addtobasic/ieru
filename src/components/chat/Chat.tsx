import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";
import ChatMessages from "./messages/ChatMessages";
import ChatInput from "./input/ChatInput";

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

const StyledContainer = styled("section")({});
