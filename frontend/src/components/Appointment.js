import React, { Component } from "react";
import { getUserAppointment } from "../api";

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAppointment: [],
    };
  }
  componentDidMount() {
    console.log(this.props.userId);
   
    let userId = {}
    userId["patientId"] = this.props.userId;
    if(this.props.isLogged === true){
      getUserAppointment(userId)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ userAppointment: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
    }
   
  }

  render() {
    const allAppointment = this.state.userAppointment.map(
      (appointment, index) => {
        return (
          <tr>
            <th scope="row">{index + 1}</th>

            <td>{appointment.clinicId.clincName}</td>
            <td>{appointment.date}</td>
            <td></td>
          </tr>
        );
      }
    );

    return (
      <div className="d-flex justify-content-center mt-5">
        <table class="table w-75 text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Clinic Name</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{allAppointment}</tbody>
        </table>
      </div>
    );
  }
}
