import { styled } from "@mui/material/styles";
import React from "react";

import { useStore } from "stores/store";
import { Channel } from "types/channel";

interface SidebarChannelItemProps {
  channel: Channel;
}

const SidebarChannelItem: React.FC<SidebarChannelItemProps> = ({ channel }) => {
  const { id, name } = channel;
  const { selectChannel } = useStore().channelStore;

  return (
    <StyledContainer onClick={() => selectChannel(id)}>
      <StyledName>
        <StyledHash>#</StyledHash>
        {name}
      </StyledName>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  "": {
    display: "flex",
    alignItems: "center",
    fontSize: "0.75rem",
    paddingReft: "2px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "var(--hover-background-color)",
      opacity: 0.9,
    },
  },
});

const StyledName = styled("h3")({
  "": {
    padding: "0.75rem 0",
    fontWeight: 400,
  },
});

const StyledHash = styled("span")({
  "": {
    padding: "1rem 1.1rem",
  },
});

export default SidebarChannelItem;
