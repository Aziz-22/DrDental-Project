import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getAllClinics, AddNewAppointment,getUserAppointment } from "../api";
import moment from "moment";
import ReactTimeslotCalendar from "react-timeslot-calendar";
import AvailableTimes from "react-available-times";

export default class Clinics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allClinics: [],
      date: new Date(),
      newAppointment: {},
      allAppointment: [],
      clinicId: "",
    };
  }
  componentDidMount() {
    getAllClinics()
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ allClinics: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });

    console.log(this.props.userId);
    let userId = {}
    userId["patientId"] = this.props.userId;
    if(this.props.isLogged === true){
      getUserAppointment(userId)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ allAppointment: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
    }
  }



  addAppointment = (clinicId) => {
    console.log(clinicId);
    let newAppointment = this.state.newAppointment;
    console.log("Date in adding", this.state.date)
    newAppointment["date"] = this.state.date.toLocaleString("en-US", {timeZone: "Etc/GMT-6"});

    newAppointment["patientId"] = this.props.userId;
    newAppointment["clinicId"] = clinicId;
  
      AddNewAppointment(newAppointment)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ allAppointment: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
    // }
   
  };

  printclinicId = (clinicId) => {
    this.setState({ clinicId: clinicId });
  };


  render() {
    const allClinics = this.state.allClinics;
    const clinics = allClinics.map((clinics, index) => {
      return (
        
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={clinics.clinicImage}
              width="250"
              height="250"
            />
            <Card.Body>
              <Card.Title>{clinics.clincName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {clinics.rating + "/5"}
              </Card.Subtitle>
              <Card.Text>
                {clinics.serviceType} <hr></hr>
              </Card.Text>
              <div className="reserveButton">
                <Card.Link href={clinics.locationId} target="_blank">
                  Location
                </Card.Link>
                {this.props.isLogged ?( <button
                  type="button"
                  class="btn btn-info"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    this.printclinicId(clinics._id);
                  }}
                >
                  Reserve
                </button>) : ( <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => {
                    alert("you have to login :)")
                  }}
                >
                  Reserve
                </button>)}
               

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog	modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Pick a date
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
                        <AvailableTimes
                          weekStartsOn="sunday"
                          
                          onChange={(selections) => {
                            selections.forEach(({ start, end }) => {
                              this.setState({date:start})
                              console.log("Start:", start, "End:", end);
                            });
                          }}
                        
                          height={400}
                          recurring={false}
                          availableDays={[
                            "sunday",
                            "monday",
                            "tuesday",
                            "wednesday",
                            "thursday",
                          ]}
                          availableHourRange={{ start: 9, end: 19 }}
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          onClick={() => {
                            this.addAppointment(this.state.clinicId);
                          }}
                          class="btn btn-primary"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <Row>{clinics}</Row>
        </Container>
      </div>
    );
  }
}
