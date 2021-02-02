// Require necessary NPM packages
const express = require("express");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

const Appointments = require("../models/appointment");

/**
 * Action:      INDEX
 * Method:      POST
 * URI:         /
 * Description: create new appointment 
 */

router.post("/Reserve", (req, res) => {
  console.log(req.body.date)
  Appointments.create(req.body, (error, newAppointment) => {
    if (error) {
      res.json(error);
    } else {
      res.json(newAppointment);
    }
  });
});


// Export the Router so we can use it in the server.js file
module.exports = router;
