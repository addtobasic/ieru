import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, useTheme } from "@mui/material/styles";

import { useStore } from "stores/store";

import SidebarOptionItem from "./SidebarOptionsItem";

const SidebarOptions = () => {
  const { createChannel } = useStore().channelStore;
  const theme = useTheme();

  return (
    <StyledContainer>
      <SidebarOptionItem title="Channels" Icon={ExpandMoreIcon} />
      <StyledSeparator theme={theme} />
      <SidebarOptionItem
        title="Add Channel"
        Icon={AddIcon}
        onClick={createChannel}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({});

const StyledSeparator = styled("div")(({ theme }) =>
  theme.palette.mode === "light"
    ? {
        height: "2px",
        margin: "0.75rem 0",
        backgroundColor: "var(--sidebar-separate-color)",
      }
    : {
        height: "2px",
        margin: "0.75rem 0",
        backgroundColor: "var(--sidebar-separate-color-dark)",
      }
);

export default SidebarOptions;
