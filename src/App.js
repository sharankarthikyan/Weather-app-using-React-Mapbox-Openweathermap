import "./App.scss";
import React, { Component } from "react";
import Main from "./components/Main";
import axios from "axios";
import MapGL from "react-map-gl";
import Pins from "./components/Pins";
import Footer from "./components/Footer/Footer";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2hhcmFuayIsImEiOiJja2dxZWd6NTUwMHMyMzBreWMyeG9ibGlqIn0.e_e0U1tzKglQNrn4jX09sg";

class App extends Component {
  state = {
    location: "",
    latitude: "",
    longitude: "",
    temperature: "",
    description: "",
    feels_like: "",
    submit: false,
    count: 1,
    zoom: 10,
    bearing: 0,
    pitch: 0,
    error: "",
  };

  handleChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submit: true });
    console.log(this.state);
  };

  _onClickMarker = (city) => {
    this.setState({ popupInfo: city });
  };

  render() {
    let map = "";
    if (this.state.submit && this.state.count === 1) {
      const geocodeURL =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        this.state.location +
        ".json?limit=1&access_token=pk.eyJ1Ijoic2hhcmFuayIsImEiOiJja2dxZWd6NTUwMHMyMzBreWMyeG9ibGlqIn0.e_e0U1tzKglQNrn4jX09sg";
      axios
        .get(geocodeURL)
        .then((response) => {
          const latitude = response.data.features[0].geometry.coordinates[1];
          const longitude = response.data.features[0].geometry.coordinates[0];
          this.setState({ latitude: latitude, longitude: longitude });
          const weatherUrl =
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&exclude=hourly,minutely&units=metric&cnt=1&appid=988ae15267a77da513d7a840511c135d";
          axios
            .get(weatherUrl)
            .then((response) => {
              const description = response.data.daily[0].weather[0].description;
              const temperature = response.data.current.temp;
              const feels_like = response.data.current.feels_like;
              this.setState({
                description: description,
                temperature: temperature,
                feels_like: feels_like,
              });
            })
            .catch((error) => {
              this.setState({ error: "Something went wrong :(" });
            });
        })
        .catch((error) => {
          this.setState({ error: "Something went wrong :(" });
        });
      this.setState({ count: 2 });
    }

    if (this.state.latitude !== "" && this.state.longitude !== "") {
      map = (
        <div className="Map">
          <MapGL
            {...this.state}
            width="80vw"
            height="80vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => this.setState({ viewport })}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            <Pins
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              onClick={this._onClickMarker}
            />
          </MapGL>
        </div>
      );
    }

    return (
      <div className="App">
        <Main
          location={this.state.location}
          change={(event) => this.handleChange(event)}
          Submit={(e) => this.handleSubmit(e)}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          description={this.state.description}
          temperature={this.state.temperature}
          feels_like={this.state.feels_like}
          error={this.state.error}
        />
        <div>
          <div className="d-flex justify-content-center">
            <div>{map}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
