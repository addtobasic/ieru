import { Avatar } from "@mui/material";
import { useStore } from "stores/store";
import { styled } from "@mui/material/styles";

const SidebarInfoAvatar = () => {
  const { user } = useStore().userStore;

  return (
    <StyledAvatar src={user?.photoURL} alt="avatar">
      {user?.displayName[0]}
    </StyledAvatar>
  );
};

const StyledAvatar = styled(Avatar)({
  cursor: "pointer",
  textTransform: "capitalize",
});

export default SidebarInfoAvatar;
