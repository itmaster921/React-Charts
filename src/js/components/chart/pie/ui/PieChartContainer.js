import React, {Component} from "react";

import PieChart from "./PieChartPanel";
import PieChartForm from "./PieChartForm";
import PieChartSliceList from "./PieChartSliceList";
import TitleEditComponent from "./../../TitleEditComponent"
import {connect} from 'react-redux'
import {createChangeNamePieAction, createCreateSliceAction, createDeleteSliceAction, createFetchPieDataAction, createChangePieSliceColorAction} from '../actions';

/**
 * container
 */
class PieChartContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex'}}>
          <div>
            <div>
              <TitleEditComponent value={this.props.pieData.name} onChange={this.props.changePieChartName}/>
            </div>
            <div>
              <PieChartForm pieData={this.props.pieData} createSlice={this.props.createSlice}/>
            </div>
            <div>
              <PieChartSliceList data={this.props.pieData.data} deleteSlice={this.props.deleteSlice} colorSelected={this.props.changeColor}/>
            </div>
          </div>
          <div>
            <PieChart pieData={this.props.pieData} onLoadChart={this.props.onLoadChart} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pieData: state.pie
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changePieChartName: (val) => {
      dispatch(createChangeNamePieAction(val))
    },
    changeColor: (color, sliceName, idx) => {
      dispatch(createChangePieSliceColorAction(color, sliceName,  idx))
    },
    deleteSlice: (val, idx) => {
      //TODO not working??
      dispatch(createDeleteSliceAction(val, idx))
    },
    createSlice: (val, idx) => {
      dispatch(createCreateSliceAction(val, idx))
    },
    onLoadChart: () => {
      dispatch(createFetchPieDataAction());
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartContainer)