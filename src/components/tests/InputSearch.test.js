import React from "react";
import { shallow } from "enzyme";

import InputSearch from "../InputSearch";

describe("InputSearch", () => {
  it("it renders correctly", () => {
    const wrapper = shallow(<InputSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
