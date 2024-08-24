import React from 'react'
import Chart from "react-apexcharts";

export const indicator = ({indicatorData, symbol}) => {
    // console.log(indicatorData)

    const history_macd = indicatorData.map(value => [
        value.datetime,
        parseFloat(value.macd_hist).toFixed(2), // Convert string to a numeric value (assuming 'open' is always a number)
    ])
    const macd = indicatorData.map(value => [
        value.datetime,
        parseFloat(value.macd).toFixed(2),
    ])
    const signal_macd = indicatorData.map(value => [
        value.datetime,
        parseFloat(value.macd_signal).toFixed(2),
    ])


    const options = {
        series: [{
            name: 'History',
            type: 'column',
            data: history_macd
        }, {
            name: 'macd',
            type: 'line',
            data: macd
        }, {
            name: 'macd_signal',
            type: 'line',
            data: signal_macd
        }],
        xaxis: {
            type: 'datetime',
        },
        // chart: {
        //     height: 350,
        //     type: 'line',
        // },
        // stroke: {
        //     width: [0, 4]
        // },
        // title: {
        //     text: 'Traffic Sources'
        // },
        // dataLabels: {
        //     enabled: true,
        //     enabledOnSeries: [1]
        // },
        // labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        // yaxis: [{
        //     title: {
        //         text: 'Website Blog',
        //     },
      
        // }, {
        //     opposite: true,
        //     title: {
        //     text: 'Social Media'
        //     }
        // }]
    }



    return (
        <div>
            This is the indicator {symbol}
            <Chart options={options} series={options.series}/>
        </div>
    )
}

export default indicator