import { FunctionComponent } from "react";
import "App.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

const LeftSidebar: FunctionComponent = (): JSX.Element => {
  return (
    <div className="left-sidebar">
      <Accordion
        style={{
          backgroundColor: "#eee",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>Active issues</strong>
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

      <Accordion
        style={{
          backgroundColor: "#eee",
        }}
      >
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
              <Chip label="Notice" color="primary" />
            </ListItemButton>
          </ListItem>
        </List>
      </Accordion>

      <Accordion
        style={{
          backgroundColor: "#eee",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>Some other thing</strong>
            <Chip label="bogus" color="error" variant="outlined" />
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
  );
};

export default LeftSidebar;
