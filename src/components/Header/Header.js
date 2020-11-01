import React from "react";
import { Navbar } from "react-bootstrap";

const header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="/">Twinkle Weathers</Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default header;
