import FavoriteOutlinedIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { updateDoc } from "firebase/firestore";
import React from "react";

import { useStore } from "stores/store";
import { LikedBy } from "types/likedBy";

import ChatMessagesItemLikedHistory from "./ChatMessagesItemLikedHistory";

interface ChatMessagesItemLikedProps {
  likedBy: LikedBy[];
  setLikedBy: React.Dispatch<React.SetStateAction<LikedBy[]>>;
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
  const { user } = useStore().userStore;
  const theme = useTheme();

  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // likedByにすでにいいねを押したユーザーのデータがあるかどうかを確認する
  const pressedLike = likedBy?.find(
    (data) => data.likedPhotoUrl === displayImage
  );

  // firestoreのいいねのデータを更新する関数
  const handleChangeLike = async () => {
    if (likedBy === undefined) {
      await updateDoc(messagesRef, {
        likedBy: {
          likedUser: user?.displayName,
          likedPhotoUrl: displayImage,
        },
      });
    }

    // いいねをすでに押していたらいいねを取り消す
    else if (pressedLike !== undefined) {
      await updateDoc(messagesRef, {
        likedBy: likedBy.filter((likeData) => likeData !== pressedLike),
      });

      setLikedBy(likedBy.filter((likeData) => likeData !== pressedLike));
    }

    // いいねを押していなかったらいいねを押す
    else {
      await updateDoc(messagesRef, {
        likedBy: [
          ...likedBy,
          { likedUser: user?.displayName, likedPhotoUrl: displayImage },
        ],
      });

      setLikedBy([
        ...likedBy,
        { likedUser: user?.displayName, likedPhotoUrl: displayImage },
      ] as LikedBy[]);
    }
  };

  return (
    <StyledDiv>
      <StyledButtonDiv onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <IconButton
          size="small"
          onClick={handleChangeLike}
          sx={{
            color:
              pressedLike?.likedPhotoUrl === displayImage
                ? "var(--like-color)"
                : theme.palette.mode === "light"
                ? "var(---color)"
                : "var(--white-icon)",
          }}
        >
          {pressedLike?.likedPhotoUrl === displayImage ? (
            <FavoriteOutlinedIcon />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </IconButton>
        <Typography
          sx={{
            paddingLeft: "0.15rem",
            color:
              pressedLike?.likedPhotoUrl === displayImage
                ? "var(--like-color)"
                : theme.palette.mode === "light"
                ? "var(---color)"
                : "var(--white-icon)",
          }}
        >
          {likedBy?.length}
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
