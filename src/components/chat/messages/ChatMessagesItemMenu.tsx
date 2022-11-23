import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { FC } from "react";

interface ChatMessagesItemMenuProps {
  isLoginUser: boolean;
  handleMenuClose: any;
}

const ChatMessagesItemMenu: FC<ChatMessagesItemMenuProps> = ({
  isLoginUser,
  handleMenuClose,
}) => (
  <Paper sx={{ width: 200, maxWidth: "100%" }}>
    <ClickAwayListener onClickAway={handleMenuClose}>
      <MenuList>
        <MenuItem>
          <ListItemText>いいね</ListItemText>
          <ListItemIcon>
            <ThumbUpAltIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemText>よくないね</ListItemText>
          <ListItemIcon>
            <ThumbDownAltIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        {isLoginUser && (
          <>
            <Divider />
            <MenuItem>
              <ListItemText>匿名化</ListItemText>
              <ListItemIcon>
                <VisibilityOffIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemText>チャットの修正</ListItemText>
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemText>チャットの削除</ListItemText>
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
