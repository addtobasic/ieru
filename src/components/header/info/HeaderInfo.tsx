import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { styled } from "@mui/material/styles";
import HeaderInfoAvatar from "./HeaderInfoAvatar";

const HeaderInfo = () => (
  <StyledContainer>
    <HeaderInfoAvatar />
    <AccessTimeIcon />
  </StyledContainer>
);

const StyledContainer = styled("div")({
  flex: "0.3",
  display: "flex",
  alignItems: "center",
  marginLeft: "1.25rem",

  svg: {
    marginLeft: "auto",
    marginRight: "1.75rem",
  },
});

export default HeaderInfo;
