import { Avatar } from "@mui/material";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";

const SidebarInfoAvatar = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <StyledAvatar onClick={signOut} src={user?.photoURL} alt="avatar">
      {user?.displayName[0]}
    </StyledAvatar>
  );
};

const StyledAvatar = styled(Avatar)({
  cursor: "pointer",
  textTransform: "capitalize",

  "&:hover": {
    opacity: 0.8,
  },
});

export default SidebarInfoAvatar;
