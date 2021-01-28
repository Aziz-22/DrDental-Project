import React, { Component } from "react";
import axios from "axios";
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
      axios.post(`http://localhost:5000/clinic`, post).then((res) => {
        console.log("res");
        console.log(res);
        console.log(res.data);
        alert("Clinic created successfully.");
      });
    }
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
  render() {
    const allClinics = this.state.clinics.map((clinic, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td className="cellpadding">{clinic.clincName}</td>
          <td>{clinic.serviceType}</td>
          <td>{clinic.rating}</td>
          <td>{clinic.locationId}</td>
          <td>
            <a href="">Edit</a>
            {"  "} <a href="">Delete</a>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <button onClick={this.getAllClinics}>GET all clinics</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Services</th>
              <th scope="col">Rating</th>
              <th scope="col">Location</th>
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
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Services</label>
              <input
                className="form-control"
                placeholder="Enter email"
                name="serviceType"
                onChange={this.handleChange}
                value={this.state.input.serviceType}
              />
              <div className="text-danger">{this.state.errors.serviceType}</div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Rating</label>
              <input
                className="form-control"
                placeholder="Enter email"
                name="rating"
                onChange={this.handleChange}
                value={this.state.input.rating}
              />
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
