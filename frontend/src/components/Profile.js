import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { getUserProfile, editUser } from "../api";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      input: {},
      succsesMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getUserProfile(this.props.userId)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ user: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  }

  editUserById = (event) => {
    event.preventDefault();
    const id = this.props.userId;
    const editedUser = this.state.input;
    editUser(id, editedUser)
      .then((res) => {
        console.log(`The user with the ID ${id} has been Edited.`);

        console.log("new edited", res.data);
        const succsesMessage = (
          <Alert variant="success">User Updated Profile Succsesfully!</Alert>
        );
        this.setState({ succsesMessage: succsesMessage });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  render() {
    return (
      <div>
        <div id="profileBox">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src={this.state.user.userImage}
                  width="150"
                  height="150"
                  roundedCircle
                />
                <div class="ImageButton">
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Choose your Image
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            URL
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <input
                            name="userImage"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            onClick={this.editUserById}
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <h1>Your Profile</h1>
              </Col>
            </Row>
          </Container>
          <br/>
          <Container>
            <Container>
              <Form>
                {this.state.succsesMessage}
                <Row>
                  <Col sm={8}>
                    {" "}
                    <Form.Group controlId="formGroupName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="Name"
                        placeholder="Enter Name"
                        defaultValue={this.state.user.firstName}
                        onChange={this.handleChange}
                        name="firstName"
                      />
                    </Form.Group>
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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          defaultValue={this.state.user.email}
                          onChange={this.handleChange}
                          name="email"
                        />
                      </div>
                    </Form.Group>
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
                      <Form.Label>Password</Form.Label>
                      <div class="proflabel">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          defaultValue={this.state.user.password}
                          onChange={this.handleChange}
                          name="password"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Col sm={4}>
                  {" "}
                  <button
                    className="btn btn-outline-info
"
                    type="submit"
                    onClick={this.editUserById}
                  >
                    Update
                  </button>
                 
                </Col>
                <br/>
              </Form>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}
