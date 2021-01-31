// Require necessary NPM packages
const express = require("express");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// import the models
const user = require("../models/users");

router.post("/login", (req, res) => {
  console.log("My body =>>>> ", req.body);
  // db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
  user.find(
    { $and: [{ email: req.body.email }, { password: req.body.password }] },
    (error, foundUser) => {
      if (error) {
        console.log("NOT FOUND ", error);
        res.json(error);
      } else {
        console.log("FOUND ", foundUser);
        res.json(foundUser);
      }
    }
  );
});

module.exports = router;
