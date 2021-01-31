// Require necessary NPM packages
const express = require("express");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// import the models
const user = require("../models/users");

// const Admin = new user({

//   firstName: "NewUSer",
//   lastName: "New",
//   email: "New@hotmail.com",
//   isAdmin: false,
//   password: 1235,
// });

// Admin.save();

router.post("/signup", (req, res) => {
  user.create(req.body, (error, newUser) => {
    if (error) {
      res.json(error);
    } else {
      res.json(newUser);
    }
  });
});

module.exports = router;
