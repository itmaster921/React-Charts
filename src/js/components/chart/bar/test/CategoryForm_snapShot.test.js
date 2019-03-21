import React from 'react';
import renderer from 'react-test-renderer';
import CategoryForm from "../ui/CategoryForm";

import {initialState} from "../reducer";

describe('Test basic rendering',()=> {
  it('BarSeriesList renders', () => {
    const component = renderer.create(
      <CategoryForm
        category={()=>1}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

