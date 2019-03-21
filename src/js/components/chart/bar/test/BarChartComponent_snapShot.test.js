import React from 'react';
import renderer from 'react-test-renderer';
import BarChartComponent from "../ui/BarChartPanel";

import {initialState} from "../reducer";

describe('Test basic rendering',()=> {
  it('BarSeriesList renders', () => {
    const component = renderer.create(
      <BarChartComponent
        onLoadChart={()=>1}
        barData={initialState}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
