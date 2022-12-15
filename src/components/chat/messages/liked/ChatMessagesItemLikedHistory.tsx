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

const ChatMessagesItemLikedHistory: React.FC<ChatMessagesItemLikedHistoryProps> =
  ({ open, anchorEl, likedBy }) => (
    <Popper open={open} anchorEl={anchorEl}>
      <Box>
        {likedBy.map((likeImageUrl) => (
          <StyledSpan key={likeImageUrl}>
            <StyledImage src={likeImageUrl} width={35} height={35} />
          </StyledSpan>
        ))}
      </Box>
    </Popper>
  );

export default ChatMessagesItemLikedHistory;

const StyledImage = styled(Image)({
  "": {
    borderRadius: "50%",
  },
});

const StyledSpan = styled("span")({
  "": {},
});
