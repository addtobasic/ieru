import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useStore } from "stores/store";

const LoginSignInButton = () => {
  const { signIn } = useStore().userStore;

  return <StyledButton onClick={signIn}>Sign in with Google</StyledButton>;
};

export default LoginSignInButton;

const StyledButton = styled(Button)({
  "&&&": {
    marginTop: "1rem",
    color: "white",
    textTransform: "inherit",
    backgroundColor: "var(--ieru-color)",
  },
});
