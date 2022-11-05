import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const HeaderSearch = () => (
  <StyledContainer>
    <SearchIcon />
    <StyledInput
      size="small"
      variant="filled"
      label="Search in MartsTech"
      InputProps={{ disableUnderline: true }}
    />
  </StyledContainer>
);

const StyledContainer = styled("div")({
  display: "flex",
  flex: "0.4",
  alignItems: "center",
  padding: "0 3rem",
  borderRadius: "6px",
  border: "1px gray solid",
  backgroundColor: "var(--header-search-color)",
  color: "gray",
  opacity: 1,
  textAlign: "center",
});

const StyledInput = styled(TextField)({
  "&&&": {
    minWidth: "100%",

    "> label": {
      color: "gray",
    },

    "> div > input": {
      backgroundColor: "var(--header-search-color)",
      color: "white",
      border: "none",
    },
  },
});

export default HeaderSearch;
