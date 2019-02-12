import React, { Component } from "react";

import MainContainer from "../components/MainContainer";
import defaultCities from "../utils/defaultCities";
import FormSearch from "../components/FormSearch";
import WeatherContainer from "../components/WeatherContainer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityWeatherInfos: []
    };
  }

  componentDidMount() {
    this.initDefaultCities();
  }

  handleSearch = cityWeatherInfo => {
    this.setState({
      cityWeatherInfos: [cityWeatherInfo, ...this.state.cityWeatherInfos]
    });
  };

  initDefaultCities = () => {
    defaultCities.map(cityName => this.formSearch.searchWeather(cityName));
  };

  render() {
    return (
      <MainContainer>
        <FormSearch
          ref={obj => {
            this.formSearch = obj;
          }}
          handleSearch={this.handleSearch}
        />
        <WeatherContainer cityWeatherInfos={this.state.cityWeatherInfos} />
      </MainContainer>
    );
  }
}

export default Home;
