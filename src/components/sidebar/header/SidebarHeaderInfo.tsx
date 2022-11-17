import FiberMenualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { styled } from "@mui/material/styles";

import { useStore } from "stores/store";

const SidebarHeaderInfo = () => {
  const { user } = useStore().userStore;

  return (
    <StyledContainer>
      <StyledGroupTitle>test group</StyledGroupTitle>
      <StyledDisplayName>
        <StyledStatus />
        {user?.displayName}
      </StyledDisplayName>
    </StyledContainer>
  );
};
const StyledContainer = styled("div")({
  "": {
    flex: 1,
  },
});

const StyledGroupTitle = styled("h2")({
  "": {
    marginBottom: "0.25rem",
    fontSize: "1rem",
    fontWeight: 900,
  },
});

const StyledDisplayName = styled("h3")({
  "": {
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: 400,
  },
});

const StyledStatus = styled(FiberMenualRecordIcon)({
  "&&&": {
    marginTop: "1px",
    fontSize: "0.875rem",
    color: "green",
    margintRight: "2px",
  },
});

export default SidebarHeaderInfo;
