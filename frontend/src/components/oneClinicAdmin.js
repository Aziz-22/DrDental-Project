import React, { Component } from "react";

export default class Clinic extends Component {
  deleteClinic = (event) => {
    event.preventDefault();
    this.props.deleteClinic(this.props.id);
  };
  render() {
    return (
      <tr>
        <th scope="row">{this.props.IdNumber}</th>
        <td className="cellpadding">{this.props.Name}</td>
        <td>{this.props.Service}</td>
        <td>{this.props.Rating}</td>
        <td>{this.props.Name}</td>
        <td>
          <a href="">Edit</a>
          {"  "}
          <a href="" onClick={this.deleteClinic}>
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
