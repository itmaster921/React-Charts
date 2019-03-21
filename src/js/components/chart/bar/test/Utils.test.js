import {
  createMaxMinArray,
  createDataForChart
} from "./../Utils"
/*
Test the reducer functions
 */
describe('Test Bar Utils', () => {

  it(' creates min max array ', () => {

    let maxMinSeries = [
      { name: "", color: "", data: [ {y: 1}, {y: 4} ] },
      { name: "", color: "", data: [ {y: 5}, {y: 20} ] },
      { name: "", color: "", data: [ {y: 0}, {y: 0} ] }
    ]

    let array = createMaxMinArray(maxMinSeries);

    expect(array.maxY).toEqual(21)
    expect(array.minY).toEqual(-1)

  })

  it(' creates data for chart', () => {
    let series = [
      { name: "series1", color: "blue", data: [ {y: 1}, {y: 4} ] },
      { name: "series2", color: "green", data: [ {y: 5}, {y: 20} ] },
      { name: "series3", color: "orange", data: [ {y: 0}, {y: 0} ] }
    ];

    let categories = ["cat1", "cat2"];

    let data = createDataForChart(series, categories);
    expect(data).toEqual(
      [{"name": "cat1", "series1": 1, "series2": 5, "series3": 0}, {"name": "cat2", "series1": 4, "series2": 20, "series3": 0}]
    )
  })
});


