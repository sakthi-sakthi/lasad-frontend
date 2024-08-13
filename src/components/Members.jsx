import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const imageStyles = {
  width: "180px",
  height: "200px",
  marginLeft: "20px",
};

const imageStyles1 = {
  height: "227px",
  marginLeft: "20px",
};

const boxStyles1 = {
  boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
  padding: "7px 25px 9px 22px",
  backgroundColor: "#fff",
  height: "415px",
};

const Members = () => {
  const [activeTab1, setActiveTab1] = useState("Visitor");
  const [activeTab2, setActiveTab2] = useState("Auxiliary Visitor");

  const handleTabSelect1 = (selectedTab) => {
    setActiveTab1(selectedTab);
  };

  const handleTabSelect2 = (selectedTab) => {
    setActiveTab2(selectedTab);
  };

  return (
    <div
      className="container-fluid py-3"
      style={{ backgroundColor: "#172440" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div
              style={boxStyles1}
              id="style-1"
              className="bootstrap-scrollbar"
            >
              <Tab.Container activeKey={activeTab1} onSelect={handleTabSelect1}>
                <div className="section-heading">
                  <h2 className="entry-title">
                    Lasallian South Asian District (Sri Lanka & India)
                  </h2>
                </div>
                <br />
                <div className="entry-content">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link
                            eventKey="Visitor"
                            className={`nav-link mb-3 p-3 shadow ${
                              activeTab1 === "Visitor" ? "active" : ""
                            }`}
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "15px",
                              fontWeight: "bold",
                              transition: "color 0.3s ease",
                            }}
                          >
                            Visitor
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="District Council"
                            className={`nav-link mb-3 p-3 shadow ${
                              activeTab1 === "District Council" ? "active" : ""
                            }`}
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "15px",
                              fontWeight: "bold",
                              transition: "color 0.3s ease",
                            }}
                          >
                            District Council
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className="col-md-5 col-lg-6">
                      <div className="tab-image">
                        <img
                          src={
                            activeTab1 === "Visitor"
                              ? "images/priestimage/Perera.png"
                              : ""
                          }
                          alt={activeTab1}
                          style={imageStyles}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            marginTop: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          <br />
                          <span style={{ fontSize: "15px", color: "black" }}>
                            {activeTab1 === "Visitor" ? (
                              "REV. BRO. BERTRAM PERERA, FSC"
                            ) : (
                              <ul>
                                <li>Bro. T. Amalan, FSC</li>
                                <li>Bro. Denzil Perera, FSC</li>
                                <li>Bro. Henry Dissanayake, FSC</li>
                                <li>Bro. M. Jerald, FSC</li>
                                <li>Bro. John Paul, FSC</li>
                                <li>Bro. Yohan Soyza, FSC</li>
                              </ul>
                            )}
                          </span>
                          <br />
                          <span style={{ fontSize: "15px", color: "red" }}>
                            {activeTab1}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="Visitor" className="tab-pane fade">
                    This is content for Visitor.
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="District Council"
                    className="tab-pane fade"
                  >
                    This is content for District Council.
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
          {/* 2nd tab */}
          <div className="col-md-6 col-12">
            <div
              style={boxStyles1}
              id="style-1"
              className="bootstrap-scrollbar"
            >
              <Tab.Container activeKey={activeTab2} onSelect={handleTabSelect2}>
                <div className="section-heading">
                  <h2 className="entry-title">Sector Team</h2>
                </div>
                <br />
                <div className="entry-content">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link
                            eventKey="Auxiliary Visitor"
                            className={`nav-link mb-3 p-3 shadow ${
                              activeTab2 === "Auxiliary Visitor" ? "active" : ""
                            }`}
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "15px",
                              fontWeight: "bold",
                              transition: "color 0.3s ease",
                            }}
                          >
                            Auxiliary Visitor
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="Sector Leadership (India)"
                            className={`nav-link mb-3 p-3 shadow ${
                              activeTab2 === "Sector Leadership (India)"
                                ? "active"
                                : ""
                            }`}
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "15px",
                              fontWeight: "bold",
                              transition: "color 0.3s ease",
                            }}
                          >
                            Sector Leadership (India)
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="Sector Leadership (Sri Lanka)"
                            className={`nav-link mb-3 p-3 shadow ${
                              activeTab2 === "Sector Leadership (Sri Lanka)"
                                ? "active"
                                : ""
                            }`}
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "15px",
                              fontWeight: "bold",
                              transition: "color 0.3s ease",
                            }}
                          >
                            Sector Leadership (Sri Lanka)
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className="col-md-5 col-lg-6">
                      <div className="tab-image">
                        <img
                          src={
                            activeTab2 === "Auxiliary Visitor"
                              ? "images/priestimage/Amalan.png"
                              : ""
                          }
                          alt={activeTab2}
                          style={imageStyles1}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            marginTop: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          <br />
                          <span style={{ fontSize: "15px", color: "black" }}>
                            {activeTab2 === "Auxiliary Visitor" ? (
                              "REV.BR.T AMALAN FSC"
                            ) : activeTab2 ===
                              "Sector Leadership (Sri Lanka)" ? (
                              <ul style={{ listStyleType: "none" }}>
                                <li>Bro.Visitor – Chairman</li>
                                <li>Bro. Christy Croos, FSC</li>
                                <li>Bro. Henry Dissanayake, FSC</li>
                                <li>Bro. Denzil Perera, FSC</li>
                                <li>Bro. Yohan Soyza, FSC</li>
                                <li>Bro. Pubudu Rajapaksha, FSC</li>
                                <li>Bro. Roshan Dias, FSC.</li>
                              </ul>
                            ) : (
                              <ul style={{ listStyleType: "none" }}>
                                <li>Bro. T. Amalan, FSC</li>
                                <li>Bro. M. Jerald, FSC</li>
                                <li>Bro. John Paul, FSC</li>
                                <li>Bro. Heldon Fernando, FSC</li>
                                <li>Bro. Inego Amalan, FSC</li>
                                <li>Bro. Victor, FSC</li>
                              </ul>
                            )}
                          </span>
                          <br />
                          <span style={{ fontSize: "15px", color: "red" }}>
                            {activeTab2}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Tab.Content>
                  <Tab.Pane
                    eventKey="Auxiliary Visitor"
                    className="tab-pane fade"
                  >
                    This is content for Auxiliary Visitor.
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="Sector Leadership (India)"
                    className="tab-pane fade"
                  >
                    This is content for Sector Leadership (India).
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="Sector Leadership (Sri Lanka)"
                    className="tab-pane fade"
                  >
                    This is content for Sector Leadership (Sri Lanka).
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
