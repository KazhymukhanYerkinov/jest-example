import React from "react";
import Posts from "./example2";

describe("Posts component", () => {
  it("should render Post component", () => {
    // const component = render(<Posts />);
    const component = shallow(<Posts />);
    expect(component).toMatchSnapshot();
  });
});
