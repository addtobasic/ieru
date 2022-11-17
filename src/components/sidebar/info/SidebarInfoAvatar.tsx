import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useStore } from "stores/store";

const SidebarInfoAvatar = () => {
  const { user } = useStore().userStore;

  return (
    <StyledAvatar src={user?.photoURL} alt="avatar">
      {user?.displayName[0]}
    </StyledAvatar>
  );
};

const StyledAvatar = styled(Avatar)({
  "": {
    textTransform: "capitalize",
    cursor: "pointer",
  },
});

export default SidebarInfoAvatar;
