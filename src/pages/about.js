import React from "react";
import logo from "../assets/images/main-logo.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import pinterest from "../assets/images/pinterest.png";
import aboutusmobileimg from "../assets/images/about-us-mobile-img.jpg";
import aboutusdesktopimg from "../assets/images/about-us-desktop-img.jpg";
import "../assets/css/home.css";
function About() {
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
      <section className="content-wrapper about-us">
        <header className="container">
          <h1 className="text-center">About Us</h1>

        </header>
        <div className="about-us-img">
          <img src={aboutusmobileimg} alt="about us mobile img" className="mobile-img" />
          <img src={aboutusdesktopimg} alt="about us desktop img" className="desktop-img" />
        </div>
        <div className="container about-us-content">
          <h2 className="text-center">Our mission is to rebuild hope in American neighborhoods, one home at a time.</h2>
          <p>ANIA Management is a privately-owned company that specializes in property management, owner/investor, construction and maintenance services. ANIA seeks to better communities by hiring locally and building relationships with businesses and community leaders. The property management and leasing team continues to keep properties occupied and delivers a quality experience to tenants.</p>
          <div className="stats">
            <div>
              <strong>4,500+
              </strong>
              <small>units</small>
            </div>
            <div>
              <strong>250+
              </strong>
              <small>employees</small>
            </div>
            <div>
              <strong>25+ years
              </strong>
              <small>as property managers</small>
            </div>
          </div>
          <p>Currently, ANIA is working on revitalizing neighborhoods Paterson, NJ. In addition to building and maintaining modern properties with 24/7 security surveillance, ANIA is involved in community programs which aim to educate and improve the lives of the residents they serve. </p>
          <p>With headquarters in Paterson, NJ, ANIA has over 250 employees and manages over 4,500 units. ANIA also owns and operates properties in New Jersey, Maryland, Tennessee and Georgia.</p>
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

export default About;
