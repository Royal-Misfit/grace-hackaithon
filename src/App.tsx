import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import InputBase from "@mui/material/InputBase";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from '@mui/icons-material/Check';

import TestChart from "./components/TestChart";

function App() {
  return (
    <div className="App">
      <div className="left-sidebar">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong>Active defects</strong>
              <Chip label="6 unresolved" color="warning" variant="outlined" />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </AccordionDetails>

          <List>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Problem 1" secondary="hdasijhd" />
                <Chip label="Severe" color="error" />
              </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Problem 2" secondary="dakjd fdjsflksdjflk sf fdufp" />
                <Chip label="Medium" color="warning" />
              </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Problem 3" secondary="flkdsj fidshfoiw rwem ofsdogpjk" />
                <Chip label="Medium" color="warning" />
              </ListItemButton>
            </ListItem>
          </List>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong>Something else</strong>
              <Chip label="i dunno" color="primary" variant="outlined" />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </AccordionDetails>

          <List>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Problem 1" secondary="hdasijhd" />
                <Chip label="Severe" color="error" />
              </ListItemButton>
            </ListItem>
          </List>
        </Accordion>
      </div>
      <div className="red-border main-content ">
        <TestChart />
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ErrorIcon color="error" sx={{ mr: 1 }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Axial</Typography>
            <Typography sx={{ color: "text.secondary" }}>i dunno</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <WarningIcon color="warning" sx={{ mr: 1 }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Horizontal</Typography>
            <Typography sx={{ color: "text.secondary" }}>ml kkqn wekwnqewk</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <PriorityHighIcon color="info" sx={{ mr: 1 }}  />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Vertical</Typography>
            <Typography sx={{ color: "text.secondary" }}>fligfnjgsgs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <CheckIcon color="success"  sx={{ mr: 1 }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Something else</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.</Typography>
          </AccordionDetails>
        </Accordion>

        {/* <TestChart /> */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni possimus commodi eius a tempora quae, nulla iste dolor soluta aliquam aperiam aspernatur cupiditate illum molestias itaque quas nemo incidunt.</p>
      </div>

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
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </ListItem>

              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </ListItem>

              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </ListItem>

              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </ListItem>
            </List>

            <Divider />
            <div style={{ display: "flex", margin: "1em" }}>
              <TextField multiline maxRows={5} variant="standard" sx={{ ml: 1, flex: 1 }} placeholder="Prompt" />
              <Divider sx={{}} orientation="vertical" />
              <IconButton color="primary" sx={{ p: "10px" }}>
                <SendIcon />
              </IconButton>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default App;
