import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import "App.css";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import ChatMessageEntry from "./ChatMessageEntry";
import Typography from "@mui/material/Typography";

const testMessages = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
];

interface RightSidebarProps {
  chatDefectID: string;
  userID: string;
}

interface ChatMessage {
  userID: number;
  username: string;
  timestamp: number;
  content: string;
  figureID: number;
}

function addChatContent(content: string, userID: number) {}

function getChatDetail(chatDefectID: number, userID: number): ChatMessage[] {
  return [];
}

const RightSidebar: FunctionComponent<RightSidebarProps> = (props): JSX.Element => {
  let { chatDefectID, userID } = useParams();

  chatDefectID ??= props.chatDefectID;
  userID ??= props.userID;

  return (
    <div className="red-border right-sidebar">
      <Paper elevation={2} sx={{ display: "flex", flexDirection: "column", margin: "1em", alignItems: "left", width: "25vw", border: "1px #ccc solid" }}>
        <Typography align="center"></Typography>
        <List
          sx={{
            overflow: "auto",
            maxHeight: "70vh",
          }}
        >
          {testMessages.map((m, i) => (
            <ChatMessageEntry key={i} content={m} userID={0} chatHistoryID={0} chatDefectID={0} timestamp={0} />
          ))}
        </List>

        <Divider />
        <div style={{ display: "flex", margin: "1em" }}>
          <TextField multiline maxRows={5} variant="standard" sx={{ ml: 1, flex: 1 }} placeholder={`Defect ID: ${JSON.stringify(chatDefectID)}`} />
          <Divider orientation="vertical" />
          <IconButton color="primary" sx={{ p: "10px" }}>
            <SendIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

export default RightSidebar;
