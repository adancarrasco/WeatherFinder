import axios from "axios";
import { OPEN_WEATHER_APP_ID } from "../utils/env";

const API_BASE_URL = "https://api.openweathermap.org/data/";
const API_VERSION = "2.5";
const UNITS = "metric";

class OpenWeatherApi {
  constructor() {
    this._axios = axios.create({
      baseURL: this.getBaseUrl(),
      params: {
        APPID: OPEN_WEATHER_APP_ID,
        units: UNITS
      }
    });
  }

  getBaseUrl() {
    return API_BASE_URL + API_VERSION;
  }

  get(url, config) {
    return this._axios.get(url, config);
  }

  // All other verbs can be defined here
}

export default new OpenWeatherApi();
