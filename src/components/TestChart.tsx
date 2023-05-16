// @ts-nocheck
import React from "react";
import ComboChart from "./ComboChart";

export default function TestChart(props: any) {
  return (
    <ComboChart
      sx={{ display: { xs: "flex", md: "flex" } }}
      // ColSeries={props.xAmpData.map((item) => {
      //   return {
      //     y: item.ComputedValue,
      //     name: item.BandDisplayName,
      //     color: Opacity(GetSeverityStatusColor(item.AlarmTypeID, props.alarmStatusInfo).StatusColor, props.opacity),
      //   };
      // })}
      ColSeries={[
        {
          y: 0.1434326171875,
          name: "Overall",
          color: "#FFC10780",
        },
        {
          y: 0.08453369140625,
          name: "Sub-Synchronous",
          color: "#D7040480",
        },
        {
          y: 0.09735107421875,
          name: "1x RPM",
          color: "#FFC10780",
        },
        {
          y: 0.0384521484375,
          name: "2x RPM",
          color: "#A9A9A980",
        },
        {
          y: 0.030517578125,
          name: "3x RPM",
          color: "#FFC10780",
        },
        {
          y: 0.03692626953125,
          name: "Bearing",
          color: "#FFC10780",
        },
      ]}
      WarningSeries={[
        [-0.49, 0.1],
        [0.5, 0.02],
        [1.5, 0.09],
        [2.5, 0.04],
        [3.5, 0.03],
        [4.5, 0.025],
        [5.49, 0.025],
      ]}
      DangerSeries={[
        [-0.49, 0.325],
        [0.5, 0.065],
        [1.5, 0.2925],
        [2.5, 0.13],
        [3.5, 0.0975],
        [4.5, 0.08125],
        [5.49, 0.08125],
      ]}
      Title="Axial"
      WarningIPS={0.1}
      DangerIPS={0.3}
      ShowSpinner={false}
      key={props.nodeID + "-x"}
    />
  );
}
