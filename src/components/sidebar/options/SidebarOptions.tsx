import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import { useStore } from "stores/store";

import SidebarOptionItem from "./SidebarOptionsItem";

const SidebarOptions = () => {
  const { createChannel } = useStore().channelStore;

  return (
    <StyledContainer>
      <SidebarOptionItem title="Channels" Icon={ExpandMoreIcon} />
      <StyledSeparator />
      <SidebarOptionItem
        title="Add Channel"
        Icon={AddIcon}
        onClick={createChannel}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({});

const StyledSeparator = styled("div")({
  "": {
    height: "2px",
    margin: "0.75rem 0",
    backgroundColor: "var(--sidebar-separate-color)",
  },
});

export default SidebarOptions;
