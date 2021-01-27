import React, { Component } from "react";
import "../index.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <Router>
        <div className="Nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="Home">
              Dr.Dental
            </a>

            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="Login">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="SignUp">
                    Sign Up
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          <div className="Nav-Links">
            <ul class="nav justify-content-center">
              <li class="nav-items">
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li class="nav-items">
                <a class="nav-link" href="#">
                  Clinics
                </a>
              </li>
              <li class="nav-items">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
