import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteOutlinedIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { db } from "config/firebase";
import { store, useStore } from "stores/store";
import { Message } from "types/message";

import anonymusPng from "../../../../public/images/anonymus.png";
import ChatMessagesItemHover from "./ChatMessagesItemHover";

interface ChatMessagesItemProps {
  message: Message;
}

const ChatMessagesItem: React.FC<ChatMessagesItemProps> = ({ message }) => {
  const [isAnonym, setIsAnonym] = useState(message.isAnonym);
  const { photoURL, user, timestamp } = message;
  const displayImage = useStore().userStore.user?.photoURL;

  // コメントのユーザーの画像のURLとログインユーザーの画像のURLが一致した場合にアイコンを表示する
  const isLoginUser = displayImage === photoURL;

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
        <StyledImageDiv>
          <StyledImage
            src={isAnonym ? anonymusPng : photoURL}
            width={50}
            height={50}
            objectFit="contain"
            alt="user"
          />
        </StyledImageDiv>
        <StyledContent>
          <StyledInfo>
            {isAnonym ? "Anonymous Comment" : user}
            <StyledDate>{moment(timestamp).format("lll")}</StyledDate>
          </StyledInfo>
          <StyledMessage>{message.message}</StyledMessage>
        </StyledContent>
        <StyledButtonDiv>
          <IconButton size="small" color="primary">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </StyledButtonDiv>
        <StyledPopper>
          {isHover && (
            <ChatMessagesItemHover
              isLoginUser={isLoginUser}
              isAnonym={isAnonym}
              handleChangeAnonym={handleChangeAnonym}
            />
          )}
        </StyledPopper>
      </StyledContainer>
    </>
  );
};

export default ChatMessagesItem;

const StyledContainer = styled("div")({
  display: "flex",
  padding: "1rem 1.5rem",
  position: "relative",

  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
});

const StyledImageDiv = styled("div")({
  minWidth: "50px",
});

const StyledImage = styled(Image)({
  borderRadius: "0.5rem",
});

const StyledContent = styled("div")({
  paddingLeft: "0.5rem",
  width: "100%",
});

const StyledInfo = styled(Typography)({
  fontSize: "17px",
  fontWeight: "500",
});

const StyledMessage = styled(Typography)({
  maxWidth: "95%",
  whiteSpace: "pre-wrap",
  wordBreak: "break-all",
  fontSize: "17px",
});

const StyledDate = styled("span")({
  "": {
    marginLeft: "0.5rem",
    fontSize: "0.7rem",
    fontWeight: "400",
    color: "gray",
  },
});

const StyledButtonDiv = styled("div")({
  "": {
    display: "flex",
    alignItems: "end",
    marginRight: "0",
    marginLeft: "auto",
  },
});

const StyledPopper = styled("div")({
  "": {
    position: "absolute",
    right: "0",
    marginTop: "-1.5rem",
    marginRight: "1.5rem",
  },
});
