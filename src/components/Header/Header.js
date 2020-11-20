import React from "react";
import { Navbar } from "react-bootstrap";
import Brand from "../../assets/images/TwinkleWeathers2.svg";

const header = () => {
  return (
    <Navbar bg="light" variant="light">
      <div className="container">
        <Navbar.Brand href="/">
          <img src={Brand} alt="" width="150px" />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default header;
