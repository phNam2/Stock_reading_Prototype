import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./CandleStick.css"


function CandelStickChart({stockValues}) {

  console.log(stockValues)

  const parseValues = stockValues.map(value => [
    value.datetime,
    parseFloat(value.open).toFixed(2), // Convert string to a numeric value (assuming 'open' is always a number)
    parseFloat(value.high).toFixed(2),
    parseFloat(value.low).toFixed(2),
    parseFloat(value.close).toFixed(2)
  ]);

  // console.log(parseValues)

  const options = {
      chart: {
        id: "candlestick-chart",
      },
      xaxis: {
        type: 'datetime',
      },
      // plotOptions: {
      //   candlestick: {
      //     colors: {
      //       upward: '#3C90EB',
      //       downward: '#DF7D46'
      //     }
      //   }
      // },
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