import React, { Component } from "react";
import "../index.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Clinics from './Clinics'
import Contactus from './Contactus'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
class Nav extends Component {
  render() {
    return (
      <Router>
        <div className="Nav">
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          </nav> */}
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
                  <a class="nav-link" href="Home">
                    Home <span class="sr-only"></span>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="Clinics">
                  Clinics <span class="sr-only"></span>
                  </a>
                </li>
                
                <li class="nav-item active">
                  <a class="nav-link" href="Contactus">
                  Contact Us <span class="sr-only"></span>
                  </a>
                </li>

              </ul>
              <form class="form-inline my-2 my-lg-0">
            
                  <a class="nav-link" href="Login">
                  Login <span class="sr-only"></span>
                  </a>
                  <a class="nav-link" href="SignUp">
                  Sign Up <span class="sr-only"></span>
                  </a>
               
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button
                  variant="info"
                  type="submit"
                >
                  Search
                </Button>
              </form>
            </div>
          </nav>

          {/* <div className="Nav-Links">
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
          </div> */}

          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={Signup} />
            <Route path="/Contactus" component={Contactus} />
            <Route path="/Clinics" component={Clinics} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
