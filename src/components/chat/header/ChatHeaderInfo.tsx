import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

import { useStore } from "stores/store";

const ChatHeaderInfo: React.FC = () => {
  const { selectedChannel } = useStore().channelStore;
  const theme = useTheme();

  return (
    <StyledBox>
      <Box pt={1.6}>
        <Typography
          variant="body2"
          sx={{
            color:
              theme.palette.mode === "light"
                ? "var(--white)"
                : "var(--text-dark)",
          }}
        >
          チャンネル作成者
        </Typography>
      </Box>
      <Box pt={0.5}>
        <Tooltip title={selectedChannel?.createdUser}>
          <StyledSpan>
            <StyledImage
              src={selectedChannel?.createdUserPhotoUrl || ""}
              width={35}
              height={35}
            />
          </StyledSpan>
        </Tooltip>
      </Box>
    </StyledBox>
  );
};

export default ChatHeaderInfo;

const StyledBox = styled(Box)({
  "": {
    display: "flex",
  },
});

const StyledSpan = styled("span")({
  "": {
    paddingLeft: "0.4rem",
    verticalAlign: "middle",
  },
});

const StyledImage = styled(Image)({
  "": {
    borderRadius: "50%",
  },
});
