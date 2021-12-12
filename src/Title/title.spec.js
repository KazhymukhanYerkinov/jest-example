import React from 'react';
import Title from './title';


describe("Title component", () => {
  it("should render Title component with props", () => {
    const component = shallow(<Title title = "Kazhymukhan"/>);
    expect(component).toMatchSnapshot();
  });

  it("should render Title component without props", () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
})
