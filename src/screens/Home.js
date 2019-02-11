import React from "react";

import MainContainer from "../components/MainContainer";
import WeatherCard from "../components/WeatherCard";
import defaultCities from "../utils/defaultCities";

const Home = () => {
  return (
    <MainContainer>
      {defaultCities.map(cityName => <WeatherCard key={cityName} cityName={cityName} />)}
    </MainContainer>
  );
};

export default Home;
