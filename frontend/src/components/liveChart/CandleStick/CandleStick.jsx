import React, { useState } from "react";
import Chart from "react-apexcharts";


function CandelStickChart({stockValues}) {

  const parseValues = stockValues.map(value => [
    value.datetime,
    parseFloat(value.open), // Convert string to a numeric value (assuming 'open' is always a number)
    parseFloat(value.high),
    parseFloat(value.low),
    parseFloat(value.close)
  ]);

  // console.log(parseValues)

  const options = {
      chart: {
        id: "candlestick-chart",
      },
      xaxis: {
        type: 'datetime',
      },
    }
  
  const series = [
      {
        data: parseValues
      },
  ]
  
  
    
  return (
      <div className="candlestick-chart">
          <Chart options={options} series={series} type="candlestick" />
      </div>
  )}

export default CandelStickChart