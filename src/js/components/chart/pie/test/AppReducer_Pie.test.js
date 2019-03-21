import {createChangePieSliceColorAction, createChangeNamePieAction, createCreateSliceAction, createDeleteSliceAction} from "./../actions"

import {reducer} from "./../reducer"



  /*
  Test the reducer functions
   */
describe('Test Reducer functions', () => {

  it('loads initial data correctly ', () => {
    let state = reducer(initialState_Pie);

    expect(state.data.length).toEqual(6);
    expect(state.data).toContainEqual({name: 'Group F', value: 289, color: '#b456bb'});
    expect(state.data).toContainEqual({name: 'Group C', value: 300, color: '#92fa56'});
    expect(state.data).not.toContainEqual({name: 'Currywurst', value: 300, color: '#92fa56'});

  });

  it('change pie chart name ', () => {
    let state = reducer(initialState_Pie, createChangeNamePieAction("blah"));

    expect(state.name).toBe('blah')
  });

  it('create pie slice ', () => {
    let state = reducer(initialState_Pie, createCreateSliceAction({name: 'Group Z', value: 12, color: '#123123'}));
    expect(state.data.length).toEqual(7);
    expect(state.data[6].name).toEqual("Group Z");
    expect(state.data[6].value).toEqual(12);
    expect(state.data[6].color).toEqual("#123123");
  });

  it('delete slice ', () => {
    expect(initialState_Pie.data.length).toEqual(6);
    let state = reducer(initialState_Pie, createDeleteSliceAction("Group A"));
    expect(state.data.length).toEqual(5);
  })

  it('change color of slice', () => {
    expect(initialState_Pie.data.length).toEqual(6);
    expect(initialState_Pie.data[2].name).toEqual("Group C");


    let state = reducer(initialState_Pie, createChangePieSliceColorAction("pink", "Group C"));


    // expect(state.data).toEqual(6);

    expect(state.data.length).toEqual(6);
    expect(state.data[2].color).toEqual("pink");
    expect(state.data[2].name).toEqual("Group C");
  })
});


const initialState_Pie =
  {
    name: "Pie Chart",
    data: [
      {name: 'Group A', value: 12, color: '#123123'},
      {name: 'Group B', value: 300, color: '#634334'},
      {name: 'Group C', value: 300, color: '#92fa56'},
      {name: 'Group D', value: 200, color: '#aa4234'},
      {name: 'Group E', value: 278, color: '#ccccc5'},
      {name: 'Group F', value: 289, color: '#b456bb'}
    ]
  }
