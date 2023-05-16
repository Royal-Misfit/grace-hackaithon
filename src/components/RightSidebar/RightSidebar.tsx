import { FunctionComponent } from "react";
import "App.css";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import ChatMessageEntry from "./ChatMessageEntry";

const testMessages = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
];

const RightSidebar: FunctionComponent = (): JSX.Element => {
  return (
    <div
      className="red-border right-sidebar"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={2} sx={{ display: "flex", flexDirection: "column", margin: "1em", alignItems: "left", width: "25vw", border: "1px #ccc solid" }}>
        <List
          sx={{
            overflow: "auto",
            maxHeight: "70vh",
          }}
        >
          {testMessages.map((m) => (
            <ChatMessageEntry content={m} userID={0} chatHistoryID={0} chatDefectID={0} timestamp={0} />
          ))}
        </List>

        <Divider />
        <div style={{ display: "flex", margin: "1em" }}>
          <TextField multiline maxRows={5} variant="standard" sx={{ ml: 1, flex: 1 }} placeholder="Prompt" />
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
