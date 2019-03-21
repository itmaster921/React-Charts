import Immutable from "immutable";
import {xyChartLogic} from "./xyChartLogic";
import {XYActions} from "./actions";

export function reducer(state = initialState, action) {

  let imState = Immutable.fromJS(state);

  if (!action)
    return imState.toJS();
  // debugger;

  switch (action.type) {

    case XYActions.CREATE_SERIES_XY:
      imState = xyChartLogic.createXYSeries(imState, action);
      break;
    case XYActions.DELETE_SERIES_XY:
      imState = xyChartLogic.deleteXYSeries(imState, action);
      break;
    case XYActions.CHANGE_CELL_XY:
      imState = xyChartLogic.changeCellXY(imState, action);
      break;
    case XYActions.CHANGE_NAME_XY:
      imState = xyChartLogic.changeXYChartName(imState, action);
      break;

    case XYActions.CHANGE_SERIES_NAME_XY:
      imState = xyChartLogic.changeXYSeriesName(imState, action);
      break;

    case XYActions.ADD_DATA_PAIR_XY:
      imState = xyChartLogic.addDataPair(imState, action);
      break;

    case XYActions.DELETE_DATA_PAIR_XY:
      imState = xyChartLogic.deleteDataPair(imState, action);
      break;



    case XYActions.CHANGE_POINT_XY:
      imState = xyChartLogic.changeXYPoint(imState, action);
      break;
    case XYActions.CHANGE_COLOR_XY:
      imState = xyChartLogic.changeXYColor(imState, action);
      break;
    default : {
      // throw 'actionX not found ' + action.type
    }
  }
  return imState.toJS();
}


const initialState =
  {
    name: "My XY Chart",
    isFetching: true,
    series: [
      {
        name: "Series1",
        color: "red",
        shape:"square",
        data: [
          {x:2, y: 3},
          {x:4, y: 6},
          {x:7, y: 8},
          {x:9, y: 23}
        ]
      }
      ,
      {
        name: "Series2",
        shape:"diamond",
        color: "blue",
        data: [
          {x:3, y: 5},
          {x:5, y: 11},
          {x:6, y: 12},
          {x:12, y: 25}
        ]
      }
    ]
  }


