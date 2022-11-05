import AddIcon from "@mui/icons-material/Add";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InboxIcon from "@mui/icons-material/Inbox";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";
import SidebarOptionItem from "./SidebarOptionsItem";

const SidebarOptions = () => {
  const { createChannel } = useStore().channelStore;

  return (
    <StyledContainer>
      <SidebarOptionItem title="Threads" Icon={InsertCommentIcon} />
      <SidebarOptionItem title="Mentions & reactions" Icon={InboxIcon} />
      <SidebarOptionItem title="Saved items" Icon={DraftsIcon} />
      <SidebarOptionItem title="Channel browser" Icon={BookmarkBorderIcon} />
      <SidebarOptionItem title="People & user groups" Icon={PeopleAltIcon} />
      <SidebarOptionItem title="Apps" Icon={AppsIcon} />
      <SidebarOptionItem title="File browser" Icon={FileCopyIcon} />
      <SidebarOptionItem title="Show less" Icon={ExpandLessIcon} />
      <StyledSeparator />
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

const StyledSeparator = styled("hr")({
  margin: "0.75rem 0",
  border: "1px solid var(--sidebar-color)",
});

export default SidebarOptions;
