import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { db } from "config/firebase";
import { store, useStore } from "stores/store";
import { Message } from "types/message";

import anonymusPng from "../../../../public/images/anonymus.png";

interface ChatMessagesItemProps {
  message: Message;
}

const ChatMessagesItem: React.FC<ChatMessagesItemProps> = ({ message }) => {
  const [isAnonym, setIsAnonym] = useState(message.isAnonym);
  const { photoURL, user, timestamp } = message;
  const displayImage = useStore().userStore.user?.photoURL;

  // コメントのユーザーの画像のURLとログインユーザーの画像のURLが一致した場合にアイコンを表示する
  const showButton = displayImage === photoURL;

  const channel = store.channelStore.selectedChannel;
  const messagesRef = doc(db, "channels", channel!.id, "messages", message.id);

  // チャットごとの匿名, 顕名を検知しリアルタイム同期をする
  useEffect(() => {
    onSnapshot(messagesRef, (doc) => {
      setIsAnonym(doc.data()?.isAnonym);
    });
  }, [messagesRef]);

  const handleChangeAnonym = async () => {
    await updateDoc(messagesRef, {
      isAnonym: !isAnonym,
    });

    setIsAnonym(!isAnonym);
  };

  return (
    <StyledContainer>
      <StyledImage
        src={isAnonym ? anonymusPng : photoURL}
        width={50}
        height={50}
        objectFit="contain"
        alt="user"
      />
      <StyledContent>
        <StyledInfo>
          {isAnonym ? "Anonymous Comment" : user}
          <StyledDate>{moment(timestamp).format("lll")}</StyledDate>
          {showButton && (
            <StyledAnonymButton onClick={handleChangeAnonym} size="small">
              {isAnonym ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon
                  sx={{
                    color: "var(--ieru-color)",
                  }}
                />
              )}
            </StyledAnonymButton>
          )}
        </StyledInfo>
        <StyledMessage>{message.message}</StyledMessage>
      </StyledContent>
    </StyledContainer>
  );
};

export default ChatMessagesItem;

const StyledContainer = styled("div")({
  display: "flex",
  padding: "1.25rem",
  justifyContent: "left",
  alignItems: "left",
  position: "relative",
});

const StyledImage = styled(Image)({
  borderRadius: "0.5rem",
});

const StyledContent = styled("div")({
  paddingLeft: "0.5rem",
});

const StyledInfo = styled("h4")({});

const StyledMessage = styled("p")({});

const StyledDate = styled("span")({
  color: "gray",
  fontWeight: "300",
  fontSize: "0.6rem",
  marginLeft: "0.5rem",
});

const StyledAnonymButton = styled(IconButton)({
  marginRight: "1rem",
  position: "absolute",
  right: "0",
});
