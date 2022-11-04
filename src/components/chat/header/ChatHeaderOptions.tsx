import { styled } from "@mui/material/styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const ChatHeaderOptions = () => (
  <StyledContainer>
    <StyledOption>
      <InfoOutlinedIcon /> Details
    </StyledOption>
  </StyledContainer>
);

export default ChatHeaderOptions;

const StyledContainer = styled("div")({});

const StyledOption = styled("p")({
  display: "flex",
  alignItems: "center",
  fontSize: "0.9rem",

  svg: {
    marginRight: "0.25rem",
    fontSize: "1rem",
  },
});
