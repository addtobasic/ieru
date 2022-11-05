import Image from "next/image";
import { styled } from "@mui/material/styles";
import LoginSignInButton from "./LoginSignInButton";

const Login = () => (
  <StyledWrapper>
    <StyledContainer>
      <Image
        src="/images/logo.svg"
        height={150}
        width={250}
        objectFit="contain"
        alt="logo"
      />
      <StyledTitle>Sign in now</StyledTitle>
      <LoginSignInButton />
    </StyledContainer>
  </StyledWrapper>
);

const StyledWrapper = styled("div")({
  backgroundColor: "#f8f8f8",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const StyledContainer = styled("div")({
  padding: "6.25rem",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
});

const StyledTitle = styled("h1")({});

export default Login;
