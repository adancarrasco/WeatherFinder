import React from "react";
import { mount } from "enzyme";
import WeatherCard from "../WeatherCard";

describe("WeatherCard", () => {
  it("it should render correctly", () => {
    const mockCityWeatherInfo = {
      cityName: "Berlin",
      icon: "02n",
      currentTemp: 3,
      maxTemp: 3,
      minTemp: 2,
      description: "few clouds"
    };
    const {
      cityName,
      icon,
      currentTemp,
      maxTemp,
      minTemp,
      description
    } = mockCityWeatherInfo;
    const wrapper = mount(
      <WeatherCard
        cityName={cityName}
        icon={icon}
        currentTemp={currentTemp}
        maxTemp={maxTemp}
        minTemp={minTemp}
        description={description}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
