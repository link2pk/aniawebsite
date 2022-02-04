import React from "react";
import logo from "../assets/images/main-logo.png";
import banner from "../assets/images/banner.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import pinterest from "../assets/images/pinterest.png";
import construction from "../assets/images/icon-construction.png";
import development from "../assets/images/icon-development.png";
import investment from "../assets/images/icon-investment.png";
import management from "../assets/images/icon-management.png";
import communityone from "../assets/images/image-community-1.png";
import communitytwo from "../assets/images/image-community-2.png";
import propertyone from "../assets/images/property-1.png";
import propertytwo from "../assets/images/property-2.png";
import propertythree from "../assets/images/property-3.png";
import propertyfour from "../assets/images/property-4.png";
import "../assets/css/home.css";
function Home() {
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
      <section className="content-wrapper">
        <div className="ania-banner">
          <div className="container-fluid px-lg-3 px-0">
            <div className="main-banner">
              <img
                src={banner}
                className="img-fluid img-main"
                alt="banner-img"
              />
              <p className="welcome">welcome to ania</p>
            </div>
          </div>
        </div>
        <div className="ania-services">
          <div className="container">
            <h2 className="section-title">ANIA Services</h2>
            <div className="services-row-first">
              <div className="services-block-wrapper">
                <div className="services-block">
                  <img
                    src={management}
                    className="services-img"
                    alt="service"
                  />
                  <p className="services-title">Management</p>
                  <p className="services-description">
                    Deliverying a quality property management experience to
                    tenants.
                  </p>
                  <a href="#" className="services-learnmore">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="services-block-wrapper">
                <div className="services-block">
                  <img
                    src={construction}
                    className="services-img"
                    alt="service"
                  />
                  <p className="services-title">Construction</p>
                  <p className="services-description">
                    Building modern homes using local contractors and suppliers.
                  </p>
                  <a href="#" className="services-learnmore">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="services-row-second">
              <div className="services-block-wrapper">
                <div className="services-block">
                  <img
                    src={development}
                    className="services-img"
                    alt="service"
                  />
                  <p className="services-title">Development</p>
                  <p className="services-description">
                    Revitalizing neighborhoods to make them safe and
                    family-friendly.
                  </p>
                  <a href="#" className="services-learnmore">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="services-block-wrapper">
                <div className="services-block">
                  <img
                    src={investment}
                    className="services-img"
                    alt="service"
                  />
                  <p className="services-title">Investment</p>
                  <p className="services-description">
                    Value-focused investments that seek to improve communities.
                  </p>
                  <a href="#" className="services-learnmore">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ania-story">
          <div className="container">
            <div className="ania-story-1">
              <div className="content-right">
                <h2 className="section-title">Partnering with the community</h2>
                <button className="btn btn-outline-secondary text-uppercase">
                  see our story
                </button>
              </div>
              <img src={communityone} className="img-left" alt="story-img" />
              <img src={communitytwo} className="img-right" alt="story-img" />
            </div>
          </div>
        </div>
        <div className="ania-featured-properties">
          <div className="container">
            <h2 className="section-title">Featured Properties</h2>
            <div className="row">
              <div className="col-lg-6">
                <a href="">
                  <div className=" featured-block">
                    <img
                      src={propertyone}
                      className="img-fluid"
                      alt="feat-img"
                    />
                    <div className="featured-caption">
                      <p className="featured-caption-text">
                        XX Lafayette Street
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a href="">
                  <div className=" featured-block">
                    <img
                      src={propertytwo}
                      className="img-fluid"
                      alt="feat-img"
                    />
                    <div className="featured-caption">
                      <p className="featured-caption-text">??? Street</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a href="">
                  <div className=" featured-block">
                    <img
                      src={propertythree}
                      className="img-fluid"
                      alt="feat-img"
                    />
                    <div className="featured-caption">
                      <p className="featured-caption-text">??? Street</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a href="">
                  <div className=" featured-block">
                    <img
                      src={propertyfour}
                      className="img-fluid"
                      alt="feat-img"
                    />
                    <div className="featured-caption">
                      <p className="featured-caption-text">216 Spring Street</p>
                    </div>
                  </div>
                </a>
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

export default Home;
