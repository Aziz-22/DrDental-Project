import React, { Component } from "react";
import "../index.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Clinics from "./Clinics";
import Contactus from "./Contactus";
import Appointment from "./Appointment";
import Profile from "./Profile";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      userId: "",
    };
  }
  isLogged = (isLogged, userId) => {
    this.setState({ isLogged: isLogged, userId: userId });
    console.log(isLogged, userId);
  };
  LoggedOut = () => {
    console.log("Logout");
    this.setState({ isLogged: false });
  };
  render() {
    return (
      <Router>
        <div className="Nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Dr.Dental
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/Home">
                    <a class="nav-link" href="">
                      Home <span class="sr-only"></span>
                    </a>
                  </Link>
                </li>

                <li class="nav-item active">
                  <Link to="/Clinics">
                    <a class="nav-link" href="">
                      Clinics <span class="sr-only"></span>
                    </a>
                  </Link>
                </li>

                <li class="nav-item active">
                  <Link to="/Contactus">
                    <a class="nav-link" href="">
                      Contact Us <span class="sr-only"></span>
                    </a>
                  </Link>
                </li>
              </ul>

              {this.state.isLogged ? (
                <div class="btn-group dropleft">
                  <button
                    className="logedinIcon"
                    type="button"
                    class="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className={`material-icons`}>account_circle</span>
                  </button>
                  <div class="dropdown-menu">
                    <Link to="/Profile">
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </Link>
                    <Link to="/Appointment">
                      <a class="dropdown-item" href="#">
                        Appointment
                      </a>
                    </Link>
                    <Link to="/Home">
                      <a class="dropdown-item" href="" onClick={this.LoggedOut}>
                        Logout <span class="sr-only"></span>
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                <form class="form-inline my-2 my-lg-0">
                  <Link to="/Login">
                    <a class="nav-link" href="">
                      Login <span class="sr-only"></span>
                    </a>
                  </Link>
                  <Link to="/SignUp">
                    <a class="nav-link" href="">
                      Sign Up <span class="sr-only"></span>
                    </a>
                  </Link>
                </form>
              )}
            </div>
          </nav>

          <Switch>
            <Route path="/Home" component={Home} />
            <Route
              path="/Login"
              component={() => <Login isLogged={this.isLogged} />}
            />
            <Route path="/SignUp" component={Signup} />
            <Route path="/Contactus" component={Contactus} />
            <Route
              path="/Clinics"
              component={() => (
                <Clinics
                  userId={this.state.userId}
                  isLogged={this.state.isLogged}
                />
              )}
            />
            <Route
              path="/Profile"
              component={() => (
                <Profile
                  userId={this.state.userId}
                  isLogged={this.state.isLogged}
                />
              )}
            />
            <Route
              path="/Appointment"
              component={() => (
                <Appointment
                  userId={this.state.userId}
                  isLogged={this.state.isLogged}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
