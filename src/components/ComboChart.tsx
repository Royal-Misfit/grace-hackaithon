// @ts-nocheck

import React, { Component } from "react";
import Highcharts from "highcharts";
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Tooltip, ColumnSeries, LineSeries } from "react-jsx-highcharts";

class ComboChart extends Component {
  static displayName = ComboChart.name;

  constructor(props: any) {
    super(props);

    this.state = {
      IsModalOpen: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    //console.log(this.props);
  }

  handleOpen = () => {
    this.setState({ IsModalOpen: true });
    //console.log("clicked");
  };

  handleClose = (isOpen: any) => {
    this.setState({ IsModalOpen: isOpen });
  };

  render() {
    return (
      <HighchartsChart
        plotOptions={{
          series: {
            cursor: "pointer",
            point: {
              events: {
                click: (function (component) {
                  return function () {
                    component.handleOpen();
                  };
                })(this),
              },
            },
          },
          line: {
            marker: {
              enabled: false,
            },
            enableMouseTracking: false,
          },
        }}
      >
        <Chart borderWidth={0} />

        <Title style={{ fontSize: "13px", fontWeight: "bold" }}>{this.props.title}</Title>

        <Tooltip valueSuffix=" ips" valueDecimals={4} />

        <XAxis categories={this.props.colSeries.map((x) => x.name)} />

        <YAxis>
          <YAxis.Title>Vibration Amplitude (ips)</YAxis.Title>
          <ColumnSeries name={"Amplitude"} data={this.props.colSeries} />
          <LineSeries color="#F0AD4E" step="true" data={this.props.warningSeries} />
          <LineSeries color="#B30101" step="true" data={this.props.dangerSeries} />
        </YAxis>
      </HighchartsChart>
    );
  }
}

export default withHighcharts(ComboChart, Highcharts);
