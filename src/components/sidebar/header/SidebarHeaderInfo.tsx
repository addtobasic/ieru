import { styled } from "@mui/material/styles";

const SidebarHeaderInfo = () => <StyledGroupTitle>SecHack365</StyledGroupTitle>;

const StyledGroupTitle = styled("div")(({ theme }) => ({
  "": {
    fontSize: "1.1rem",
    fontWeight: 900,
    padding: theme.spacing(0, 3),
  },
}));

export default SidebarHeaderInfo;
