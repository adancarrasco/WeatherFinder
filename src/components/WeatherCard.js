import React, { Component } from "react";
import PropTypes from "prop-types";

import { fetchWeatherByCityName } from "../utils/weatherSvs";
import WeatherDetailsTable from "./WeatherDetailsTable";

import styles from "./WeatherCard.module.css";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      currentTemp: null,
      maxTemp: null,
      minTemp: null,
      description: null
    };
  }

  componentDidMount() {
    this.fetchWeatherInfo();
  }

  // shouldComponentUpdate() {}

  /**
   * Dynamic import and sets in the state the path for the image in the Card
   * @param {String} imageId - String corresponding to the image from the API response
   */
  async setImage(imageId) {
    let selectedImage = null;
    try {
      selectedImage = await import(`../images/${imageId}.svg`);
      selectedImage = selectedImage.default;
    } catch (e) {
      console.warn(`There was an error loading the image: ${e}`);
    }
    this.setState({ selectedImage });
  }

  /**
   * Fills the Component state from the fetched data
   * @param {Object} data
   */
  fillState(data) {
    const { weather } = data;
    if (weather.length > 0) {
      const { main, icon } = data.weather[0];
      const { temp, temp_max, temp_min } = data.main;
      this.setImage(icon);
      this.setState({
        currentTemp: Math.round(temp),
        maxTemp: temp_max,
        minTemp: temp_min,
        description: main,
        data
      });
    }
  }

  /**
   * Fetches the weather info; if response.status is 200 fills the state
   * with the weather info, otherwise handles the 404 error or
   * catch a different one
   */
  fetchWeatherInfo = () => {
    const { cityName } = this.props;
    fetchWeatherByCityName(cityName)
      .then(response => {
        if (!response || response.status !== 200) {
          throw new Error();
        }
        this.fillState(response.data);
      })
      .catch(error => {
        this.setState({ data: { error: true } });
        console.error(error);
      });
  };

  renderTableDetails() {
    if (this.state.data) {
      const { data } = this.state;
      const { sunrise, sunset } = data.sys;
      const { humidity, pressure } = data.main;
      const { speed } = data.wind;
      return (
        <WeatherDetailsTable
          sunrise={sunrise}
          sunset={sunset}
          humidity={humidity}
          pressure={pressure}
          windSpeed={speed}
        />
      );
    }
    return null;
  }

  renderCard() {
    const { cityName } = this.props;
    const { currentTemp, maxTemp, minTemp, description } = this.state;
    const currentWeatherAlt = "Current weather";

    return this.state.data.error ? (
      <div>City not found</div>
    ) : (
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h3 className={styles.cityName}>{cityName}</h3>
          <div className={styles.imageContainer}>
            <img src={this.state.selectedImage} alt={currentWeatherAlt} />
          </div>
          <div className={styles.tempContainer}>
            <span className={styles.currentTemp}>{currentTemp}°</span>
            <span className={styles.unit}>C</span>
            <div className={styles.minMaxContainer}>
              <span>
                H: <span>{maxTemp}</span>
              </span>
              <span>
                L: <span>{minTemp}</span>
              </span>
            </div>
          </div>
          <div>
            <h3 className={styles.description}>{description}</h3>
          </div>
        </div>
        {this.renderTableDetails()}
      </div>
    );
  }

  render() {
    return this.state.data ? this.renderCard() : null;
  }
}

WeatherCard.propTypes = {
  cityName: PropTypes.string.isRequired
};

export default WeatherCard;
