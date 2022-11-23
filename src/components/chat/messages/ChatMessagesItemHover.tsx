// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";

const ChatMessagesItemHover = () => (
  <ButtonGroup size="small" aria-label="small button group">
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
    <Tooltip title="匿名化" placement="top">
      <StyledButton>
        <VisibilityOffIcon />
      </StyledButton>
    </Tooltip>
    <Tooltip title="その他" placement="top">
      <StyledButton>
        <MoreHorizIcon />
      </StyledButton>
    </Tooltip>
  </ButtonGroup>
);

export default ChatMessagesItemHover;

const StyledButton = styled("div")({
  padding: "0.2rem",
  cursor: "pointer",
});
