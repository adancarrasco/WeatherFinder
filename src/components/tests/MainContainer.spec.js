import React from "react";
import { shallow } from "enzyme";

import MainContainer from "../MainContainer";

describe("MainContainer", () => {
  it("it should render correctly", () => {
    const wrapper = shallow(<MainContainer />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});