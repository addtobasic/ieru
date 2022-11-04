import HelpOutlinedIcon from "@material-ui/icons/HelpOutline";
import { styled } from "@mui/material/styles";

const HeaderOptions = () => (
  <StyledContainer>
    <HelpOutlinedIcon />
  </StyledContainer>
);

const StyledContainer = styled("div")({
  display: "flex",
  flex: "0.3",
  alignItems: "flex-end",

  svg: {
    maginLeft: "auto",
    marginRight: "20px",
  },
});

export default HeaderOptions;
