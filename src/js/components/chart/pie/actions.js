//pie action creators
export function createEnterPieChartNameAction() { //??
  return {
    type: PieActions.ENTER_PIE_CHART_NAME
  }
}

export function createAddSliceAction(id) {
  return {
    type: PieActions.ADD_PIE_SLICE,
    id
  }
}
export function createCreateSliceAction(slice) {
  return {
    type: PieActions.CREATE_SLICE,
    slice
  }
}

export function createFetchPieDataAction(value) {


  return {
    type: PieActions.FETCH_PIE_DATA,
    value
  }
}

export function createDeleteSliceAction(name) {
  return {
    type: PieActions.DELETE_SLICE,
    name: name
  }
}
export function createChangeNamePieAction(newName) {
  return {
    type: PieActions.CHANGE_NAME_PIE,
    newName
  }
}
export function createChangePieSliceColorAction(color, name) {
  return {
    type: PieActions.UPDATE_COLOR_PIE,
    sliceName: name,
    color: color
  }
}

//pie
export const PieActions = {
  ENTER_PIE_CHART_NAME: 'ENTER_PIE_CHART_NAME',
  ADD_PIE_SLICE: 'ADD_PIE_SLICE',
  CHANGE_NAME_PIE: 'CHANGE_NAME_PIE',
  CREATE_SLICE: 'CREATE_SLICE',
  FETCH_PIE_DATA:'FETCH_PIE_DATA',
  PIE_DATA_FETCHED: 'PIE_DATA_FETCHED',
  DELETE_SLICE: 'DELETE_SLICE',
  UPDATE_COLOR_PIE: 'UPDATE_COLOR_PIE'
}

