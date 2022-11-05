import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";

const ChatHeaderInfo = () => {
  const { selectedChannel } = useStore().channelStore;

  return (
    <StyledContainer>
      <StyledInfo>
        <StyledName>#{selectedChannel?.name}</StyledName>
        <StarBorderOutlinedIcon />
      </StyledInfo>
    </StyledContainer>
  );
};

export default observer(ChatHeaderInfo);

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StyledInfo = styled("div")({
  display: "flex",
  textTransform: "lowercase",
  marginRight: "1px",
  svg: {
    marginLeft: "0.5rem",
    fontSize: "1.2rem",
  },
});

const StyledName = styled.strong``;
