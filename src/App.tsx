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

const testDefectList = [
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

function App() {
  const [currDefectID, setDefectID] = useState(0);

  const [defectList, setDefectList] = useState<DefectData[]>([]);

  async function getMasterChatList() {
    try {
      const response = await fetch("https://cg-rc-develop.azurewebsites.net/api/GetMasterChatList");
      const json = await response.json();

      setDefectList(
        json.map((entry: any): DefectData => {
          return {
            defectID: entry.ChatDefectID,
            recipeStateID: entry.RecipeStateID,
            vibrationObjectID: entry.VibrationObjectID,
            defectName: entry.DefectName,
            assetName: entry.AssetName,
            percentComplete: entry.PercentComplete,
            percentBurnt: entry.PercentBurnt,
            percentUnknown: entry.PercentUnknown,
            likelihood: entry.Likelihood,
          };
        })
      );
    } catch (error) {
      console.log("ERROR IN GETTING MASTER CHAT LIST");
      console.log(error);
    }
    return;
  }

  async function createDefect(data: DefectData) {}

  useEffect((): void => {
    getMasterChatList();
  }, []);

  return (
    <div className="App">
      <LeftSidebar 
        defectList={defectList} 
        currDefectID={currDefectID} 
        setDefectID={setDefectID} 
        createDefect={createDefect}
      />
      <MainContent defectData={defectList.find(e => e.defectID === currDefectID)!!}/>
      <RightSidebar chatDefectID={currDefectID.toString()} userID="0" />
    </div>
  );
}

export default App;
