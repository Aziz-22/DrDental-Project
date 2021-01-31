import React, { Component } from "react";
import App from "../App";

import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Images... </h2>

        <div
          id="carouselExample1"
          class="carousel slide z-depth-1-half"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://www.atlantic-clinic.es/wp-content/uploads/2015/06/banner-atlantic-clinic-nueva-andalucia-marbella.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://gpadental.com/wp-content/uploads/2018/11/gpa-dental-group-restoration-dentistry-slider.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://static.showit.co/1200/NVyu1HUlT1i7YcsOdIg2Sg/84619/fmc-dental-clinic-background.png"
                alt="Third slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1005/https://www.pearlalignbraces.com/wp-content/uploads/2020/08/Dental-braces-in-Bangalore-Pearl-Align-orthodontic-clinic-teeth-alignment.png"
                alt="Fourth slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExample1"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExample1"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <h1>About Us</h1>
        <p>Hello Pa</p>
        <div>
          <h3 className="One">
            Service One
            <p>Tooth</p>
          </h3>

          <h3 className="Two">
            Service Two
            <p>Tooth Two</p>
          </h3>

          <h3 className="Three">
            Service Three
            <p>Tooth Three</p>
          </h3>
        </div>
        <footer style={{ backgroundColor: "lightgray" }}>
          <div className="social-icons">
            <ul className="Social-Icon">
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
          <small className="website-rights"> 2021 © Dr. Dental </small>
        </footer>
      </div>
    );
  }
}
