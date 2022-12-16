import FavoriteOutlinedIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { updateDoc } from "firebase/firestore";
import React from "react";

import ChatMessagesItemLikedHistory from "./ChatMessagesItemLikedHistory";

interface ChatMessagesItemLikedProps {
  likedBy: string[];
  setLikedBy: React.Dispatch<React.SetStateAction<string[]>>;
  displayImage: string | undefined;
  messagesRef: any;
}

const ChatMessagesItemLiked: React.FC<ChatMessagesItemLikedProps> = ({
  likedBy,
  setLikedBy,
  displayImage,
  messagesRef,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // firestoreのいいねのデータを更新する関数
  const handleChangeLike = async () => {
    if (likedBy === undefined) {
      await updateDoc(messagesRef, {
        likedBy: [displayImage],
      });
    }

    // いいねをすでに押していたらいいねを取り消す
    else if (likedBy.includes(displayImage || "")) {
      await updateDoc(messagesRef, {
        likedBy: likedBy.filter((like) => like !== displayImage),
      });

      setLikedBy(likedBy.filter((like) => like !== displayImage));
    }

    // いいねを押していなかったらいいねを押す
    else {
      await updateDoc(messagesRef, {
        likedBy: [...likedBy, displayImage],
      });

      setLikedBy([...likedBy, displayImage || ""]);
    }
  };

  return (
    <StyledDiv>
      <StyledButtonDiv>
        <IconButton
          size="small"
          onClick={handleChangeLike}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          sx={{
            color: likedBy?.includes(displayImage || "")
              ? "var(--like-color)"
              : "var(---color)",
          }}
        >
          {likedBy?.includes(displayImage || "") ? (
            <FavoriteOutlinedIcon />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </IconButton>
        <Typography
          sx={{
            paddingLeft: "0.15rem",
            color: likedBy?.includes(displayImage || "")
              ? "var(--like-color)"
              : "var(---color)",
          }}
        >
          {likedBy?.length || 0}
        </Typography>
        <ChatMessagesItemLikedHistory
          open={open}
          anchorEl={anchorEl}
          likedBy={likedBy}
        />
      </StyledButtonDiv>
    </StyledDiv>
  );
};

export default ChatMessagesItemLiked;

const StyledDiv = styled("div")({
  "": {
    display: "flex",
    alignItems: "end",
    marginRight: "0",
    marginLeft: "auto",
  },
});

const StyledButtonDiv = styled("div")({
  "": {
    display: "flex",
    alignItems: "center",
    color: "var(--black-icon)",

    "&:hover": {
      color: "var(--like-color)",
    },
  },
});
