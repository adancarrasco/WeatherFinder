import React from "react";
import { mount } from "enzyme";
import WeatherCard from "../WeatherCard";

describe("WeatherCard", () => {
  it("it should render correctly", () => {
    const wrapper = mount(<WeatherCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
