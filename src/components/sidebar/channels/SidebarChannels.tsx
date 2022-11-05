import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";
import SidebarChannelItem from "./SidebarChannelItem";
import SidebarOptions from "../options/SidebarOptions";

const SidebarChannels = () => {
  const { channels } = useStore().channelStore;

  return (
    <StyledContainer>
      <SidebarOptions />
      {channels.map((channel) => (
        <SidebarChannelItem key={channel.id} channel={channel} />
      ))}
    </StyledContainer>
  );
};

export default observer(SidebarChannels);

const StyledContainer = styled("div")({});
