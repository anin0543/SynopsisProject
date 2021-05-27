import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class newRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight_number: "",
      mission_name: "",
      launch_year: "",
      launch_date_local: "",
      launch_success: "",
      rocket_id: "",
      rocket_name: "",
      rocket_type: '',
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  handleCheckChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("New registration ");
    this.props.history.push("/");
  };
  render() {
    const handleChange = this.handleChange;
    return (
      <>
        <Card>
          <h1>fdsfsd</h1>
          <Card.Header as="h5">Register New Lunches</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md="12">
                  <Form.Group>
                    <Form.Label>Flight Number</Form.Label>
                    <Form.Control
                      name="flight_number"
                      type="text"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group>
                    <Form.Label>Mission Name</Form.Label>
                    <Form.Control
                      name="mission_name"
                      type="text"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md="8">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Lunch Year</Form.Label>
                    <Form.Control
                      name="lunch_year"
                      type="text"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group>
                    <Form.Label>Rocket_id</Form.Label>
                    <Form.Control
                      name="rocket_id"
                      type="number"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md="8">
                  <Form.Group>
                    <Form.Label>Rocket Name</Form.Label>
                    <Form.Control
                      name="rocket_name"
                      type="text"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group>
                    <Form.Label>Rocket Type</Form.Label>
                    <Form.Control
                      name="rocket_type"
                      type="text"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md="8">
                  <Form.Group>
                    <Form.Label>Lunch Success</Form.Label>
                    <Form.Control
                      name="lunch_success"
                      type="text"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Text className="text-muted">
                  Please fill up all the required fields.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default newRegistration;
