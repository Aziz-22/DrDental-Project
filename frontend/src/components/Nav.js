import React, { Component } from "react";
import "../index.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Clinics from "./Clinics";
import Contactus from "./Contactus";
import Appointment from "./Appointment";
import Profile from "./Profile";
import Admin from "./Admin";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: JSON.parse(localStorage.getItem("loggedin")),
      userId: JSON.parse(localStorage.getItem("id")),
      isAdmin: JSON.parse(localStorage.getItem("admin")),
    };
  }
  isLogged = () => {
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("loggedin"));
    // this.setState({ isLogged: JSON.parse(localStorage.getItem('loggedin')), userId: JSON.parse(localStorage.getItem('id'))});
    console.log(this.state.isLogged, this.state.userId);
  };

  LoggedOut = () => {
    console.log("Logout");
    localStorage.clear();
    this.setState({ isLogged: false });
  };
  render() {
    return (
      <Router>
        <div className="Nav">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">
              <img src="https://i.imgur.com/NF0AUHu.png" width="70%" ></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/Home">
                    <a className="nav-link" href="">
                      Home <span className="sr-only"></span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item active">
                  <Link to="/Clinics">
                    <a className="nav-link" href="">
                      Clinics <span className="sr-only"></span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item active">
                  <Link to="/Contactus">
                    <a className="nav-link" href="">
                      Contact Us <span className="sr-only"></span>
                    </a>
                  </Link>
                </li>
              </ul>

              {this.state.isLogged ? (
                <div className="btn-group dropleft">
                  <button
                    className="logedinIcon"
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className={`material-icons`}>account_circle</span>
                  </button>

                  {this.state.isAdmin ? (
                   <div className="dropdown-menu">
                  
                   <Link to="/Home">
                     <a
                       className="dropdown-item"
                       href=""
                       onClick={this.LoggedOut}
                     >
                       Logout <span className="sr-only"></span>
                     </a>
                   </Link>
                 </div>
                  ) : (
                    <div className="dropdown-menu">
                      <Link to="/Profile">
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </Link>
                      <Link to="/Appointment">
                        <a className="dropdown-item" href="#">
                          Appointment
                        </a>
                      </Link>
                      <Link to="/Home">
                        <a
                          className="dropdown-item"
                          href=""
                          onClick={this.LoggedOut}
                        >
                          Logout <span className="sr-only"></span>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <form className="form-inline my-2 my-lg-0">
                  <Link to="/Login">
                    <a className="nav-link" href="">
                      Login <span className="sr-only"></span>
                    </a>
                  </Link>
                  <Link to="/SignUp">
                    <a className="nav-link" href="">
                      Sign Up <span className="sr-only"></span>
                    </a>
                  </Link>
                </form>
              )}
            </div>
          </nav>

          <Switch>
            <Route path="/Home" component={Home} />
            <Route
              path="/Login"
              component={() => <Login isLogged={this.isLogged} />}
            />
            <Route path="/SignUp" component={Signup} />
            {/* <Abduaziz And Shahad> */}
            <Route path="/Admin" component={Admin} />
            {/* </Abduaziz And Shahad/> */}
            <Route path="/Contactus" component={Contactus} />
            <Route path="/Admin" component={Admin} />
            <Route
              path="/Clinics"
              component={() => (
                <Clinics
                  userId={this.state.userId}
                  isLogged={this.state.isLogged}
                />
              )}
            />
            <Route
              path="/Profile"
              component={() => (
                <Profile
                  userId={this.state.userId}
                  isLogged={this.state.isLogged}
                />
              )}
            />
            <Route
              path="/Appointment"
              component={() => (
                <Appointment
                  userId={this.state.userId}
                  isLogged={this.state.isLogged}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
