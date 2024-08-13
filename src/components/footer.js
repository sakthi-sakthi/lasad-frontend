import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiUrl } from "./API/Api";

function Footer() {
  const [contactInfo, setContactInfo] = useState({
    mobile: "",
    email: "",
    address: "",
    googleMapsUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/get/contactDetails`);
        setContactInfo(response?.data?.data);
      } catch (error) {
        console.error("Error fetching contact information:", error);
      }
    };

    fetchData();
  }, []);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="section-heading">
                  <h2 className="entry-title">About Us</h2>
                </div>
                <div className="row" style={{ marginTop: "-19px" }}>
                  <div className="col-4">
                    <img
                      src="/images/all-img/delasalle.png"
                      alt=""
                      style={{
                        display: "block",
                        marginLeft: "-50px"
                      }}
                    />
                  </div>
                  <div className="col-8">
                    <p
                      style={{
                        color: "white",
                        textAlign: "justify ",
                        fontSize: "13px",
                      }}>
                      Founder of the Institute of the brothers of the Christian Schools (De Lasalle Brothers), Patron of Christian teachers, Educational Reformer and Father of Modern Pedagogy.
                    </p>
                  </div>
                  <p
                    style={{
                      color: "white",
                      textAlign: "justify",
                      fontSize: "13px",
                    }}>
                    The Brothers of the Christian Schools, also known as De La Salle Brothers, is a religious congregation of men founded by Saint John Baptist De La Salle, patron saint of teachers of youth.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="foot-latest-news">
                  <div className="section-heading">
                    <h2 className="entry-title">Lasallian World
                    </h2>
                  </div>
                  <a href="https://www.google.com/maps/d/u/0/viewer?ll=-3.81666561775622e-14%2C123.14054315101906&z=1&mid=1kiTIBWP9BQikhL7NlrCTwnVN5Ax9gz-O" target="_blank" rel="noopener noreferrer">
                    <img src="/images/all-img/footimage.jpg" alt="nodata" className="img-fluid" style={{ marginTop: "-20px" }} />
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="foot-contact">
                  <div className="section-heading">
                    <h2 className="entry-title">Contact Us</h2>
                  </div>
                  <div className="contact-us">
                    <ul>
                      <li>
                        <i className="fa fa-map-marker mr-2" />
                        <span>
                          <p
                            style={{
                              color: "#fff",
                              marginLeft: "16px",
                              textAlign: "left",
                            }}>
                            {contactInfo?.address}
                          </p>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-phone mr-2" />
                        <Link to={`tel:${contactInfo?.mobile}`}>
                          {contactInfo?.mobile}
                        </Link>
                      </li>
                      <li>
                        <i className="fa fa-envelope mr-2" />
                        <Link to={`mailto:${contactInfo?.email}`}>
                          {contactInfo?.email}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="foot-contact">
                  <div className="section-heading">
                    <h2 className="entry-title">Location</h2>
                  </div>
                  <iframe
                    src={contactInfo.googleMapsUrl}
                    width="300"
                    height="200"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="salem"
                    style={{ marginTop: "-30px" }}
                  />
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "-17px" }}>
              <p
                className="text-center"
                style={{ fontSize: "14px", color: "white" }}>
                Copyright © {currentYear} De La Salle Brothers, All rights
                reserved. Powered by
                <a
                  className="tech"
                  style={{ color: "#ffd700", textDecoration: "none !important" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.boscosofttech.com/">
                  &nbsp;Boscosofttech
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
