import React from "react";

import styles from "./WeatherCardNotFound.module.css";

const WeatherCardNotFound = props => {
  return (
    <div className={styles.container} key={props.cityName}>{`"${
      props.cityName
    }" city was not found`}</div>
  );
};

export default WeatherCardNotFound;
