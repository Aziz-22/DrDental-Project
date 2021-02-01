// Require necessary NPM packages
const express = require("express");
const { model } = require("mongoose");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

const Appointments = require("../models/appointment");

const Clinics = require("../models/clinics");

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */

router.post("/Appointment", (req, res) => {
  let appointment = Appointments.find(req.body)
    .populate({
      path: "clinicId",
      select: "-rating -clinicImag -serviceType",
      model: "clinics",
    })
    .then((allAppointment) => {
      res.json(allAppointment);
    })
    .catch((err)=>{
      res.json(err);
    })
  console.log(appointment);
});

// Export the Router so we can use it in the server.js file
module.exports = router;
