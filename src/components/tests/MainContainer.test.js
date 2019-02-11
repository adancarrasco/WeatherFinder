import React from "react";
import { shallow } from "enzyme";

import MainContainer from "../MainContainer";

describe("MainContainer", () => {
  it("it should render correctly with children", () => {
    const wrapper = shallow(
      <MainContainer>
        <div />
      </MainContainer>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
