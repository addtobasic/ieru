import { Button } from "@mui/material";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";

const LoginSignInButton = () => {
  const { signIn } = useStore().userStore;

  return <StyledButton onClick={signIn}>Sign in with Google</StyledButton>;
};

export default LoginSignInButton;

const StyledButton = styled(Button)({
  "&&&": {
    marginTop: "1rem",
    textTransform: "inherit",
    backgroundColor: "var(--ieru-i-color)",
    color: "white",
  },
});
