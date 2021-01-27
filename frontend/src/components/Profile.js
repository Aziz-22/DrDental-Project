import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div id="profileBox">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  width="150"
                  height="150"
                  roundedCircle
                />
                <div class="ImageButton">
                  <Button variant="outline-dark">Choose your Image</Button>
                </div>
                <div class="uplosdImage">
                  <p>Upload your Image</p>
                </div>
              </Col>
              <Col>
                <h1>your Profile</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Container>
              <Form>
                <Row>
                  <Col sm={8}>
                    {" "}
                    <Form.Group controlId="formGroupName">
                      <Form.Label>Edit your Name</Form.Label>
                      <Form.Control type="Name" placeholder="Enter Name" />
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    {" "}
                    <p>
                      <a href="">Update</a>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Container>
            <Container>
              <Form>
                <Row>
                  <Col sm={8}>
                    {" "}
                    <Form.Group controlId="formGroupEmail">
                      <div class="proflabel">
                        <Form.Label>Edit your Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    {" "}
                    <p>
                      <a href="">Update</a>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Container>
            <Container>
              <Form>
                <Row>
                  <Col sm={8}>
                    {" "}
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Edit your Password</Form.Label>
                      <div class="proflabel">
                        <Form.Control type="password" placeholder="Password" />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    {" "}
                    <p>
                      <a href="">Update</a>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}
