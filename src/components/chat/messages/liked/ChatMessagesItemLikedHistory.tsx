import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";

interface ChatMessagesItemLikedHistoryProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  likedBy: string[];
}

interface isLikedNumEqualZeroProps {
  isLikedNumEqualZero: boolean;
}

const ChatMessagesItemLikedHistory: React.FC<ChatMessagesItemLikedHistoryProps> =
  ({ open, anchorEl, likedBy }) => (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
      <StyledBox isLikedNumEqualZero={!likedBy.length}>
        {likedBy.map((likeImageUrl) => (
          <StyledSpan key={likeImageUrl}>
            <StyledImage src={likeImageUrl} width={35} height={35} />
          </StyledSpan>
        ))}
      </StyledBox>
    </Popper>
  );

export default ChatMessagesItemLikedHistory;

const StyledImage = styled(Image)({
  "": {
    borderRadius: "50%",
  },
});

const StyledBox = styled(Box)<isLikedNumEqualZeroProps>(
  ({ isLikedNumEqualZero }) => ({
    "": {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "220px",
      backgroundColor: "var(--white)",
      border: isLikedNumEqualZero ? "none" : "2px solid var(--ieru-color)",
      borderRadius: "0.5rem",
    },
  })
);

const StyledSpan = styled("span")({
  "": {
    display: "flex",
    padding: "0.25rem",
  },
});
