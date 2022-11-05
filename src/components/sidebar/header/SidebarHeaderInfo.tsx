import FiberMenualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";

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
  flex: 1,
});

const StyledGroupTitle = styled("h2")({
  fontSize: "1rem",
  fontWeight: 900,
  marginBottom: "0.25rem",
});

const StyledDisplayName = styled("h3")({
  display: "flex",
  alignItems: "center",
  fontSize: "0.9rem",
  fontWeight: 400,
});

const StyledStatus = styled(FiberMenualRecordIcon)({
  "&&&": {
    fontSize: "0.875rem",
    marginTop: "1px",
    margintRight: "2px",
    color: "green",
  },
});

export default SidebarHeaderInfo;
