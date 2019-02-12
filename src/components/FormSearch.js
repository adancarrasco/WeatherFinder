import React, { Component } from "react";

import { fetchWeatherByCityName } from "../utils/weatherSvs";

import styles from "./FormSearch.module.css";

class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: ""
    };
  }

  /**
   * Fetches the weather info; if response.status is 200 fills the state
   * with the weather info, otherwise handles the 404 error or
   * catch a different one
   */
  getWeatherInfo = async cityName => {
    let cityWeatherInfo;
    try {
      const response = await fetchWeatherByCityName(cityName);
      if (!response || response.status !== 200) {
        throw new Error();
      }
      cityWeatherInfo = response.data;
      return { ...cityWeatherInfo, cityName };
    } catch (error) {
      console.error(error);
      return { cityName, error: true };
    }
  };

  handleChange = event => {
    this.setState({ cityName: event.target.value });
  };

  searchWeather = async cityName => {
    const cityWeatherInfo = await this.getWeatherInfo(cityName);
    this.props.handleSearch(cityWeatherInfo);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.searchWeather(this.state.cityName);
  };

  render() {
    return (
      <div className={styles.searchFormContainer}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Input the city name"
            onChange={this.handleChange}
            value={this.state.cityName}
          />
          <input className={styles.searchButton} type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default FormSearch;
