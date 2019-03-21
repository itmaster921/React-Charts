
//xy
export const XYActions = {
  CREATE_SERIES_XY: 'CREATE_SERIES_XY',
  DELETE_SERIES_XY: 'DELETE_SERIES_XY',
  CHANGE_CELL_XY: 'CHANGE_CELL_XY',
  CHANGE_COLOR_XY: 'CHANGE_COLOR_XY',
  CHANGE_NAME_XY: 'CHANGE_NAME_XY',
  CHANGE_SERIES_NAME_XY: 'CHANGE_SERIES_NAME_XY',
  ADD_DATA_PAIR_XY: 'ADD_DATA_PAIR_XY',
  DELETE_DATA_PAIR_XY: 'DELETE_DATA_PAIR_XY',
  CHANGE_POINT_XY: 'CHANGE_POINT_XY'
};

export function createFetchXYDataAction() {
  return {
  }
}
export function createUpdateColorXYAction(newColor, seriesName) {
  return {
    type: XYActions.CHANGE_COLOR_XY,
    name: seriesName,
    newColor: newColor
  }
}

export function createChangeXYChartNameAction(newName) {
  return {
    type: XYActions.CHANGE_NAME_XY,
    name: newName,
  }
}

export function createChangeXYSeriesNameAction(name, newName) {
  return {
    type: XYActions.CHANGE_SERIES_NAME_XY,
    name: name,
    newName: newName,
  }
}



//xy actions
export function createCreateXYSeriesAction(name, color) {
  return {
    type: XYActions.CREATE_SERIES_XY,
    name: name ? name : "TODO",
    color: color ? color : "green"
  }
}
export function createDeleteXYSeriesAction(seriesName) {
  return {
    type: XYActions.DELETE_SERIES_XY,
    name: seriesName,
  }
}

export function createChangePointAction(seriesName, point) {
  return {
    type: XYActions.CHANGE_POINT_XY,
    name: seriesName,
    point: point,
  }
}

export function createChangeColorAction(seriesName, newColor) {
  return {
    type: XYActions.CHANGE_COLOR_XY,
    name: seriesName,
    color: newColor,
  }
}

export function createAddDataPairAction(xValue, yValue, seriesName) {

  console.info("asdf")

  return {
    type: XYActions.ADD_DATA_PAIR_XY,
    name: seriesName,
    xValue: xValue,
    yValue: yValue
  }
}

export function createDeleteDataPairAction(seriesName, xValue) {
  return {
    type: XYActions.DELETE_DATA_PAIR_XY,
    name: seriesName,
    xValue: xValue,
  }
}

export function createChangeCellXYAction(seriesValues) {

  console.info("sadfasfd")

  return {
    type: XYActions.CHANGE_CELL_XY,
    seriesName: seriesValues.name,
    axis: seriesValues.axis,
    row: seriesValues.row,
    value: seriesValues.value
  }
}
