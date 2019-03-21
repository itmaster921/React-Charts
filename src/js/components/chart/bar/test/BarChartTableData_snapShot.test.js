import React from 'react';
import renderer from 'react-test-renderer';
import BarChartDataTable from "../ui/BarChartDataTable";

import {initialState} from "../reducer";

/**
 * TODO Something funny with the data table stops this from working
 */
describe('Test basic rendering',()=> {
  xit('BarChartDataTable renders', () => {
    const component = renderer.create(
      <BarChartDataTable
        changeCell={()=>1}
        barData={initialState}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

