import React from 'react';
import renderer from 'react-test-renderer';
import BarSeriesList from "../ui/BarSeriesList";

import {initialState} from "../reducer";

describe('Test basic rendering',()=> {
  it('BarSeriesList renders', () => {
    const component = renderer.create(
      <BarSeriesList
        deleteSeries={()=>1}
        colorSelected={()=>1}
        barData={initialState}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

