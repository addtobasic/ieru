import React, { useState } from "react";
import moment from "moment";
import Image from "next/image";
import styled from "styled-components";
import { Message } from "types/message";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "config/firebase";
import { toast } from "react-toastify";
import { useStore, store } from "stores/store";

import anonymusPng from "../../../../public/images/anonymus.png";

interface ChatMessagesItemProps {
  message: Message;
}

const ChatMessagesItem: React.FC<ChatMessagesItemProps> = ({ message }) => {
  const [isAnonym, setIsAnonym] = useState(message.isAnonym);
  const { photoURL, user, timestamp } = message;
  const displayName = useStore().userStore.user?.displayName;

  // コメントのユーザーとログインユーザーが一致した場合にアイコンを表示する
  const showButton = displayName === user;

  const handleChangeAnonym = async () => {
    const channel = store.channelStore.selectedChannel;
    if (!user || !channel) {
      toast.error("An error occurred. Please try again.");
      return false;
    }

    const messagesRef = doc(db, "channels", channel.id, "messages", message.id);
    await updateDoc(messagesRef, {
      isAnonym: !isAnonym,
    });

    setIsAnonym(!isAnonym);
    return true;
  };

  return isAnonym ? (
    <StyledContainer>
      <StyledImage
        src={anonymusPng}
        width={50}
        height={50}
        objectFit="contain"
        alt="user"
      />
      <StyledContent>
        <StyledInfo>
          Anonymous Comment
          <StyledDate>{moment(timestamp).format("lll")}</StyledDate>
          {showButton && (
            <StyledAnonymButton>
              <MdOutlinePeopleAlt onClick={handleChangeAnonym} />
            </StyledAnonymButton>
          )}
        </StyledInfo>
        <StyledMessage>{message.message}</StyledMessage>
      </StyledContent>
    </StyledContainer>
  ) : (
    <StyledContainer>
      <StyledImage
        src={photoURL}
        width={50}
        height={50}
        objectFit="contain"
        alt="user"
      />
      <StyledContent>
        <StyledInfo>
          {user}
          <StyledDate>{moment(timestamp).format("lll")}</StyledDate>
          {showButton && (
            <StyledAnonymButton>
              <MdOutlinePeopleAlt onClick={handleChangeAnonym} />
            </StyledAnonymButton>
          )}
        </StyledInfo>
        <StyledMessage>{message.message}</StyledMessage>
      </StyledContent>
    </StyledContainer>
  );
};

export default ChatMessagesItem;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem;
`;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
`;

const StyledContent = styled.div`
  padding-left: 0.5rem;
`;

const StyledInfo = styled.h4``;

const StyledMessage = styled.p``;

const StyledDate = styled.span`
  color: gray;
  font-weight: 300;
  margin-left: 0.5rem;
  font-size: 0.6rem;
`;

const StyledAnonymButton = styled.button`
  margin-left: 0.5rem;
`;
