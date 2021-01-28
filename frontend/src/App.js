import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Clinics from "./components/Clinics";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Appointment from "./components/Appointment";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="mainDiv">
          <Nav />
          <hr />
          <Route path="/Clinics" component={Clinics} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Appointment" component={Appointment} />
          <Route exact path="/Admin" component={Admin}></Route>
        </div>
      </Router>
    );
  }
}
