import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";

const ICON_MENU_LIST = [
  {
    icon: <ThumbUpAltIcon />,
    label: "いいね",
  },
  {
    icon: <ThumbDownAltIcon />,
    label: "よくないね",
  },
  {
    icon: <VisibilityOffIcon />,
    label: "匿名化",
  },
  {
    icon: <EditIcon />,
    label: "編集",
  },
  {
    icon: <DeleteIcon />,
    label: "削除",
  },
];

const ChatMessagesItemMenu = () => (
  <ButtonGroup size="small" aria-label="small button group">
    {ICON_MENU_LIST.map((item) => (
      <Tooltip key={item.label} title={item.label}>
        <StyledButton>{item.icon}</StyledButton>
      </Tooltip>
    ))}
  </ButtonGroup>
);

export default ChatMessagesItemMenu;

const StyledButton = styled("div")({
  padding: "0.2rem",
});
