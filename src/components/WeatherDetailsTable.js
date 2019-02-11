import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import styles from "./WeatherDetailsTable.module.css";

const WeatherDetailsTable = props => {
  const {
    sunrise = null,
    sunset = null,
    humidity = null,
    pressure = null,
    windSpeed = null
  } = props;

  const getFormattedTime = unixValue => {
    if (typeof unixValue !== "number") return <span>Error</span>;
    const time = moment
      .unix(unixValue)
      .format("HH:MM A")
      .split(" ");
    return (
      <span>
        {time[0]}
        <span>{time[1]}</span>
      </span>
    );
  };

  return (
    <div className={styles.tableDetails}>
      <h3 className={styles.title}>Details</h3>
      <div>
        <span>Sunrise*</span>
        {getFormattedTime(sunrise)}
      </div>
      <div>
        <span>Sunset*</span>
        {getFormattedTime(sunset)}
      </div>
      <div>
        <span>Humidity</span>
        <span>
          {humidity}
          <span>%</span>
        </span>
      </div>
      <div>
        <span>Pressure</span>
        <span>
          {pressure}
          <span>hPa</span>
        </span>
      </div>
      <div>
        <span>Wind speed</span>
        <span>
          {windSpeed}
          <span>mps</span>
        </span>
      </div>
      <span className={styles.timeAsUtcMessage}>*Times are shown in UTC</span>
    </div>
  );
};

WeatherDetailsTable.propTypes = {
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  windSpeed: PropTypes.number
};

export default WeatherDetailsTable;
