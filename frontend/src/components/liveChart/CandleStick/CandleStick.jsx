import React, { useState } from "react";
import Chart from "react-apexcharts";


function CandelStickChart() {

    const options = {
        chart: {
          id: "candlestick-chart",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
          type: 'datetime',
        },
      }
    
    const series = [
        {
          data: [
            ['2012-08-08', 100, 120, 80, 110],
            ['2012-08-09', 100, 120, 80, 110],
            ['2012-08-10', 100, 120, 80, 110],
            ['2013-10-10', 100, 120, 80, 110],
          ],
        },
    ]
    
      
    return (
        <div className="candlestick-chart">
            <Chart options={options} series={series} type="candlestick" />
        </div>
    )}

export default CandelStickChart