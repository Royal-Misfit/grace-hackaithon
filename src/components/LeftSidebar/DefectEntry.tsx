import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DefectData } from "App";
import { FunctionComponent } from "react";

interface DefectEntryProps {
  defectData: DefectData;
  selected: boolean;
  setDefectID: Function;
}

function getDefectDetail(defectID: number): any {
  return {
    label: "Problem " + defectID,
    description: "sdkj dfmnsdfn kg fgjfd",
    severity: Math.floor(Math.random() * 4 + 0.2),
  };
}

const severityLevels = Object.freeze({
  0: <></>,
  4: <Chip label="Notice" color="primary" />,
  3: <Chip label="Medium" color="warning" />,
  2: <Chip label="Severe" color="error" />,
});


const DefectEntry: FunctionComponent<DefectEntryProps> = ({ defectData, selected, setDefectID }): JSX.Element => {
  // const defectData = getDefectDetail(props.defectData.defectID);

  return (
    <>
      <Divider />
      <ListItem disablePadding style={selected ? { backgroundColor: "#D0DCE5" } : {}}>
        <ListItemButton selected={selected} onClick={() => setDefectID(defectData.defectID)}>
          <ListItemText primary={defectData.assetName} secondary={defectData.defectName} />

          {/* @ts-ignore */}
          {severityLevels[defectData.likelihood]}
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default DefectEntry;
