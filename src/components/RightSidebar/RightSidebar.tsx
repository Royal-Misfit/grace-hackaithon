import { FunctionComponent } from "react";
import "App.css";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ChatMessageEntry from "./ChatMessageEntry";

const RightSidebar: FunctionComponent = (): JSX.Element => {
  return (
    <div className="red-border right-sidebar">
      <div
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
            <ChatMessageEntry content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <ChatMessageEntry content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
            <ChatMessageEntry content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
            <ChatMessageEntry content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>

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
    </div>
  );
};

export default RightSidebar;
