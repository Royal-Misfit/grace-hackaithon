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

        {/* @ts-ignore */}
        <Title style={{ fontSize: "16px", fontWeight: "bold" }}>{this.props.Title}</Title>

        <Tooltip valueSuffix=" ips" valueDecimals={4} />

        {/* @ts-ignore */}
        <XAxis categories={this.props.ColSeries.map((x) => x.name)} />

        <YAxis>
          <YAxis.Title>Vibration Amplitude (ips)</YAxis.Title>
          {/* @ts-ignore */}
          <ColumnSeries name={"Amplitude"} data={this.props.ColSeries} />
          {/* @ts-ignore */}
          <LineSeries color="#F0AD4E" step="true" data={this.props.WarningSeries} />
          {/* @ts-ignore */}
          <LineSeries color="#B30101" step="true" data={this.props.DangerSeries} />
        </YAxis>
      </HighchartsChart>
    );
  }
}

export default withHighcharts(ComboChart, Highcharts);
