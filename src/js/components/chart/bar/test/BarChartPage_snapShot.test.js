import React from 'react';
import renderer from 'react-test-renderer';
import BarChartPage from "../ui/BarChartContainer";

/**
 * TODO: this test does not work at the moment
 * because the page (ie. container) expects a store make a dummy store?
 */

describe('Test basic rendering',()=> {
  xit('BarSeriesList renders', () => {
    const component = renderer.create(
      <BarChartPage/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

