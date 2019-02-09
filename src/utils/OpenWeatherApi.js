import axios from "axios";

const API_BASE_URL = "https://api.openweathermap.org/data/";
const API_VERSION = "2.5";

class OpenWeatherApi {
  constructor() {
    this._axios = axios.create({
      baseURL: this.getBaseUrl(),

    })
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