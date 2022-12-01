import TagIcon from "@mui/icons-material/Tag";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import * as React from "react";

import { useStore } from "stores/store";

import SidebarOptions from "../options/SidebarOptions";

const SidebarChannels = () => {
  const { channels, selectChannel } = useStore().channelStore;
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <SidebarOptions />
      {channels.map((channel, index) => (
        <StyledContainer
          onClick={() => selectChannel(channel.id)}
          key={channel.id}
        >
          <ListItemButton
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemIcon
              sx={{
                color: "#fff",
              }}
            >
              <TagIcon />
            </ListItemIcon>
            <ListItemText primary={channel.name} />
          </ListItemButton>
        </StyledContainer>
      ))}
    </>
  );
};

export default observer(SidebarChannels);

const StyledContainer = styled("div")({
  "": {
    "&:hover": {
      backgroundColor: "var(--hover-background-color)",
    },
  },
});
