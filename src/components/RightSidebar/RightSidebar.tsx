import { FunctionComponent, useState, useEffect } from "react";
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
  userID: string;
  username: string;
  timestamp: string;
  content: string;
  figureID: number;
}

const RightSidebar: FunctionComponent<RightSidebarProps> = (props): JSX.Element => {
  const [msgContent, setMsgContent] = useState("");
  const [messageList, setMessageList] = useState<ChatMessage[]>([]);

  let { chatDefectID, userID } = useParams();

  chatDefectID ??= props.chatDefectID;
  userID ??= props.userID;

  async function getChatDetail(chatDefectID: number, userID: number) {
    try {
      const response = await fetch(`https://cg-rc-develop.azurewebsites.net/api/GetChatDetail?chatDefectID=${chatDefectID}&userID=${userID}`, {
        method: "POST",
      });
      const json = await response.json();
      setMessageList(
        json.map((entry: any): ChatMessage => {
          return {
            userID: entry.ChatUserID,
            username: entry.ChatUserName,
            timestamp: entry.ChatTime,
            content: entry.ChatContent,
            figureID: entry.FigureTypeID,
          };
        })
      );
    } catch (error) {
      console.log("ERROR IN GETTING MASTER CHAT LIST");
      console.log(error);
    }
    return [];
  }

  async function addMessage(content: string, userID: string) {
    const newMessage: ChatMessage = {
      userID: userID,
      username: "test",
      content: content,
      figureID: 0,
      timestamp: "2",
    };
    // TODO: CURRENTLY USING DEFECTID = 1
    const params = `chatDefectID=${1}&userID=${newMessage.userID}&chatContent=${encodeURIComponent(newMessage.content)}&figureTypeID=${newMessage.figureID}`;

    await fetch(`https://cg-rc-develop.azurewebsites.net/api/AddChatContent?` + params, {
      method: "POST",
    }).then((response) => {
      setMessageList(messageList.concat([newMessage]));
    });
  }

  useEffect((): void => {
    getChatDetail(1, 1);
  }, []);

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
          {messageList.map((m, i) => (
            <ChatMessageEntry key={i} content={m.content} userID={m.userID} figureID={m.figureID} username={m.username} timestamp={m.timestamp} />
          ))}
        </List>

        <Divider />
        <div style={{ display: "flex", margin: "1em" }}>
          <TextField
            multiline
            value={msgContent}
            onChange={(event) => {
              setMsgContent(event.target.value);
            }}
            maxRows={5}
            variant="standard"
            sx={{ ml: 1, flex: 1 }}
            placeholder={`Defect ID: ${JSON.stringify(chatDefectID)}`}
          />
          <Divider orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            onClick={() => {
              addMessage(msgContent, userID ?? "1");
            }}
          >
            <SendIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

export default RightSidebar;
