// Require necessary NPM packages
const express = require("express");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// import the models
const User = require("../models/users");
/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get all the clinics
 */
router.get("/Profile/:id", (req, res) => {
  User.findById(req.params.id, (error, User) => {
    if (error) {
      res.json(error);
    } else {
      res.json(User);
    }
  });
});

/**
 * Action:      INDEX
 * Method:      PUT
 * URI:         /
 * Description: update existing clinic
 */
router.put("/Profile/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (error, updateUser) => {
    if (error) {
      res.json(error);
    } else {
      res.json(updateUser);
    }
  });
});

// Export the Router so we can use it in the server.js file
module.exports = router;
