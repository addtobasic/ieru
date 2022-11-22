import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import * as React from "react";

const ChatMessagesItemMenu = () => (
  <ButtonGroup size="small" aria-label="small button group">
    <StyledButton>
      <ThumbUpAltIcon />
    </StyledButton>
    <StyledButton>
      <ThumbDownAltIcon />
    </StyledButton>
    <StyledButton>
      <VisibilityOffIcon />
    </StyledButton>
    <StyledButton>
      <EditIcon />
    </StyledButton>
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  </ButtonGroup>
);

export default ChatMessagesItemMenu;

const StyledButton = styled("div")({
  padding: "0.2rem",
});
