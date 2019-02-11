import React from "react";
import { shallow } from "enzyme";
import WeatherDetailsTable from "../WeatherDetailsTable";

describe("WeatherDetailsTable", () => {
  it("it renders correctly", () => {
    const wrapper = shallow(
      <WeatherDetailsTable
        humidity={86}
        pressure={990}
        sunrise={1549866667}
        sunset={1549901460}
        windSpeed={9.8}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
