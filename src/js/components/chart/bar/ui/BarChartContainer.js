import React from "react";

import BarChartComponent from "./BarChartPanel";
import BarSeriesList from "./BarSeriesList";
import BarChartForm from "./BarChartForm";
import BarChartDataTable from "./BarChartDataTable";
import CategoryForm from "./CategoryForm";

import {makeCategoriesSelector, makeBarDataSelector} from "../selectors"

import CategoryDataList from "./CategoryDataList";

import './../../../../global.less';

import {connect} from 'react-redux'
import {createCreateCategoryAction, createChangeBarChartNameAction, createFetchBarDataAction, createDeleteSeriesAction,
  createUpdateColorBarAction, createCreateSeriesAction, createDeleteCategoryAction, createChangeCellAction
} from '../actions';

import TitleEditComponent from "../../TitleEditComponent";

/**
 * Redux container
 *
 */

class BarChartContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    };

    return (
      <div className="chartPage" style={style}>
        <div style={{display: 'flex'}}>
          <div>
            <div >
              <TitleEditComponent value={this.props.barData.name} onChange={this.props.changeBarChartName}/>
              <div>
                <BarChartForm createSeries={this.props.createSeries}/>
              </div>
              <div>
                <BarSeriesList barData={this.props.barData}
                               deleteSeries={this.props.deleteSeries}
                               colorSelected={this.props.updateColorBar}
                />
              </div>
            </div>
            <div style={style}>
              <div>
                <CategoryForm createCategory={this.props.createCategory}/>
              </div>
              <div>
                <CategoryDataList categories={this.props.categories} deleteCategory={this.props.deleteCategory}/>
              </div>
            </div>
          </div>
          <div>
            <div style={{width: 700, height: 200}}>
              <BarChartDataTable barData={this.props.barData} changeCell={this.props.changeCell} />
            </div>
            <div>
              <BarChartComponent barData={this.props.barData} onLoadChart={this.props.onLoadChart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const getCategories = makeCategoriesSelector(state)
  const getBarData = makeBarDataSelector(state)
  return {
    barData: getBarData,
    categories: getCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeBarChartName: (val) => {
      dispatch(createChangeBarChartNameAction(val))
    },
    onLoadChart: () => {
      dispatch(createFetchBarDataAction());
    },
    deleteSeries: (value) => {
      dispatch(createDeleteSeriesAction(value))
    },
    updateColorBar: (colorValue, seriesName) => {
      dispatch(createUpdateColorBarAction(colorValue, seriesName))
    },
    createSeries: (series) => {
      dispatch(createCreateSeriesAction(series))
    },
    createCategory: (cat) => {
      dispatch(createCreateCategoryAction(cat))
    },
    deleteCategory: (cat) => {
      dispatch(createDeleteCategoryAction(cat))
    },
    changeCell: (fromRow, toRow, updated ) => {
      dispatch(createChangeCellAction(fromRow, toRow, updated ))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChartContainer)
