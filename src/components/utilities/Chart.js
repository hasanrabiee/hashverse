import React from 'react';
import {Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";


const Chart = ({data,color,width,height}) => {

    // console.log(data)
    // console.log(new Date(data?.[0]?.["t"]).toDateString())
    return (
        <LineChart width={width} height={height} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="vw" stroke={color}/>
        </LineChart>
    );
}

export default Chart;
