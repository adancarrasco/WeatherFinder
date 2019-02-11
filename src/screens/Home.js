import React, {Component} from "react";

import MainContainer from "../components/MainContainer";
import WeatherCard from "../components/WeatherCard";
import defaultCities from "../utils/defaultCities";
import InputSearch from "../components/InputSearch";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      cities: defaultCities
    }
  }
  
  handleSearch = value => {
    this.setState({cities: [value]});
  }

  render() {
    return (
    <MainContainer>
      <InputSearch handleSearch={this.handleSearch} />
      {this.state.cities.map(cityName => <WeatherCard key={cityName} cityName={cityName} />)}
    </MainContainer>
  );
    }
}

export default Home;
