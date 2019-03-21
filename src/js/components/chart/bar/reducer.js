import Immutable from "immutable";

import {barChartLogic} from './barChartLogic'


import {BarActions} from "./actions";

export function reducer(state = initialState, action) {

  let immutableState = Immutable.fromJS(state); //convert to immutable

  if (!action)
    return immutableState.toJS();

  switch (action.type) {
    case BarActions.FETCH_BAR_DATA:
      //TODO is this needed? This action is listened to already in the saga
      // Server.doGetRequest('/bardata');
      break;
    case BarActions.BAR_DATA_FETCHED: {
      immutableState = barChartLogic.fetchFinished(immutableState, action)
      break;
    }
    case BarActions.CHANGE_NAME_BAR:

      // alert('should work')

      immutableState = barChartLogic.changeName(immutableState, action.newName);
      break;
    case BarActions.CELL_CHANGED:
      immutableState = barChartLogic.cellChanged(immutableState, action)
      break;
    case BarActions.CREATE_SERIES:
      immutableState = barChartLogic.createSeries(immutableState, action)
      break;
    case BarActions.CREATE_CATEGORY:
      immutableState = barChartLogic.createCategory(immutableState, action)
      break;
    case BarActions.DELETE_CATEGORY:
      immutableState = barChartLogic.deleteCategory(immutableState, action)
      break;
    case BarActions.DELETE_SERIES:
      immutableState = barChartLogic.deleteSeries(immutableState, action)
      break;
    case BarActions.UPDATE_COLOR:
      immutableState = barChartLogic.updateColor(immutableState, action)
      break;
    default : {
      console.warn('no action found : ' + (action ? action.type : action))
      //throw 'action not found ' + action.type
    }
  }
  return immutableState.toJS();
}


/**
 * Initial state
 */
export const initialState =
  {
    name: "Bar Chart",
    isFetching: true,
    categories: [
      "Apple",
      "Orange",
      "Banana",
      "Peach"
    ],
    series: [
      {
        name: "Mexicoooo",
        color: "red",
        data: [
          {y: 1},
          {y: 2},
          {y: 3},
          {y: 4}
        ]
      },
      {
        name: "Germanyyy",
        color: "orange",
        data: [
          {y: 5},
          {y: 6},
          {y: 7},
          {y: 8}
        ]
      },
      {
        name: "Holland",
        color: "blue",
        data: [
          {y: 0},
          {y: 0},
          {y: 0},
          {y: 0}
        ]
      }
    ]
  }
