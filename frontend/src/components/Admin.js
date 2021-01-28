import React, { Component } from "react";
import axios from "axios";
import { getAllClinics, AddNewClinic, deleteClinicByID } from "../api";
import Clinic from "./oneClinicAdmin";
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clinics: [],
      input: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    getAllClinics()
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ clinics: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      const post = this.state.input;
      console.log(post);
      AddNewClinic(post)
        .then((res) => {
          console.log("res");
          console.log(res);
          console.log(res.data);
          alert("Clinic created successfully.");
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["clincName"]) {
      isValid = false;
      errors["clincName"] = "Please enter your Clinic Name.";
    }
    if (!input["serviceType"]) {
      isValid = false;
      errors["serviceType"] = "Please enter your Services.";
    }
    this.setState({
      errors: errors,
    });
    return isValid;
  }

  deleteClinic = (id) => {
    deleteClinicByID(id)
      .then((res) => {
        console.log(`The Article with the ID ${id} has been deleted.`);

        const newClinicsList = this.state.clinics.filter((clinic) => {
          return clinic._id !== id;
        });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  render() {
    const allClinics = this.state.clinics.map((clinic, index) => {
      return (
        <Clinic
          Name={clinic.clincName}
          Service={clinic.serviceType}
          Rating={clinic.rating}
          id={clinic._id}
          deleteClinic={this.deleteClinic}
          key={index}
          IdNumber={index + 1}
          Image={clinic.clinicImage}
        />
      );
    });
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Services</th>
              <th scope="col">Rating</th>
              <th scope="col">Location</th>
              <th scope="col">Image</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>{allClinics}</tbody>
        </table>
        <div className="w-25 ml-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h2>Add Clinic</h2>
              <label className="control-label">Clinic Name</label>
              <input
                className="form-control"
                placeholder="Enter Name"
                onChange={this.handleChange}
                name="clincName"
                value={this.state.input.clincName}
              />
              <div className="text-danger">{this.state.errors.clincName}</div>
            </div>
            {/* <div className="form-group">
              <label>Location</label>
              <input
                className="form-control"
                placeholder="Enter Location"
                onChange={this.handleChange}
                name="locationId" 
                value={this.state.input.locationId}
              />
            </div> */}
            <div className="form-group">
              <label>Clinic Image</label>
              <input
                className="form-control"
                placeholder="Enter Image"
                onChange={this.handleChange}
                name="clinicImage"
                value={this.state.input.clinicImage}
                type="file"
              />
            </div>
            <div className="form-group">
              <label>Services</label>
              <input
                className="form-control"
                placeholder="Enter email"
                name="serviceType"
                onChange={this.handleChange}
                value={this.state.input.serviceType}
              />
              <div className="text-danger">{this.state.errors.serviceType}</div>
            </div>
            <div className="form-group">
              <label>Rating</label>
              <select
                className="form-control"
                name="rating"
                id="ratings"
                onChange={this.handleChange}
                value={this.state.input.rating}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {/* <input
                className="form-control"
                placeholder="Enter email"
                name="rating"
               
              /> */}
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
