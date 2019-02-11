import React, { Component } from "react";

import styles from "./InputSearch.module.css";

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: ""
    };
  }

  handleChange = event => {
    this.setState({ cityName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.cityName);
  };

  render() {
    return (
      <div className={styles.searchFormContainer}>
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="London"
          onChange={this.handleChange}
          value={this.state.cityName}
        />
        <input className={styles.searchButton} type="submit" value="Search" />
      </form>
      </div>
    );
  }
}

export default InputSearch;
