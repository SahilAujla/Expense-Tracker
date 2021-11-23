import React from 'react';

import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return <div className="chart">
        {dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} key={dataPoint.label}/>)}
    </div>
};

export default Chart;
