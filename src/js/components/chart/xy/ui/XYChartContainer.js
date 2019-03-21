import React from "react";

import XYChartComponent from "./XYChartComponent";

import {connect} from 'react-redux'

import {makeXYDataSelector} from "../selectors"

import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  createChangeCellXYAction, createFetchXYDataAction, createDeleteXYSeriesAction,
  createUpdateColorXYAction, createCreateXYSeriesAction, createChangeXYChartNameAction,
  createChangeColorAction, createChangePointAction, createChangeXYSeriesNameAction, createAddDataPairAction,createDeleteDataPairAction
} from '../actions';

import XYChartSeriesComponent from "./XYChartSeriesComponent"
import TitleComponent from '../../TitleComponent'
import TitleEditComponent from '../../TitleEditComponent'

class XYChartContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    }

    let enableButton = true;

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <div>
              <TitleEditComponent value={this.props.xyData.name} onChange={this.props.changeXYChartName}/>
            </div>
            <div style={{display: 'flex'}}>
              <div>
                <div style={style}>
                  <FlatButton style={style}
                              type="submit"
                              label="Add Series"
                              disabled={!enableButton}
                              onClick={(e) => this.props.createXYSeries("todo" , "blue")}/>
                </div>
                <div>
                  <XYChartSeriesComponent
                    xySeries={this.props.xyData.series}
                    changeXYSeriesName={this.props.changeXYSeriesName}
                    addDataPair={this.props.addDataPair}
                    deleteDataPair={this.props.deleteDataPair}
                    changeCellXY={this.props.changeCellXY}
                    createXYSeries={this.props.createXYSeries}
                    deleteXYSeries={this.props.deleteXYSeries}
                    updateColorXY={this.props.updateColorXY}
                    changePoint={this.props.changePoint}
                    changeColor={this.props.changeColor}
                  />
                </div>
              </div>
              <div className="chartpanel">
                <div>
                  <TitleComponent name={this.props.xyData.name}/>
                </div>
                <div>
                  <XYChartComponent xySeries={this.props.xyData.series}/>
                </div>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const getXYData = makeXYDataSelector(state)
  return {
    xyData: getXYData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeXYChartName: (newName) => {
      dispatch(createChangeXYChartNameAction(newName))
    },
    changeXYSeriesName: (name, newName) => {
      dispatch(createChangeXYSeriesNameAction(name, newName))
    },
    onLoadChart: () => {
      dispatch(createFetchXYDataAction());
    },
    deleteXYSeries: (seriesName) => {
      dispatch(createDeleteXYSeriesAction(seriesName))
    },
    updateColorXY: (colorValue, seriesName) => {
      dispatch(createUpdateColorXYAction(colorValue, seriesName))
    },
    createXYSeries: (series) => {
      dispatch(createCreateXYSeriesAction(series))
    },
    changeCellXY: (series, axis, row, value) => {
      dispatch(createChangeCellXYAction({name: series.name, axis: series.axis, row: series.row, value: series.value}))
    },
    changePoint: (point, series) => {
      dispatch(createChangePointAction(series, point))
    },
    changeColor: (color, seriesName) => {
      dispatch(createChangeColorAction(seriesName, color));
    },
    addDataPair: (xValue, yValue, seriesName) => {
      dispatch(createAddDataPairAction(xValue, yValue, seriesName));
    },
    deleteDataPair: (seriesName, xValue) => {
      dispatch(createDeleteDataPairAction(seriesName, xValue));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XYChartContainer)