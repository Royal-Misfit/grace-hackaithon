import { FunctionComponent } from "react";
import "App.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";

import TestChart from "components/TestChart";

const MainContent: FunctionComponent = (): JSX.Element => {
  return (
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
          <TestChart />
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
          <TestChart />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <PriorityHighIcon color="info" sx={{ mr: 1 }} />
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Vertical</Typography>
          <Typography sx={{ color: "text.secondary" }}>fligfnjgsgs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.</Typography>
          <TestChart />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CheckIcon color="success" sx={{ mr: 1 }} />
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Something else</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.</Typography>
          <TestChart />
        </AccordionDetails>
      </Accordion>

      {/* <TestChart /> */}
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni possimus commodi eius a tempora quae, nulla iste dolor soluta aliquam aperiam aspernatur cupiditate illum molestias itaque quas nemo incidunt.</p>
    </div>
  );
};

export default MainContent;