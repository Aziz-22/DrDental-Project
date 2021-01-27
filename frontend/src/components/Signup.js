import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Create an Account</h1>
        <form className="w-50">
          <div class="form-group">
            <label for="InputFirstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="InputFirstName"
              aria-describedby="firstName"
              placeholder="First Name"
              name="inputFirstName"
            />
            <label for="InputLastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="InputLastName"
              aria-describedby="lastName"
              placeholder="Last Name"
              name="inputLastName"
            />
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
            <label for="Phone">Phone Number</label>
            <input
              type="number"
              class="form-control"
              id="Phone"
              aria-describedby="Phone Number"
              placeholder="Enter Phone Number"
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
