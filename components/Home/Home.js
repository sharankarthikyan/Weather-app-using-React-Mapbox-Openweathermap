import React, { Component } from "react";
import Welcome from "../Welcome/Welcome";
import classes from "./Home.css";

class home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <div className="container">
          <Welcome />
        </div>
      </div>
    );
  }
}

export default home;
