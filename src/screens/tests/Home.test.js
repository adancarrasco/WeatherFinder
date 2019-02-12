import React from "react";
import { mount } from "enzyme";

import Home from "../Home";
import FormSearch from "../../components/FormSearch";

describe("Home screen", () => {
  it("it renders correctly", () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(FormSearch)).toHaveLength(1);
    expect(wrapper.instance().formSearch).toBeTruthy();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
