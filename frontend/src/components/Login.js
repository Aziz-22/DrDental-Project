import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Nav from "./Nav";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginDetails: {},
      isLogged: true,
      userId: "",
      error: "",
      isAdmin: false 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const loginData = this.state.loginDetails;
    console.log(loginData);

    // Return True

    axios
      .post(`http://localhost:5000/login`, loginData)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        if (res.data.length != 0) {
          console.log("Found SomeOne");

          if (res.data[0].isAdmin == true) {
            console.log("IS AN ADMIN");
            this.setState({isAdmin: true})
            
          } else if (res.data[0].isAdmin == false) {
            console.log("IS A USER");
            alert("Successfully.");
            this.setState({ islogged: true, userId: res.data[0]._id });
            
          }
          this.LoggedIn();
        } else {
          this.setState({
            error:
              "Wrong password or email. Try again or click Forgot password to reset it",
          });
          // alert("Invalid");
        }

        //   console.log("Not Equal To 0");
        //   console.log("Found User");
        //   alert("Successfully.");
        //   this.setState({ islogged: true, userId: res.data._id });
        //   this.LoggedIn();
        // } else if (res.data[0].isAdmin == true) {
        //   console.log("Found User As Admin");
        //   window.location.href = "http://localhost:3000/Admin";
        // } else {
        //   console.log("ELSE INVALID");
        //   alert("Invalid Input");
        // }
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  // isValidate = () => {
  //   let isValid = true;
  //   const loginData = this.state.loginDetails;

  //   console.log("Data ", loginData, " Password ", loginData.password);

  //   // if(loginData.password ===  )
  //   return isValid;
  // };

  handleChange = (event) => {
    let dataInput = this.state.loginDetails;

    dataInput[event.target.name] = event.target.value;

    this.setState({
      loginDetails: dataInput,
      error: "",
    });
  };

  LoggedIn = () => {
    let LoginState = true;
    let iduser = "" 
    let Admin = false

    localStorage.setItem("loggedin", JSON.stringify(LoginState));
    const lggedin = JSON.parse(localStorage.getItem("loggedin"));
    LoginState = true;
    localStorage.setItem("loggedin", JSON.stringify(LoginState));

    localStorage.setItem("admin", JSON.stringify(Admin));
    const admin = JSON.parse(localStorage.getItem("admin"));
    Admin = this.state.isAdmin;
    localStorage.setItem("admin", JSON.stringify(Admin));

    localStorage.setItem("id", JSON.stringify(iduser));
    const userId = JSON.parse(localStorage.getItem("id"));
    iduser = this.state.userId;
    localStorage.setItem("id", JSON.stringify(iduser));
    console.log(JSON.parse(localStorage.getItem("id")))
    this.props.isLogged();

    if(this.state.isAdmin){
      window.location.href = "http://localhost:3000/Admin";
    }else{
      window.location.href = "http://localhost:3000/Home";
    }
    

  };

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Login</h1>

        <span style={{ color: "red", textAlign: "center", display: "block" }}>
          {this.state.error}
        </span>

        <div className="row justify-content-md-center">
          <form className="" onSubmit={this.handleSubmit}>
            <div class="col-md-12">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="col-md-12 ">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={this.state.inputEmail}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ marginTop: "10px" }} class="form-check">
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
            <div class="col-md-12">
              <button
                style={{ width: "100%", marginTop: "10px" }}
                type="submit"
                class="btn btn-primary"
                
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
