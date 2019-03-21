import Immutable from 'immutable';

/**
 * Logic for reducer calls for the bar chart.
 */
export const barChartLogic = {

  getSeries (barData) {
    return barData.series;
  },
  getCategories (barData) {
    return barData.categories;
  },

  isFetching (barData) {
    return barData.isFetching;
  },

  createCategory(imState, action) {

    let categoryList = imState.getIn(['categories']);

    categoryList = categoryList.push(action.value.name);

    imState = imState.setIn(['categories'], categoryList);

    //now for each series create an entry
    let seriesList = imState.getIn(['series']);

    seriesList = Immutable.List(seriesList);

    seriesList = seriesList.map(
      elem => {
        let data = elem.getIn(['data']);
        data = data.push({y: 0});
        elem = elem.setIn(['data'], data);
        return elem
      });

    imState = imState.setIn(['series'], seriesList);

    return imState;
  },

  /**
   * Delete a chart series
   */
  deleteSeries(imState, action) {
    let list = imState.getIn(['series']);

    //get all series that do not match the name of the series to delete
    let listWithoutSeriesToDelete = list.filter((elem) => elem.get("name") !== action.seriesName);

    imState = imState.setIn(['series'], listWithoutSeriesToDelete);
    return imState;
  },


  updateColor(imState, action) {
    let list = imState.getIn(['series']);

    let updatedList = list.update(
      list.findIndex((item) => {
        return item.get("name") === action.seriesName;
      }), (item) => {
        return item.set("color", action.color);
      }
    );
    imState = imState.setIn(['series'], updatedList);
    return imState;
  },

  fetchFinished(imState, action) {

    let barData = Immutable.fromJS(action.payload.app.bar);

    imState = imState.setIn([], barData);
    imState = imState.setIn(['isFetching'], false);

    return imState;
  },

  deleteCategory(imState, action) {

    let index = imState.getIn(['categories']).findIndex(item => item === action.categoryName);

    //filter out category and replace in state
    let filteredCategories = imState.getIn(['categories']).filter(elem => elem !== action.categoryName);
    imState = imState.setIn(['categories'], filteredCategories);

    /**
     * Go through each series object and delete the data element at the specific index
     * which correponds to the category index.
     */
    let seriesList = imState.getIn(['series']);

    seriesList = Immutable.List(seriesList);

    seriesList = seriesList.map(
      elem => {
        let data = elem.getIn(['data']);
        data = data.remove(index);
        elem = elem.setIn(['data'], data);
        return elem
      });

    imState = imState.setIn(['series'], seriesList);

    return imState;
  },

  /**
   * @param imState
   * @param action
   * @returns {*}
   */
  createSeries(imState, action) {
    let series = action.series;

    let list = imState.getIn(['series']);
    list = Immutable.List(list);

    let firstSeries = list.last();

    let data = firstSeries.getIn(['data']);

    let emptySeries = this.createEmptyYSeriesForLength(data.size);

    list = list.push(
      {
        name: series.name,
        color: series.color,
        data: emptySeries
      },
    );
    imState = imState.setIn(['series'], list);
    return imState;
  },

  createEmptyYSeriesForLength(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push({y: 0})
    }
    return arr;
  },

  cellChanged(imState, action) {

    let row = action.value.fromRow;
    let seriesName = Object.keys(action.value.updated)[0];
    let cellValue = action.value.updated[seriesName];

    if (seriesName === "category") {
      imState = imState.setIn(['categories', row], cellValue)
    } else {
      let list = imState.getIn(['series']);
      let index = list.findIndex(item => item.get("name") === seriesName);
      imState = imState.setIn(['series', index, 'data', row, 'y'], cellValue)
    }
    return imState;
  },

  changeName(imState, newName) {
    // alert('new name' + newName)
    imState = imState.setIn(['name'], newName)
    return imState;
  }
}