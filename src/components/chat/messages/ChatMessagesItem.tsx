import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { db } from "config/firebase";
import { store, useStore } from "stores/store";
import { BadBy } from "types/badBy";
import { GoodBy } from "types/goodBy";
import { Message } from "types/message";

import anonymusPngDark from "../../../../public/images/anonymus-dark.png";
import anonymusPngLight from "../../../../public/images/anonymus.png";
import ChatMessagesItemHover from "./ChatMessagesItemHover";
import ChatMessagesItemLiked from "./liked/ChatMessagesItemLiked";
import TextRenderer from "./TextRenderer";

interface ChatMessagesItemProps {
  message: Message;
}

const ChatMessagesItem: React.FC<ChatMessagesItemProps> = ({ message }) => {
  const [isAnonym, setIsAnonym] = useState(message.isAnonym);
  const [likedBy, setLikedBy] = useState(message.likedBy);
  const [goodBy, setGoodBy] = useState(message.goodBy);
  const [badBy, setBadBy] = useState(message.badBy);
  const { photoURL, user, timestamp } = message;
  const displayImage = useStore().userStore.user?.photoURL;
  const theme = useTheme();

  // コメントのユーザーの画像のURLとログインユーザーの画像のURLが一致した場合にアイコンを表示する
  const isLoginUser = displayImage === photoURL;

  const channel = store.channelStore.selectedChannel;
  const messagesRef = doc(db, "channels", channel!.id, "messages", message.id);

  // チャットのデータをリアルタイム同期する
  useEffect(() => {
    onSnapshot(messagesRef, (doc) => {
      setIsAnonym(doc.data()?.isAnonym);
      setLikedBy(doc.data()?.likedBy);
      setGoodBy(doc.data()?.goodBy);
      setBadBy(doc.data()?.badBy);
    });
  }, []);

  // 匿名, 顕名を切り替えてfirestoreのデータを更新する関数
  const handleChangeAnonym = async () => {
    await updateDoc(messagesRef, {
      isAnonym: !isAnonym,
    });

    setIsAnonym(!isAnonym);
  };

  // ドキュメントを削除する関数
  const handleDeleteMessage = async () => {
    const result = window.confirm("本当に削除しますか?");

    if (result) {
      await deleteDoc(messagesRef);

      const channel = store.channelStore.selectedChannel;
      store.messageStore.loadMessages(channel!.id);
    }
  };

  // メッセージのスタイルの種類を決定する関数
  const decideMessageStyle = (goodBy: GoodBy[], badBy: BadBy[]) => {
    if (goodBy === undefined || badBy === undefined) return 0;

    const diff = goodBy.length - badBy.length;

    if (diff <= -3) return -3;
    if (diff >= 3) return 3;

    return diff;
  };

  // マウスオーバーでメニュ－アイコンを表示する
  const [isHover, setIsHover] = useState(false);

  const handlePopoverOpen = () => {
    setIsHover(true);
  };

  const handlePopoverClose = () => {
    setIsHover(false);
  };

  return (
    <StyledContainer
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <StyledImageDiv>
        {theme.palette.mode === "light" ? (
          <StyledImage
            src={isAnonym ? anonymusPngLight : photoURL}
            width={50}
            height={50}
            objectFit="contain"
            alt="user"
          />
        ) : (
          <StyledImage
            src={isAnonym ? anonymusPngDark : photoURL}
            width={50}
            height={50}
            objectFit="contain"
            alt="user"
          />
        )}
      </StyledImageDiv>
      <StyledContent>
        <StyledInfo>
          {isAnonym ? "Anonymous Comment" : user}
          <StyledDate>{moment(timestamp).format("lll")}</StyledDate>
        </StyledInfo>
        <StyledMessage styled-data={decideMessageStyle(goodBy, badBy)}>
          <TextRenderer text={message.message} />
        </StyledMessage>
      </StyledContent>
      <ChatMessagesItemLiked
        likedBy={likedBy}
        setLikedBy={setLikedBy}
        displayImage={displayImage}
        messagesRef={messagesRef}
      />
      <StyledPopper>
        {isHover && (
          <ChatMessagesItemHover
            isLoginUser={isLoginUser}
            isAnonym={isAnonym}
            goodBy={goodBy}
            setGoodBy={setGoodBy}
            badBy={badBy}
            setBadBy={setBadBy}
            displayImage={displayImage}
            messagesRef={messagesRef}
            handleChangeAnonym={handleChangeAnonym}
            handleDeleteMessage={handleDeleteMessage}
          />
        )}
      </StyledPopper>
    </StyledContainer>
  );
};

export default ChatMessagesItem;

const StyledContainer = styled("div")(({ theme }) => ({
  "": {
    position: "relative",
    display: "flex",
    padding: "1rem 1.5rem",
    marginTop: "0.8rem",
    marginBottom: "-0.8rem",

    // column-reverseにより、最新のコメントが一番下に表示される
    "&:first-child": {
      marginBottom: "0.8rem",
    },

    "&:hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? "var(--light-hover)"
          : "var(--dark-hover)",
    },
  },
}));

const StyledImageDiv = styled("div")({
  "": {
    minWidth: "50px",
  },
});

const StyledImage = styled(Image)({
  "": {
    borderRadius: "0.5rem",
  },
});

const StyledContent = styled("div")({
  "": {
    width: "100%",
    paddingLeft: "0.5rem",
  },
});

const StyledInfo = styled(Typography)(({ theme }) => ({
  "": {
    fontSize: "17px",
    fontWeight: "500",
    color: theme.palette.mode === "light" ? "var(--black)" : "var(--white)",
  },
}));

const StyledMessage = styled(Typography)(({ theme }) => ({
  "": {
    maxWidth: "95%",
    wordBreak: "break-all",
    whiteSpace: "pre-wrap",

    // いいねの数によってメッセージの装飾を変える
    "&[styled-data='-3']": {
      fontSize: "13px",
      color: theme.palette.mode === "light" ? "var(--black)" : "var(--white)",
      opacity: "0",
    },

    "&[styled-data='-2']": {
      fontSize: "15px",
      color: theme.palette.mode === "light" ? "var(--black)" : "var(--white)",
      opacity: "0.2",
    },

    "&[styled-data='-1']": {
      fontSize: "15px",
      color: theme.palette.mode === "light" ? "var(--black)" : "var(--white)",
      opacity: "0.6",
    },

    "&[styled-data='0']": {
      fontSize: "17px",
      color: theme.palette.mode === "light" ? "var(--black)" : "var(--white)",
    },

    "&[styled-data='1']": {
      fontSize: "21px",
      color: theme.palette.mode === "light" ? "var(--black)" : "var(--white)",
    },

    "&[styled-data='2']": {
      fontSize: "21px",
      fontWeight: "700",
      color: "var(--styled-message-2)",
    },

    "&[styled-data='3']": {
      fontSize: "25px",
      fontWeight: "700",
      color: "var(--styled-message-3)",
    },
  },
}));

const StyledDate = styled("span")({
  "": {
    marginLeft: "0.5rem",
    fontSize: "0.7rem",
    fontWeight: "400",
    color: "var(--text-date-color)",
  },
});

const StyledPopper = styled("div")({
  "": {
    position: "absolute",
    right: "0",
    marginTop: "-1.75rem",
    marginRight: "1.5rem",
  },
});
