import React from "react";
import { shallow } from "enzyme";

import FormSearch from "../FormSearch";

describe("FormSearch", () => {
  it("it renders correctly", () => {
    const wrapper = shallow(<FormSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
