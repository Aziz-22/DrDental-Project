import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getAllClinics } from "../api";

export default class Clinics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allClinics: [],
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
  }

  render() {
    const allClinics = this.state.allClinics;
    const clinics = allClinics.map((clinics, index) => {
      return (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                clinics.clinicImage
                  ? clinics.clinicImage
                  : "https://e7.pngegg.com/pngimages/574/699/png-clipart-medicine-pharmacy-consultant-pharmacist-clinic-icon-scanner-heart-cartoon-thumbnail.png"
              }
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
                <Card.Link href={clinics.locationId} target="_blank">Location</Card.Link>
                <Button variant="info">Reserve</Button>
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
