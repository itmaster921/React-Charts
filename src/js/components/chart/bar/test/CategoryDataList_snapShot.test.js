import React from 'react';
import {CategoryDataList} from '../ui/CategoryDataList'; //dumb
import renderer from 'react-test-renderer';

describe('Test basic rendering',()=> {
  it('CategroyDataList renders', () => {
    const component = renderer.create(
      <CategoryDataList categories={['Apple', 'Orange', 'tomato']}>Facebook</CategoryDataList>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})