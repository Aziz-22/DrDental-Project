import React, { Component } from "react";
import axios from "axios";
import { getAllClinics, AddNewClinic, deleteClinicByID } from "../api";
import OneClinicAdmin from "./oneClinicAdmin";

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
      const newClinic = this.state.input;
      console.log(newClinic);
      AddNewClinic(newClinic)
        .then((res) => {
          console.log("res");
          console.log(res);
          console.log(res.data);
          alert("Clinic created successfully.");
          const newClinicsList = this.state.clinics.filter((clinic) => {
            return clinic;
          });
         
          console.log(newClinicsList.push(newClinic));
          this.setState({clinics:newClinicsList})
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
    if (!input["clinicImage"]) {
      input["clinicImage"] =
        "https://e7.pngegg.com/pngimages/574/699/png-clipart-medicine-pharmacy-consultant-pharmacist-clinic-icon-scanner-heart-cartoon-thumbnail.png";
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
        console.log(newClinicsList);
        this.funcSetClinics(newClinicsList);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  funcSetClinics = (newClinics) => {
    this.setState({ clinics: newClinics });
  };


  render() {
    const allClinics = this.state.clinics.map((clinic, index) => {
      return (
        <OneClinicAdmin
          Name={clinic.clincName}
          Service={clinic.serviceType}
          Rating={clinic.rating}
          id={clinic._id}
          deleteClinic={this.deleteClinic}
          key={index}
          IdNumber={index + 1}
          Image={clinic.clinicImage}
          location={clinic.locationId}
          clinics={this.state.clinics}
          updatedAt={clinic.updatedAt}
        />
      );
    });
    return (
      <div>
        {/* <!-- Button trigger modal --> */}
        <div class="col-md-12 text-center">
          <button
            type="button"
            class="btn btn-info "
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add New Clinic
          </button>
        </div>
        <hr></hr>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Services</th>
              <th scope="col">Rating</th>
              <th scope="col">Image</th>
              {/* <th scope="col">Location</th> */}
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          {allClinics}
        </table>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add New Clinic
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div>
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
                      <div className="text-danger">
                        {this.state.errors.clincName}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <input
                        className="form-control"
                        placeholder="Enter Location"
                        onChange={this.handleChange}
                        name="locationId"
                        value={this.state.input.locationId}
                      />
                    </div>
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
                    <div className="form-group">
                      <label>Services</label>
                      <input
                        className="form-control"
                        placeholder="Enter email"
                        name="serviceType"
                        onChange={this.handleChange}
                        value={this.state.input.serviceType}
                      />
                      <div className="text-danger">
                        {this.state.errors.serviceType}
                      </div>
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
                        <option selected="selected" value="1">
                          1
                        </option>
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
                    {/* <button type="submit" className="btn btn-primary">
              Submit
            </button> */}
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" class="btn btn-info">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
