import DeleteIcon from "@mui/icons-material/Delete";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { FC } from "react";

interface ChatMessagesItemMenuProps {
  isAnonym: boolean;
  handleChangeAnonym: () => void;
  isLoginUser: boolean;
  handleMenuClose: any;
  handleDeleteMessage: () => void;
  handleChangeGood: () => void;
  handleChangeBad: () => void;
}

const ChatMessagesItemMenu: FC<ChatMessagesItemMenuProps> = ({
  isAnonym,
  handleChangeAnonym,
  isLoginUser,
  handleMenuClose,
  handleDeleteMessage,
  handleChangeGood,
  handleChangeBad,
}) => (
  <Paper sx={{ width: 200, maxWidth: "100%" }}>
    <ClickAwayListener onClickAway={handleMenuClose}>
      <MenuList>
        <MenuItem onClick={handleChangeGood}>
          <ListItemText>すごくいいね</ListItemText>
          <ListItemIcon>
            <ThumbUpAltIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleChangeBad}>
          <ListItemText>よくないね</ListItemText>
          <ListItemIcon>
            <ThumbDownAltIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        {isLoginUser && (
          <>
            <Divider />
            <MenuItem onClick={handleChangeAnonym}>
              <ListItemText>{isAnonym ? "顕名化" : "匿名化"}</ListItemText>
              <ListItemIcon>
                {isAnonym ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleDeleteMessage}>
              <ListItemText>メッセージの削除</ListItemText>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
          </>
        )}
      </MenuList>
    </ClickAwayListener>
  </Paper>
);

export default ChatMessagesItemMenu;
