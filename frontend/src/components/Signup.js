import React, { Component } from "react";
import axios from "axios";
import Login from "./Login";
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newUser = this.state.input;
    console.log(newUser);
    axios.post(`http://localhost:5000/signup`, newUser).then((res) => {
      console.log("res");
      console.log(res);
      console.log(res.data);
      alert("New Account created successfully.");

      //Redirect To the Login Page
      window.location.href = "http://localhost:3000/Login";
    });
  }

  handleChange = (event) => {
    let dataInput = this.state.input;

    dataInput[event.target.name] = event.target.value;

    this.setState({
      input: dataInput,
    });
  };
  render() {
    return (
      <div>
        <h1>Create an Account</h1>
        <form className="w-50" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="InputFirstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="InputFirstName"
              aria-describedby="firstName"
              placeholder="First Name"
              name="firstName"
              onChange={this.handleChange}
            />
            <label for="InputLastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="InputLastName"
              aria-describedby="lastName"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleChange}
            />
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
            <label for="Phone">Phone Number</label>
            <input
              type="number"
              class="form-control"
              id="Phone"
              aria-describedby="Phone Number"
              placeholder="Enter Phone Number"
              name="phone"
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Create New Account
          </button>
        </form>
      </div>
    );
  }
}
