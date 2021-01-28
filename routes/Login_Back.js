// Require necessary NPM packages
const express = require("express");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// import the models
const user = require("../models/users");


router.post("/login", (req, res) => {

    console.log("My body =>>>> ", req.body);
    
  user.findOne({email: req.body.email}, (error, foundUser) => {
    if (error) {
      res.json(error);
    } else {
    console.log(foundUser);
      res.json(foundUser);
    }
  });
});


module.exports = router;