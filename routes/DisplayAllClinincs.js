// Require necessary NPM packages
const express = require("express");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// import the models
const clinic = require("../models/clinics");
/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get all the clinics
 */
router.get("/clinic", (req, res) => {
  clinic.find({}, (error, allClinics) => {
    if (error) {
      res.json(error);
    } else {
      res.json(allClinics);
    }
  });
});

// Export the Router so we can use it in the server.js file
module.exports = router;
