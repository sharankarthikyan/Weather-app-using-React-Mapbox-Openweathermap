import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./Input.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const input = (props) => {
  let a = "";
  if (props.latitude !== "" && props.longitude !== "") {
    a = (
      <div>
        <Row className="pt-3">
          <Col md={{ span: 3, offset: 3 }}>Latitude: {props.latitude}</Col>
          <Col md={{ span: 3, offset: 0 }}>Longitude: {props.longitude}</Col>
        </Row>
        <Row className="pt-3">
          <Col md={{ span: 6, offset: 3 }}>
            It is {props.description} with the temperature of{" "}
            {props.temperature} degree celsius and It's feels like{" "}
            {props.feels_like} degree celsius.
          </Col>
        </Row>
        <Row className="pt-3">
          <Col md={{ span: 8, offset: 3 }}>
            <p style={{ color: "orange" }}>
              Please kindly refresh the page for new weather search
            </p>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div className={classes.Form}>
      <Form onSubmit={props.Submit}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h5>Find the weather of any place :)</h5>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col md={{ span: 8, offset: 3 }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="col-sm-8"
                type="text"
                placeholder="Enter Location"
                value={props.location}
                onChange={props.change}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 3 }}>
            <Button className="col-sm-8" variant="primary" type="submit">
              Find
            </Button>
          </Col>
        </Row>
        {a}
        <Row className="pt-3">
          <Col md={{ span: 8, offset: 3 }}>
            <p>{props.error}</p>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default input;
