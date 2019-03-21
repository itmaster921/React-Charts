import Immutable from "immutable";

import {pieChartLogic} from './pieChartLogic'
import {PieActions} from "./actions";

export function reducer(state = initialState, action) {

  let imState = Immutable.fromJS(state);

  if (!action)
    return imState.toJS();

  switch (action.type) {

    case PieActions.FETCH_PIE_DATA:
      //TODO is this needed? This action is listened to already in the saga
      // Server.doGetRequest('/bardata');
      break;
    case PieActions.PIE_DATA_FETCHED:
      imState = pieChartLogic.fetchFinished(imState, action)
      break;
    case PieActions.CREATE_SLICE:
      // debugger;
      imState = pieChartLogic.createSlice(imState, action.slice);
      break;
    case PieActions.CHANGE_NAME_PIE:
      imState = pieChartLogic.changeName(imState, action.newName);
      break;
    case PieActions.UPDATE_COLOR_PIE:
      imState = pieChartLogic.changePieChartSliceColor(imState, action.sliceName, action.color);
      break;
    case PieActions.DELETE_SLICE:
      imState = pieChartLogic.deleteSlice(imState, action.name);
      break;
    default : {
      // throw 'asdfasdfasd action not found ' + action.type
    }
  }
  return imState.toJS();
}

const initialState =
  {
    name: "Pie Chart",
    isFetching: false,
    data: [
      {
        "name":"Apple",
        "value":13,
        "color":"red",
      }, {
        "name":"Orange",
        "value":54,
        "color":"blue",
      }, {
        "name":"Banana",
        "value":54,
        "color":"yellow",
      }
    ]
  }