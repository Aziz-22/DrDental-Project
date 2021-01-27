import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Clinics from './components/Clinics';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="mainDiv">
          
          <Link to="/Clinics">Clinics</Link>
          <hr />
          <Route path="/Clinics" component={Clinics} />
        </div>
      </Router>
    );
  }
}