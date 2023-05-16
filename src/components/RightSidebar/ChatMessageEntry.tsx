import React, { FunctionComponent } from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

interface ChatMessageEntryProps {
  content: string;
  userID: number;
  chatHistoryID: number;
  chatDefectID: number;
  timestamp: number;
}

const ChatMessageEntry: FunctionComponent<ChatMessageEntryProps> = (props): JSX.Element => {
  return (
    <>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={props.content} />
      </ListItem>
    </>
  );
};

export default ChatMessageEntry;
