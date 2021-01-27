import React, { Component } from "react";
import axios from "axios";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clinics: [],
    };
  }

  getAllClinics = () => {
    axios
      .get(`http://localhost:5000/clinic`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ clinics: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  addNewClinic = () => {
    const newData = {
      clincName: "hel00",
      rating: 3,
      serviceType: "urgent",
    };
    axios
      .post(`http://localhost:5000/clinic`, newData)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ clinics: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  render() {
    const allClinics = this.state.clinics.map((clinic, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td className="cellpadding">
            {clinic.clincName} <a href="">Edit</a> <a href="">Delete</a>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <button onClick={this.getAllClinics}>GET all clinics</button>
        <button onClick={this.addNewClinic}>add new clinics</button>
        {/* <div>{allClinics}</div> */}
        <table class="table w-25">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>{allClinics}</tbody>
        </table>
        <div className="w-25 ml-4">
          <form>
            <div className="form-group">
              <h2>Add Clinic</h2>
              <label className="control-label">Clinic Name</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input className="form-control" placeholder="Enter location" />
            </div>
            <div className="form-group">
              <label>Clinic Image</label>
              <input className="form-control" placeholder="Enter location" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Services</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
