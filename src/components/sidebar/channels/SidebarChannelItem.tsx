import TagIcon from "@mui/icons-material/Tag";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
      <ListItemButton>
        <ListItemIcon
          sx={{
            color: "#fff",
          }}
        >
          <TagIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  "": {
    "&:hover": {
      backgroundColor: "var(--hover-background-color)",
    },
  },
});

export default SidebarChannelItem;
