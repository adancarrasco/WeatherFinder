import React from "react";

import MainContainer from "../components/MainContainer";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  return (
    <MainContainer>
      <WeatherCard cityName="Berlin" />
    </MainContainer>
  );
};

export default Home;
