import React from "react";
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

import {createMaxMinArray} from "./../Utils";

export default class XYChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const objects = []

    //get max min values for both x and y, and add some padding.
    let maxMinArray = createMaxMinArray(this.props);

    this.props.xySeries.map((object, i) => {
      objects.push({
        name: object.name,
        data: object.data,
        color: object.color,
        shape: object.shape,
      })
    })

    return (
      <div>
        <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid />
          <XAxis type="number" dataKey={'x'} domain={[maxMinArray.minX, maxMinArray.maxX]} />
          <YAxis type="number" dataKey={'y'} domain={[maxMinArray.minY, maxMinArray.maxY]} />
          <ZAxis range={[100]}/>
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          <Legend/>
          {objects.map((object, i) => <Scatter key={"scat_" + i} name={object.name} data={object.data} fill={object.color} line shape={object.shape} />)}
        </ScatterChart>
      </div>
    );
  }
}