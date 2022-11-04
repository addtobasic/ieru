import { NoSsr } from "@material-ui/core";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import { styled } from "@mui/material/styles";

const Loading = () => (
  <NoSsr>
    <StyledWrapper>
      <StyledContainer>
        <StyledImageContainer>
          <Image
            src="/images/logo.svg"
            height={200}
            width={200}
            objectFit="contain"
            alt="logo"
          />
        </StyledImageContainer>

        <ClipLoader color="purple" size={60} />
      </StyledContainer>
    </StyledWrapper>
  </NoSsr>
);

const StyledWrapper = styled("div")({
  display: "grid",
  height: "100vh",
  placeItems: "center",
});

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "6.25rem",
});

const StyledImageContainer = styled("div")({
  marginBottom: "1rem",
});

export default Loading;
