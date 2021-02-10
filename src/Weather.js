import React, { Component } from "react";

const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=1a2363f2dc8b80e9b8b8781b3756e20e&units=metric";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    return (
      <div>
        <p>Right now it's {this.state.data ? this.state.data.weather[0].description : '?'} and {this.state.data ? this.state.data.main.temp.toFixed(1) : '?'} °C
        but it feels like {this.state.data ? this.state.data.main.feels_like.toFixed(1) : '?'} °C.</p>
      </div>
    )
  }

}

export default Weather;