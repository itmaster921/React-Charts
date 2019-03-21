//bar
export const BarActions = {
  FETCH_BAR_DATA : 'FETCH_BAR_DATA',
  BAR_DATA_FETCHED: 'BAR_DATA_FETCHED',
  CHANGE_NAME_BAR: 'CHANGE_NAME_BAR',
  CREATE_SERIES: 'CREATE_SERIES',
  CELL_CHANGED: 'CELL_CHANGED',
  CREATE_CATEGORY: 'CREATE_CATEGORY',
  DELETE_SERIES: 'DELETE_SERIES',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  UPDATE_COLOR: 'UPDATE_COLOR_BAR'
}

//bar action creators
export function createCreateSeriesAction(series) {
  return {
    type: BarActions.CREATE_SERIES,
    series
  }
}
export function createDeleteSeriesAction(seriesName) {
  return {
    type: BarActions.DELETE_SERIES,
    seriesName
  }
}
export function createUpdateColorBarAction(color, seriesName) {
  return {
    type: BarActions.UPDATE_COLOR,
    seriesName,
    color
  }
}
export function createChangeBarChartNameAction(newName) {
  return {
    type: BarActions.CHANGE_NAME_BAR,
    newName
  }
}
export function createCreateCategoryAction(value) {
  return {
    type: BarActions.CREATE_CATEGORY,
    value
  }
}
export function createDeleteCategoryAction(categoryName, index) {
  return {
    type: BarActions.DELETE_CATEGORY,
    categoryName,
    index
  }
}
export function createChangeCellAction(value) {
  return {
    type: BarActions.CELL_CHANGED,
    value
  }
}

export function createFetchBarDataAction(value) {
  return {
    type: BarActions.FETCH_BAR_DATA,
    value
  }
}
