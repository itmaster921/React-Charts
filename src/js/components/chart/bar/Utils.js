/**
 * Gets the max and min of a chart series.
 *
 * @param series
 * @returns {{minY: undefined, maxY: undefined}}
 */

export function createMaxMinArray(series) {
  let maxMinArray = {minY: undefined, maxY: undefined}

  //get overall max/min
  maxMinArray = series.reduce((acc, object) => {

    //get max/min for a single series
    let maxMinSeries = object.data.reduce((acc2, obj2) => {
      acc2.minY = ( acc2.minY === undefined || obj2.y < acc2.minY ) ? obj2.y : acc2.minY
      acc2.maxY = ( acc2.maxY === undefined || obj2.y > acc2.maxY ) ? obj2.y : acc2.maxY
      return acc2;
    }, acc);
    return maxMinSeries;

  }, maxMinArray);

  let rangeY = maxMinArray.maxY - maxMinArray.minY;

  //get 5% of ranges
  let rangeYPadding = rangeY / 20;

  maxMinArray.maxY = maxMinArray.maxY + rangeYPadding;
  maxMinArray.minY = maxMinArray.minY - rangeYPadding;

  return maxMinArray;
};


/**
 * Converts the chart data into a structure that the chart plugin can understand.
 *
 * Transforms data structure from a structure like this :

     [
       { name: "series1", color: "blue", data: [ {y: 1}, {y: 4} ] },
       { name: "series2", color: "green", data: [ {y: 5}, {y: 20} ] },
       { name: "series3", color: "orange", data: [ {y: 0}, {y: 0} ] }
     ];

 to a structure like this :

     [
       {"name": "cat1", "series1": 1, "series2": 5, "series3": 0},
       {"name": "cat2", "series1": 4, "series2": 20, "series3": 0}
     ]
 */
export function createDataForChart(series, categories) {
  let newData = categories.map((cat, i) => {
    let obj = {};
    obj["name"] = cat;
    series.map((seriesElement, i2) => {
      let dataElement = seriesElement.data[i];
      let y = dataElement.y;
      let seriesName = seriesElement.name;
      obj[seriesName] = y;
    });
    return obj;
  });
  return newData;
}