import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Weather from "./Weather/Weather";

const main = (props) => {
  return (
    <div>
      <Header />
      <Home />
      <Weather
        location={props.location}
        change={props.change}
        Submit={props.Submit}
        latitude={props.latitude}
        longitude={props.longitude}
        description={props.description}
        temperature={props.temperature}
        feels_like={props.feels_like}
        error={props.error}
      />
    </div>
  );
};

export default main;
