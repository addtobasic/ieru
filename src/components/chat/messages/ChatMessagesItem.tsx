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
import ChatMessagesItemMenu from "./ChatMessagesItemMenu";

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

  // マウスオーバーでメニュ－アイコンを表示する
  const [isHover, setIsHover] = React.useState(false);

  const handlePopoverOpen = () => {
    setIsHover(true);
  };

  const handlePopoverClose = () => {
    setIsHover(false);
  };

  return (
    <>
      <StyledContainer
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
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
        <StyledPopper>{isHover && <ChatMessagesItemMenu />}</StyledPopper>
      </StyledContainer>
    </>
  );
};

export default ChatMessagesItem;

const StyledContainer = styled("div")({
  display: "flex",
  padding: "1.25rem",
  justifyContent: "left",
  alignItems: "left",
  position: "relative",

  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
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
  "": {
    marginLeft: "0.5rem",
    fontSize: "0.6rem",
    fontWeight: "300",
    color: "gray",
  },
});

const StyledAnonymButton = styled(IconButton)({
  "": {
    position: "absolute",
    right: "0",
    marginRight: "1rem",
  },
});

const StyledPopper = styled("div")({
  position: "absolute",
  right: "0",
  marginTop: "-1.5rem",
  marginRight: "1rem",
});
