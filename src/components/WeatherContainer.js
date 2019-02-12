import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherCardNotFound from "./WeatherCardNotFound";

const WeatherContainer = props => {
  /**
   * Maps the city weather coming from the service response to the component needs
   * @param {Object} data
   */
  const mapCityWeather = data => {
    const { weather } = data;
    if (weather.length > 0) {
      const { description, icon } = data.weather[0];
      const { temp, temp_max, temp_min } = data.main;
      return {
        cityName: data.cityName,
        icon,
        currentTemp: Math.round(temp),
        maxTemp: temp_max,
        minTemp: temp_min,
        description,
        data
      };
    }
  };

  return (
    <div>
      {props.cityWeatherInfos.map(cityInfo => {
        if (cityInfo.error) {
          return (
            <WeatherCardNotFound key={cityInfo.cityName} cityName={cityInfo.cityName} />
          );
        }
        const {
          cityName,
          icon,
          currentTemp,
          maxTemp,
          minTemp,
          description,
          data
        } = mapCityWeather(cityInfo);
        return (
          <WeatherCard
            key={cityInfo.cityName}
            cityName={cityName}
            icon={icon}
            currentTemp={currentTemp}
            maxTemp={maxTemp}
            minTemp={minTemp}
            description={description}
            data={data}
          />
        );
      })}
    </div>
  );
};

export default WeatherContainer;
