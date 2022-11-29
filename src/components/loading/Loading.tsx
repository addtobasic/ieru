import { NoSsr } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import BarLoader from "react-spinners/BarLoader";

const Loading = () => (
  <NoSsr>
    <StyledWrapper>
      <StyledContainer>
        <StyledImageContainer>
          <Image
            src="/images/logo.svg"
            height={150}
            width={250}
            objectFit="contain"
            alt="logo"
          />
        </StyledImageContainer>
        <BarLoader color="var(--ieru-color)" width={180} />
      </StyledContainer>
    </StyledWrapper>
  </NoSsr>
);

const StyledWrapper = styled("div")({
  "": {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
});

const StyledContainer = styled("div")({
  "": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6.25rem",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "0.75rem",
    boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)",
  },
});

const StyledImageContainer = styled("div")({
  "": {
    marginBottom: "1rem",
  },
});

export default Loading;
