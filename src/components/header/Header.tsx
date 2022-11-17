import { styled } from "@mui/material/styles";

import HeaderInfo from "./info/HeaderInfo";
import HeaderOptions from "./options/HeaderOptions";

const Header = () => (
  <StyledHeader>
    <HeaderInfo />
    <HeaderOptions />
  </StyledHeader>
);

const StyledHeader = styled("header")({
  "": {
    position: "sticky",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0.75rem 0",
    color: "white",
    backgroundColor: "var(--ieru-color)",
  },
});

export default Header;
