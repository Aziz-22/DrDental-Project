import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Clinics from "./components/Clinics";
import Profile from "./components/Profile";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="mainDiv">
          <Nav />
          <Link to="/Clinics">Clinics</Link>
          <Link to="/Profile">Profile</Link>
          <hr />
          <Route path="/Clinics" component={Clinics} />
          <Route path="/Profile" component={Profile} />
        </div>
      </Router>
    );
  }
}
