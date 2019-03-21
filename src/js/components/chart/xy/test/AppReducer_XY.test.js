import {reducer} from "./../reducer"
import {
  createCreateXYSeriesAction,
  createDeleteXYSeriesAction,
  createChangeCellXYAction,
  createChangeXYChartNameAction,
  createChangeColorAction,
  createChangePointAction,
  createAddDataPairAction,
  createDeleteDataPairAction

} from "./../actions"
/*
Test the reducer functions
 */
describe('Test XY Reducer functions', () => {


  const initialState_XY =
    {
      name: "XY Chart",
      isFetching: true,
      series: [
        {
          name:"series1",
          color:"red",
          data: [{"x": 0, "y": 0},
            {"x":1, "y":2}]
        }
      ]
    }

  it(' change name ', () => {

    let state = reducer(initialState_XY, createChangeXYChartNameAction("asdf"));
    expect(state.name).toEqual("asdf");
  })

  it(' creates a series ', () => {

    let state = reducer(initialState_XY, createCreateXYSeriesAction("asdf","brown"));
    expect(state.series.length).toEqual(2)
    expect(state.series).toContainEqual({
      name: 'asdf', color: 'brown', data:
        [{"x": 0, "y": 0}]
    })
  })

  it(' delete a series ', () => {

    let state = reducer(initialState_XY, createCreateXYSeriesAction("toDelete", "pink"));

    expect(state.series.length).toEqual(2)
    expect(state.series).toContainEqual({
      name: 'toDelete', color: 'pink', data:
        [{"x": 0, "y": 0}]
    })

    state = reducer(state, createDeleteXYSeriesAction("toDelete"));

    expect(state.series.length).toEqual(1)
    expect(state.series).not.toContainEqual({
      name: 'toDelete', color: 'pink', data:
        [{"x": 0, "y": 0}]
    })

  })

//???
  xit(' change cell at out of range cell', () => {

    // let state = reducer(initialState_XY_cellupdate, createXYSeries({name: "asdf2", color: "gray"}));
    // expect(state.series.length).toEqual(1);
    // expect(state.series[0].data.length).toEqual(2);

    try {
      //this should fail. data length is 1 and we are adding at 3 which is out of bounds. Max we
      //can add to is 2
      let state = reducer(initialState_XY_cellupdate, createChangeCellXYAction({name: "changeCellXY", axis: "x", row: 3, value: 3}));

      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);

    } catch (e) {
      // throw e;
    }
  })


  const initialState_XY_cellupdate =
    {
      name: "XY Chart",
      isFetching: true,
      series: [
        {
          name:"changeCellXY",
          color:"blah",
          data: [{"x": 0, "y": 0},
            {"x":1, "y":2}]
        }
      ]
    }


  it(' change cell ', () => {

    let state = reducer(initialState_XY_cellupdate, createChangeCellXYAction({name: "changeCellXY", axis: "y", row: 0, value:99}));

    expect(state.series.length).toEqual(1);
    expect(state.series[0].data.length).toEqual(2);

    expect(state.series).toContainEqual({
      name: 'changeCellXY', color: 'blah', data:
        [{"x": 0, "y":99},
          {"x":1, "y":2}]
    });

    state = reducer(state, createChangeCellXYAction({name: "changeCellXY", axis: "y", row: 1, value:98}));

    expect(state.series).toContainEqual({
      name: 'changeCellXY', color: 'blah', data:
        [{"x": 0, "y":99},
          {"x":1, "y":98}]
    });
  })

  it(' adds data pair to series ', () => {




    let state = reducer(initialState_XY, createAddDataPairAction(12, 13, "series1"));



    expect(state.series).toContainEqual({
      name:"series1",
      color:"red",
      data: [{"x": 0, "y": 0},
        {"x":1, "y":2},
        {"x":12, "y":13}]
    });
  })



  it(' deletes data pair to series ', () => {
    let state = reducer(initialState_XY, createAddDataPairAction(12, 13, "series1"));

    expect(state.series).toContainEqual({
      name:"series1",
      color:"red",
      data: [{"x": 0, "y": 0},
        {"x":1, "y":2},
        {"x":12, "y":13}]
    });

    //now delete x=1
    state = reducer(state, createDeleteDataPairAction("series1", 1));

    expect(state.series).toContainEqual({
      name:"series1",
      color:"red",
      data: [{"x": 0, "y": 0},
        {"x":12, "y":13}]
    });


  })

  xit('loads initial data correctly ', () => {

    let state = reducer(initialState_XY)

    expect(state.categories.length).toEqual(3)
    expect(state.categories).toContainEqual("dog")
    expect(state.series.length).toEqual(3)
    expect(state.series).toContainEqual({name: "Mexico", color: "red", data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]})

    expect(state.series).not.toContainEqual({
      name: "Currywurst",
      color: "red",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}]
    })

  })

  xit('change bar chart name ', () => {

    let state = reducer(initialState_XY, createChangeBarChartNameAction('sausage'))
    expect(state.name).toEqual('sausage')
    expect(state.name).not.toEqual('hotdog')
  })

  xit(' creates a category', () => {

    let category = {
      name: "lizard",
    }
    let state = reducer(initialState_XY, createCreateCategoryAction(category));
    expect(state.categories.length).toEqual(4)

    expect(state.series).toContainEqual({
      name: "Mexico",
      color: "red",
      data: [{y: 0}, {y: 0}, {y: 0}, {y: 0}, {y:0}]
    })

  })

  xit(' deletes a category ', () => {
    let state = reducer(initialState_XY, createDeleteCategoryAction("dog"));

    expect(state.categories.length).toEqual(2)
    expect(state.categories).not.toContainEqual("dog")
    expect(state.series).toContainEqual({
      name: "Holland",
      color: "blue",
      data: [{y: 0}, {y: 0}, {y: 0}]
    })

    expect(state.series).toContainEqual({
      name: "Germany",
      color: "orange",
      data: [{y: 0}, {y: 0}, {y: 0}]
    })
  })

  it(' updates a color ', () => {

    let state = reducer(initialState_XY, createChangeColorAction("series1", "blue"));

    expect(state.series).toContainEqual({
      name: "series1",
      color: "blue",
      data: [{"x": 0, "y": 0}, {"x": 1, "y": 2}]
    })
  })

  it(' updates point ', () => {

    let state = reducer(initialState_XY, createChangePointAction("series1", "cross"));

    expect(state.series).toContainEqual({
      name: "series1",
      color: "red",
      shape: "cross",
      data: [{"x": 0, "y": 0}, {"x": 1, "y": 2}]
    })
  })
  //TODO
  xit(' changes the cell', () => {
    let fromRow = 1, toRow = 1, updated = 42;

    let state = reducer(initialState_XY, createChangeCellAction(fromRow, toRow, updated))

    console.log('state', state)
  })
})


