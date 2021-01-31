// Require necessary NPM packages
const express = require("express");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

const Appointments = require("../models/appointment");

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Route
 */

router.post("/Reserve", (req, res) => {
  Appointments.create(req.body, (error, newAppointment) => {
    if (error) {
      res.json(error);
    } else {
      res.json(newAppointment);
    }
  });
});

router.get("/test", (req, res) => {
  console.log("index.js");
  res.json({
    message: "test to index.js",
  });
});

// Export the Router so we can use it in the server.js file
module.exports = router;
