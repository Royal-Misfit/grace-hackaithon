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
import DefectEntry from "./DefectEntry";
import { DefectData } from "App";

interface LeftSidebarProps {
  defectList: DefectData[];
  currDefectID: number;
  setDefectID: Function;
}

const LeftSidebar: FunctionComponent<LeftSidebarProps> = (props): JSX.Element => {
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
            <Chip label="8 unresolved" color="warning" variant="outlined" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
        </AccordionDetails>

        <List>
          {props.defectList.map((e, i) => (
            <DefectEntry key={i} defectData={e} selected={e.defectID === props.currDefectID} setDefectID={props.setDefectID} />
          ))}
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
