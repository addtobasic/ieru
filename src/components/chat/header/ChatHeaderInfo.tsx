import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

import { useStore } from "stores/store";

const ChatHeaderInfo: React.FC = () => {
  const { selectedChannel } = useStore().channelStore;

  return (
    <StyledDiv>
      <StyledImage
        src={selectedChannel?.createdUserPhotoUrl || ""}
        width={30}
        height={30}
      />
      <Typography>
        チャンネルの作成者: {selectedChannel?.createdUser}
      </Typography>
    </StyledDiv>
  );
};

export default ChatHeaderInfo;

const StyledDiv = styled("div")({
  "": {},
});

const StyledImage = styled(Image)({
  "": {
    borderRadius: "50%",
  },
});
