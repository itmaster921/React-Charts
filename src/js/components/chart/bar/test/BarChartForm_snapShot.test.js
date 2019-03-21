import React from 'react';
import renderer from 'react-test-renderer';
import BarChartForm from "../ui/BarChartForm";

describe('Test basic rendering',()=> {
  it('BarChartForm renders', () => {
    const component = renderer.create(
      <BarChartForm createSeries={()=>1} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
