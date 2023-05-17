import { FunctionComponent, useState, useEffect, useRef } from "react";
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

import executePrompt from "scripts/PromptEngine";

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
  const chatBoxRef = useRef(null);

  let { chatDefectID, userID } = useParams();

  chatDefectID ??= props.chatDefectID;
  userID ??= props.userID;

  async function getChatDetail(chatDefectID: string, userID: number) {
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
      scrollToLatest();
    } catch (error) {
      console.log("ERROR IN GETTING CHAT");
      console.log(error);
    }
    return [];
  }

  function scrollToLatest() {
    console.log("SCROLL");
    // @ts-ignore
    chatBoxRef.current.scrollIntoView({ behavior: "smooth" });
  }

  async function addMessage(content: string, userID: string) {
    setMsgContent("");

    const newMessage: ChatMessage = {
      userID: userID,
      username: "test",
      content: content,
      figureID: 0,
      timestamp: "2",
    };
    // TODO: CURRENTLY USING DEFECTID
    const params = `chatDefectID=${chatDefectID}&userID=${newMessage.userID}&chatContent=${encodeURIComponent(newMessage.content)}&figureTypeID=${newMessage.figureID}`;

    try {
      await fetch(`https://cg-rc-develop.azurewebsites.net/api/AddChatContent?` + params, {
        method: "POST",
      }).then((response) => {
        getChatDetail(chatDefectID!!, 1);
        executePrompt(chatDefectID!!, () => {
          getChatDetail(chatDefectID!!, 1);
        });
      });
    } catch (ex) {
      console.log("ERROR IN ADDING MESSAGE");
      console.log(ex);
    }
  }

  useEffect(() => {
    scrollToLatest();
  }, [messageList])

  useEffect(() => {
    setMessageList([]);
    getChatDetail(chatDefectID!!, 1);
    const timer = setTimeout(() => {
      scrollToLatest();
    }, 500);
    return () => clearTimeout(timer);
  }, [chatDefectID]);

  return (
    <div className="red-border right-sidebar">
      <Paper
        elevation={2}
        // style={{ border: "1px green dashed" }}
        sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "left", border: "1px #ccc solid" }}
      >
        <Typography align="center"></Typography>
        <List
          sx={{
            overflowY: "auto",
            maxHeight: "70vh",
          }}
        >
          {messageList.map((m, i) => (
            <ChatMessageEntry key={i} content={m.content} userID={m.userID} figureID={m.figureID} username={m.username} timestamp={m.timestamp} />
          ))}
          <div ref={chatBoxRef}></div>
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
            placeholder={`Defect ID: ${chatDefectID}`}
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
