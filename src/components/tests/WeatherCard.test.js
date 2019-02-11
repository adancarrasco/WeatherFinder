import React from "react";
import { mount } from "enzyme";
import WeatherCard from "../WeatherCard";

describe("WeatherCard", () => {
  it("it should render correctly", () => {
    const cityName = "Berlin";
    const wrapper = mount(<WeatherCard cityName={cityName} />);
    expect(wrapper).toMatchSnapshot();
  });
});
