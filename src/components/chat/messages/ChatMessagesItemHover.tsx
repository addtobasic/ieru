import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonGroup from "@mui/material/ButtonGroup";
import Popper from "@mui/material/Popper";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { FC } from "react";

import ChatMessagesItemMenu from "./ChatMessagesItemMenu";

interface ChatMessagesItemHoverProps {
  isLoginUser: boolean;
  isAnonym: boolean;
  handleChangeAnonym: () => void;
}

const ChatMessagesItemHover: FC<ChatMessagesItemHoverProps> = ({
  isLoginUser,
  isAnonym,
  handleChangeAnonym,
}) => {
  // moreアイコンを押したときにメニューを表示する
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
        <Tooltip title="いいね" placement="top">
          <StyledButton>
            <ThumbUpAltIcon />
          </StyledButton>
        </Tooltip>
        <Tooltip title="よくないね" placement="top">
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
          <StyledButton onClick={handleMenuOpen}>
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
        />
      </Popper>
    </>
  );
};

export default ChatMessagesItemHover;

const StyledButton = styled("div")({
  "": {
    display: "flex",
    padding: "0.2rem",
    color: "var(--black-icon)",
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: "15%",

    "&:hover": {
      color: "var(--ieru-color-hover)",
      backgroundColor: "var(--white-hover)",
    },
  },
});
