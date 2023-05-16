import "App.css";

import React, { useState, useEffect } from "react";

import LeftSidebar from "components/LeftSidebar/LeftSidebar";
import MainContent from "components/MainContent/MainContent";
import RightSidebar from "components/RightSidebar/RightSidebar";

export interface DefectData {
  defectID: number;
  recipeStateID: number;
  vibrationObjectID: number;
  defectName: string;
  assetName: string;
  percentComplete: number;
  percentBurnt: number;
  percentUnknown: number;
  likelihood: number;
}

function getMasterChatList(): DefectData[] {
  return [
    {
      defectID: 1,
      recipeStateID: 1,
      vibrationObjectID: 1,
      defectName: "Test defect",
      assetName: "Test asset",
      percentComplete: 26,
      percentBurnt: 35,
      percentUnknown: 39,
      likelihood: 3,
    },
    {
      defectID: 2,
      recipeStateID: 1,
      vibrationObjectID: 1,
      defectName: "Test defect 2",
      assetName: "Test asset 2",
      percentComplete: 26,
      percentBurnt: 35,
      percentUnknown: 39,
      likelihood: 1,
    },
  ];
}

function App() {
  const [currDefectID, setDefectID] = useState(0);

  return (
    <div className="App">
      <LeftSidebar defectList={getMasterChatList()} currDefectID={currDefectID} setDefectID={setDefectID} />
      <MainContent />
      <RightSidebar chatDefectID={currDefectID.toString()} userID="0" />
    </div>
  );
}

export default App;
