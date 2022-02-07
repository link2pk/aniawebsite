import React from "react";
import logo from "../assets/images/main-logo.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import pinterest from "../assets/images/pinterest.png";
// import dp from "../assets/images/dp.png";

import "../assets/css/home.css";
function Leadership() {
  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-lg-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="alt-img" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto nav-ul">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Find a Unit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Giving Back
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tenant Portal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="content-wrapper leadership">
        <div className="border-bottom">
          <header className="container">
            <h1 className="text-center page-heading">Leadership</h1>
          </header>
        </div>

        <div className="container leadership-content-container">
          <div className="leadership-content">

            <div className="user">
              <div className="user-pic">
                {/* <img src={propertyone} alt="user pic" /> */}
              </div>
              <div className="user-details">
                <h6>Matthew Florio
                </h6>
                <strong>President
                </strong>
              </div>
              <p className="user-description">
                An esteemed real estate developer, sports enthusiast, and a philanthropist. He brings over fifteen years of real estate experience and relationships, acquiring and developing over 4,500 units. Mr. Florio’s real estate holdings are over 700 million.
              </p>
            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Charles Florio
                </h6>
                <strong>CEO
                </strong>
              </div>
              <p className="user-description">
                Charles Florio is involved in all aspects of running the business. His vision helped the company grow to 250 employees, 4,500 units and expand across four states.
              </p>
            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Erik Yu</h6>
                <strong>Controller</strong>
              </div>
              <p className="user-description">
                Erik Yu provides oversight for the company’s accounting operation, cash management and
                financial planning.
              </p>
            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Daniel Gonzalez</h6>
                <strong>Vice President (Acquisitions)</strong>
              </div>
              <p className="user-description">
                Daniel Gonzalez is responsible for property acquisitions, ground-up development and ensuring the companies operational efficiencies.

              </p>
            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Jennifer Martinez
                </h6>
                <strong>Office Administrator
                </strong>
              </div>


            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Marie Castenada
                </h6>
                <strong>Sr. Property Manager</strong>
              </div>

            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Jonathan Then
                </h6>
                <strong>Property Manager</strong>
              </div>

            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Alex Kasperowicz</h6>
                <strong>Property Manager
                </strong>
              </div>

            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Madelyn Rijo</h6>
                <strong>Property Manager
                </strong>
              </div>

            </div>
            <div className="user">
              <div className="user-pic">
              </div>
              <div className="user-details">
                <h6>Isreily Cruz
                </h6>
                <strong>Property Manager
                </strong>
              </div>

            </div>
          </div>
        </div>

      </section>
      <footer className="ania-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <ul className="ania-quicklinks">
                <li>
                  <a href="">find a unit</a>
                </li>
                <li>
                  <a href="">properties</a>
                </li>
                <li>
                  <a href="">giving back</a>
                </li>
                <li>
                  <a href="">about us</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <ul className="ania-quicklinks">
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">leadership</a>
                </li>
                <li className="text-transform-auto">
                  <a href="">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <p className="title text-uppercase">contact us</p>
              <p className="email">info@aniamanagement.com</p>
              <p className="phone">phone: (973) 523-7690</p>
              <p className="address">
                175, Broadway <br />
                Peterson, NJ 07505
              </p>
            </div>
            <div className="col-lg-3">
              <p className="title text-lg-center">Follow us on Social</p>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <img src={facebook} className="img-fluid" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={instagram}
                      className="img-fluid"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={pinterest}
                      className="img-fluid"
                      alt="pinterest"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={linkedin} className="img-fluid" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 mt-5">
              <p className="copyright">
                All Rights Reserved &copy; ANIA Management - 2022
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Leadership;
