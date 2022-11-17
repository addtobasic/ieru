import { styled } from "@mui/material/styles";

import HeaderInfo from "./info/HeaderInfo";
import HeaderOptions from "./options/HeaderOptions";
import HeaderSearch from "./search/HeaderSearch";

const Header = () => (
  <StyledHeader>
    <HeaderInfo />
    <HeaderSearch />
    <HeaderOptions />
  </StyledHeader>
);

const StyledHeader = styled("header")({
  position: "sticky",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0.75rem 0",
  backgroundColor: "var(--ieru-color)",
  color: "white",
});

export default Header;
