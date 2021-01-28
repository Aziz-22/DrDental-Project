import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {

  constructor(props) {
    
    super(props);

    this.state = {


      loginDetails: {},

   
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    
    event.preventDefault();
    const loginData = this.state.loginDetails;
    console.log(loginData);
    axios.post(`http://localhost:5000/login`, loginData).then((res) => {
      console.log(res);
      console.log(res.data);
      alert("Successfully.");
      
      // Redirect to the Home
      window.location.href = "http://localhost:3000/Home";
    });

    // {email:email}
  }

   handleChange = (event) => {
    
    let dataInput = this.state.loginDetails;

    dataInput[event.target.name] = event.target.value;

    this.setState({
      loginDetails: dataInput,
    });
     
    

  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form className="w-50" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Enter email"
              onChange = {this.handleChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value = {this.state.inputEmail}
              onChange = {this.handleChange}
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember Me
            </label>
            <small id="emailHelp" class="form-text text-muted">
              <a href="#">Forget Your Password?</a>
            </small>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
