import React, { Component } from "react";
import PropTypes from "prop-types";

import WeatherDetailsTable from "./WeatherDetailsTable";

import styles from "./WeatherCard.module.css";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null
    };
  }

  componentDidMount() {
    this.setImage(this.props.icon);
  }

  /**
   * Dynamic import and sets in the state the path for the image in the Card
   * @param {String} imageId - String corresponding to the image from the API response
   */
  async setImage(imageId) {
    let selectedImage = null;
    try {
      selectedImage = await import(`../images/${imageId}.svg`);
      selectedImage = selectedImage.default;
      this.setState({ selectedImage });
    } catch (e) {
      console.warn(`There was an error loading the image: ${e}`);
    }
    return selectedImage;
  }

  renderTableDetails = () => {
    if (this.props.data) {
      const { data } = this.props;
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
  };

  renderCard = () => {
    const { cityName, currentTemp, maxTemp, minTemp, description } = this.props;
    const currentWeatherAlt = "Current weather";

    return (
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
  };

  render() {
    return this.props.data ? this.renderCard() : null;
  }
}

WeatherCard.propTypes = {
  cityName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  windSpeed: PropTypes.number
};

export default WeatherCard;
