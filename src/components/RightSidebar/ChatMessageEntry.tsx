import React, { FunctionComponent } from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

interface ChatMessageEntryProps {
  content: string;
  userID: string;
  username: string;
  figureID: number;
  timestamp: string;
}

const ChatMessageEntry: FunctionComponent<ChatMessageEntryProps> = (props): JSX.Element => {
  return (
    <>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {props.userID == "0" ? (
            <Avatar src="https://static.vecteezy.com/system/resources/previews/021/059/827/original/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" />
          ) : (
            <Avatar>
              {props.username
                .split(" ")
                .map((s: string): string => s.slice(0, 1))
                .join("")}
            </Avatar>
          )}
        </ListItemAvatar>
        <ListItemText primary={<span style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{props.content}</span>} />
      </ListItem>
    </>
  );
};

export default ChatMessageEntry;
