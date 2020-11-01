import React, { Component } from "react";
import Input from "../Input/Input";
import classes from "./Weather.css";

class weather extends Component {
  render() {
    return (
      <div className="pt-5">
        <div className={classes.Weather}>
          <Input
            location={this.props.location}
            change={this.props.change}
            Submit={this.props.Submit}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            description={this.props.description}
            temperature={this.props.temperature}
            feels_like={this.props.feels_like}
          />
        </div>
      </div>
    );
  }
}

export default weather;
