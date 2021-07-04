import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          value={dataPoints.value}
          label={dataPoints.label}
          key={dataPoints.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
