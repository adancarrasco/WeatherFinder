import OpenWeatherApi from "./OpenWeatherApi";

export const fetchWeatherByCityName = cityName =>
  OpenWeatherApi.get("weather", { params: { q: cityName } });
