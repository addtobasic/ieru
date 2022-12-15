import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import React from "react";

interface ChatMessagesItemLikedHistoryProps {
  open: boolean;
  anchorEl: HTMLElement | null;
}

const ChatMessagesItemLikedHistory: React.FC<ChatMessagesItemLikedHistoryProps> =
  ({ open, anchorEl }) => (
    <Popper open={open} anchorEl={anchorEl}>
      <Box>
        <p>hoge</p>
      </Box>
    </Popper>
  );

export default ChatMessagesItemLikedHistory;
