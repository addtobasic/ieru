import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
import * as React from "react";
import { FC } from "react";

interface ChatMessagesItemMenuProps {
  isAnonym: boolean;
  handleChangeAnonym: () => void;
  isLoginUser: boolean;
  handleMenuClose: any;
  handleDeleteMessage: () => void;
}

const ChatMessagesItemMenu: FC<ChatMessagesItemMenuProps> = ({
  isAnonym,
  handleChangeAnonym,
  isLoginUser,
  handleMenuClose,
  handleDeleteMessage,
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
            <MenuItem>
              <ListItemText>チャットの修正</ListItemText>
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleDeleteMessage}>
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
