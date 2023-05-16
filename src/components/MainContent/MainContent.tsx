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
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props: LinearProgressProps & { ys: number[] }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        {props.ys.map((y, i) => (
          <LinearProgress variant="determinate" sx={{ height: 6 }} {...props} value={Math.min(y, 100)} color={y < 50 ? "primary" : y < 75 ? "warning" : "error"} />
        ))}
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(Math.max(...props.ys))}%`}</Typography>
      </Box>
    </Box>
  );
}

const MainContent: FunctionComponent = (): JSX.Element => {
  return (
    <div className="red-border main-content ">
      <TestChart />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div style={{ width: "30%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
            <ErrorIcon color="error" sx={{ mr: 1 }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Axial</Typography>
          </div>
          <Box sx={{ width: "35%" }}>
            <LinearProgressWithLabel ys={[62, 25, 37, 45, 95, 75]} />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.</Typography>
          <TestChart />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div style={{ width: "30%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
            <WarningIcon color="warning" sx={{ mr: 1 }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Horizontal</Typography>
          </div>
          <Box sx={{ width: "35%" }}>
            <LinearProgressWithLabel ys={[88, 73, 127, 25, 65, 44]} />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.</Typography>
          <TestChart />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div style={{ width: "30%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
            <PriorityHighIcon color="primary" sx={{ mr: 1 }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Vertical</Typography>
          </div>
          <Box sx={{ width: "35%" }}>
            <LinearProgressWithLabel ys={[55, 20, 4, 16, 12, 4]} />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.</Typography>
          <TestChart />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div style={{ width: "30%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
            <CheckIcon color="success" sx={{ mr: 1 }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Vertical</Typography>
          </div>
          <Box sx={{ width: "35%" }}>
            <Typography sx={{ color: "text.secondary" }}>sit amet egestas eros, vitae egestas </Typography>
            {/* <LinearProgressWithLabel ys={[5, 2, 12, 11, 17, 8]} /> */}
          </Box>
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
