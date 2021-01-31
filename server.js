// Require necessary NPM packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Require Route Files
const indexRouter = require("./routes/index");
// const articlesRouter = require("./routes/articles");
const adminRouter = require("./routes/Admin");

// Sign Up Router
const signUpRouter = require("./routes/SignUp_Back");

// Login Router
const loginRouter = require("./routes/Login_Back");

// Reserve_Appointment Router
const Reserve_AppointmentRouter = require("./routes/Reserve_Appointment");

// User profile Router
const userProfile = require("./routes/Profile");

// User Appointment Router
const userAppointment = require("./routes/Appointments");

// Require DB Configuration File
const db_url = require("./db");

// Establish Database Connection
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});

// user Schema

// Instantiate Express Application Object
const app = express();

app.get("/", (req, res) => {
  console.log("get /");
  res.json("result");
});

/*** Middleware ***/

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application
app.use(express.json());

const reactPort = 3000;
// Set CORS headers on response from this API using the `cors` NPM package.
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

/*** Routes ***/

// Mount imported Routers
app.use(indexRouter);
app.use(adminRouter);
app.use(signUpRouter);
app.use(loginRouter);
app.use(Reserve_AppointmentRouter);
app.use(userProfile);
app.use(userAppointment);

// app.use('/',indexRouter);
// app.use('/articles',articlesRouter);

/*** Routes ***/
// Define PORT for the API to run on
const PORT = process.env.PORT || 5000;

// Start the server to listen for requests on a given port
app.listen(PORT, () => {
  console.log(`BLOGY => http://localhost:${PORT}`);
});

/*
  C.R.U.D - Actions Table

  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/
