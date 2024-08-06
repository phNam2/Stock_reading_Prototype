import React, { useState } from "react";
import Chart from "react-apexcharts";


function CandelStickChart() {

    const options = {
        chart: {
          id: "candlestick-chart",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May"], 
        },
      }
    
    const series = [
        {
          data: [
            [1546300800000, 100, 120, 80, 110],
          ],
        },
    ]
    
      
    return (
        <div className="candlestick-chart">
            <Chart options={options} series={series} type="candlestick" />
        </div>
    )}

export default CandelStickChart