import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonGroup from "@mui/material/ButtonGroup";
import Popper from "@mui/material/Popper";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { updateDoc } from "firebase/firestore";
import * as React from "react";
import { FC } from "react";

import { useStore } from "stores/store";
import { BadBy } from "types/badBy";
import { GoodBy } from "types/goodBy";

import ChatMessagesItemMenu from "./ChatMessagesItemMenu";

interface ChatMessagesItemHoverProps {
  isLoginUser: boolean;
  isAnonym: boolean;
  goodBy: GoodBy[];
  setGoodBy: React.Dispatch<React.SetStateAction<GoodBy[]>>;
  badBy: BadBy[];
  setBadBy: React.Dispatch<React.SetStateAction<BadBy[]>>;
  displayImage: string | undefined;
  messagesRef: any;
  handleChangeAnonym: () => void;
  handleDeleteMessage: () => void;
}

const ChatMessagesItemHover: FC<ChatMessagesItemHoverProps> = ({
  isLoginUser,
  isAnonym,
  goodBy,
  setGoodBy,
  badBy,
  setBadBy,
  displayImage,
  messagesRef,
  handleChangeAnonym,
  handleDeleteMessage,
}) => {
  // moreアイコンを押したときにメニューを表示する
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user } = useStore().userStore;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  // goodByにすでにgoodを押したユーザーのデータがあるかどうかを確認する
  const pressedGood = goodBy?.find(
    (data) => data.goodPhotoUrl === displayImage
  );

  // badByにすでにbadを押したユーザーのデータがあるかどうかを確認する
  const pressedBad = badBy?.find((data) => data.badPhotoUrl === displayImage);

  // firestoreのgoodのデータを更新する関数
  const handleChangeGood = async () => {
    if (goodBy === undefined) {
      await updateDoc(messagesRef, {
        goodBy: {
          goodUser: user?.displayName,
          goodPhotoUrl: user?.photoURL,
        },
      });
    }

    // goodをすでに押していたらgoodを取り消す
    else if (pressedGood !== undefined) {
      await updateDoc(messagesRef, {
        goodBy: goodBy.filter((goodData) => goodData !== pressedGood),
      });

      setGoodBy(goodBy.filter((goodData) => goodData !== pressedGood));
    }

    // goodを押していなかったらgoodを押す
    else {
      await updateDoc(messagesRef, {
        goodBy: [
          ...goodBy,
          { goodUser: user?.displayName, goodPhotoUrl: displayImage },
        ],
      });

      setGoodBy([
        ...goodBy,
        { goodUser: user?.displayName, goodPhotoUrl: displayImage },
      ] as GoodBy[]);
    }
  };

  // firestoreのbadのデータを更新する関数
  const handleChangeBad = async () => {
    if (badBy === undefined) {
      await updateDoc(messagesRef, {
        badBy: {
          badUser: user?.displayName,
          badPhotoUrl: user?.photoURL,
        },
      });
    }

    // goodをすでに押していたらgoodを取り消す
    else if (pressedBad !== undefined) {
      await updateDoc(messagesRef, {
        badBy: badBy.filter((badData) => badData !== pressedBad),
      });

      setBadBy(badBy.filter((badData) => badData !== pressedBad));
    }

    // goodを押していなかったらgoodを押す
    else {
      await updateDoc(messagesRef, {
        badBy: [
          ...badBy,
          { badUser: user?.displayName, badPhotoUrl: displayImage },
        ],
      });

      setBadBy([
        ...badBy,
        { badUser: user?.displayName, badPhotoUrl: displayImage },
      ] as BadBy[]);
    }
  };

  return (
    <>
      <ButtonGroup
        sx={{
          borderRadius: "4px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.26)",
        }}
        size="small"
        aria-label="small button group"
      >
        <Tooltip
          title="いいね"
          placement="top"
          onClick={handleChangeGood}
          sx={{
            color: pressedGood ? "var(--ieru-color)" : "none",
          }}
        >
          <StyledButton position="left">
            <ThumbUpAltIcon />
          </StyledButton>
        </Tooltip>
        <Tooltip
          title="よくないね"
          placement="top"
          onClick={handleChangeBad}
          sx={{
            color: pressedBad ? "var(--ieru-color)" : "none",
          }}
        >
          <StyledButton>
            <ThumbDownAltIcon />
          </StyledButton>
        </Tooltip>
        {isLoginUser && (
          <Tooltip
            title={isAnonym ? "顕名化" : "匿名化"}
            placement="top"
            onClick={handleChangeAnonym}
          >
            <StyledButton>
              {isAnonym ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </StyledButton>
          </Tooltip>
        )}
        <Tooltip title="その他" placement="top">
          <StyledButton position="right" onClick={handleMenuOpen}>
            <MoreHorizIcon />
          </StyledButton>
        </Tooltip>
      </ButtonGroup>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="left-start">
        <ChatMessagesItemMenu
          isAnonym={isAnonym}
          handleChangeAnonym={handleChangeAnonym}
          isLoginUser={isLoginUser}
          handleMenuClose={handleMenuClose}
          handleDeleteMessage={handleDeleteMessage}
        />
      </Popper>
    </>
  );
};

export default ChatMessagesItemHover;

const StyledButton = styled("div")<{ position?: string }>(
  ({ position, theme }) => ({
    "": {
      display: "flex",
      padding: "0.2rem",
      color:
        theme.palette.mode === "light"
          ? "var(--black-icon)"
          : "var(--white-icon)",
      cursor: "pointer",
      backgroundColor:
        theme.palette.mode === "light"
          ? "var(--white)"
          : "var(--ieru-color-dark)",

      ...(position === "left" && {
        borderRadius: "15% 0 0 15%",
      }),

      ...(position === "right" && {
        borderRadius: "0 15% 15% 0",
      }),

      "&:hover": {
        backgroundColor:
          theme.palette.mode === "light"
            ? "var(--light-hover)"
            : "var(--dark-hover)",
      },
    },
  })
);
