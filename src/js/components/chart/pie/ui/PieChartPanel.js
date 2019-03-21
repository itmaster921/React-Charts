import React from "react";
import TitleComponent from '../../TitleComponent'
import {PieChart, Pie, Cell, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {pieChartLogic} from "../pieChartLogic";

import Loader from 'react-loader-advanced';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

class PieChartPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    onLoadChart: PropTypes.func.isRequired,
    pieData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired
        }))
      }
    )
  };

  componentDidMount() {
    //off for now
    this.props.onLoadChart();
  }

  render() {
    let pieData = this.props.pieData;
    let isFetching = this.props.pieData.isFetching;
    let style1 = {
      color:"white",
      fontSize: 40,
      display: "inline"
    }
    let style2 = {
      color:"white",
      fontSize: 40,
      display: "inline"
    }

    let loadingMessage =
            <div style={{display: 'flex', position: 'center', justifyContent: 'center'}}>
              <div style={style1} color={'white'} loading="true">  </div>
                <RingLoader style={style1} color={'white'} loading={true}/>
              <div style={style2}> loading..</div>
            </div>

    const COLORS = pieData.data.map((entry, index) => entry.color)

    return (
      <Loader show={isFetching} message={loadingMessage}>
        <div>
          <div className="chartpanel">
          <TitleComponent name={pieData.name}/>
          <PieChart width={500} height={500}>
            <Pie dataKey="value" data={pieData.data}
                 cx={250} cy={250} outerRadius={180} fill="#8884d8" label>
              {
                pieData.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
            <Tooltip/>
          </PieChart>
          </div>
        </div>
      </Loader>
    );
  }
}
export default PieChartPanel;
