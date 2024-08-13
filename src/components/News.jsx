import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./newstyle.css";
import { ReligioUrl } from "./API/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const News = ({ upcomedata }) => {
  const [birthday, setBirthday] = useState([]);
  // const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBirthdays();
    // fetchData();
  }, []);

  const newsData = upcomedata
    ?.filter((item) => item?.category_id === 21)
    .slice(0, 3);

  const fetchBirthdays = async () => {
    try {
      const res = await axios.get(
        `${ReligioUrl}/member/province/birthday/this_month/1`
      );
      const currentDate = moment();
      const filteredBirthdays = res?.data?.data?.filter((item) => {
        const birthdayDate = moment(item?.dob, "DD - MMMM");
        return birthdayDate?.isSameOrAfter(currentDate, "day");
      });
      setBirthday(filteredBirthdays?.slice(0, 5));
      setLoading(false);
    } catch (error) {
      setError(error?.message);
      console.error("Error fetching birthdays:", error);
    }
  };
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${ReligioUrl}/news/province/1`);
  //     setNews(response?.data?.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error?.message);
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const today = moment()?.startOf("day");

  const handleMouseEnter = () => {
    document.getElementById("scroll_this").classList?.add("scroll-visible");
  };

  const handleMouseLeave = () => {
    document.getElementById("scroll_this").classList?.remove("scroll-visible");
  };

  if (loading) {
    return (
      <div className="text-center mt-2">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2 className="entry-title">Latest News</h2>
            </div>
            <div className="news-gallery">
              <div
                className="mousescroll"
                id="scroll_this"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {error ? (
                  <div
                    style={{
                      textAlign: "justify",
                      color: "red",
                      fontSize: "14px",
                      marginTop: "10px",
                      fontWeight: "500",
                    }}
                  >
                    {error}
                  </div>
                ) : newsData?.length > 0 ? (
                  newsData?.map((item, index) => (
                    <div key={index}>
                      <div className="birthday-box">
                        <img
                          className="img-responsive img-style"
                          id="imgstyles"
                          src={item?.image || "images/all-img/noimage.png"}
                          alt="img"
                        />
                        <div className="emp_details">
                          <Link
                            to={`/all-latest-news?newsid=${encodeURIComponent(
                              btoa(item?.id)
                            )}`}
                            style={{ textDecoration: "none" }}
                          >
                            <p style={{ color: "#337ab7" }}>
                              {item?.title || "No Event Name Available"}
                            </p>
                          </Link>
                          <p>{item?.eventdate || "No Date Available"}</p>
                          <Link
                            to={`/all-latest-news?newsid=${encodeURIComponent(
                              btoa(item?.id)
                            )}`}
                            style={{ textDecoration: "none" }}
                          >
                            <p style={{ color: "#337ab7", cursor: "pointer" }}>
                              Read More
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      color: "#000",
                      marginTop: "10px",
                      fontWeight: "500",
                    }}
                  >
                    No news available
                  </div>
                )}
                {newsData?.length >= 5 && !error && (
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    <a
                      href="/"
                      className="btn btn-primary btn-sm"
                      style={{ borderRadius: "50px" }}
                    >
                      View All
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <h2 className="entry-title">Upcoming Birthdays</h2>
            </div>
            <div className="news-gallery">
              <div
                className="mousescroll"
                id="scroll_this"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {birthday?.length > 0 ? (
                  birthday?.map((item, index) => {
                    const birthdayDate = moment(
                      item?.dob,
                      "DD - MMMM"
                    )?.startOf("day");
                    const isToday = birthdayDate?.isSame(today, "day");
                    return (
                      <div key={index}>
                        <div className="birthday-box">
                          <img
                            className="img-responsive img-style"
                            id="imgstyles"
                            src={item?.image || "images/all-img/noimage.png"}
                            alt="img"
                          />
                          <div className="emp_details">
                            <p style={{ color: "#337ab7" }}>
                              {item?.member_name || "No Name"}
                            </p>
                            <p>{item?.community_id || ""}</p>
                            <p>{item?.dob || "No DOB"}</p>
                          </div>
                          {isToday && (
                            <div
                              style={{ marginTop: "-16%", marginLeft: "65%" }}
                            >
                              <div className="birth_style">
                                <div style={{ position: "relative" }}>
                                  <img
                                    src="images/all-img/birthday.gif"
                                    style={{
                                      height: "auto",
                                      width: "100px",
                                      maxHeight: "100%",
                                      maxWidth: "100%",
                                      marginLeft: "30px",
                                    }}
                                    alt="nodata"
                                  />
                                  <img
                                    src="images/all-img/flower.gif"
                                    style={{
                                      position: "absolute",
                                      top: "17px",
                                      left: "50%",
                                      transform: "translateX(-67%)",
                                      height: "auto",
                                      width: "119px",
                                      maxHeight: "100%",
                                      maxWidth: "100%",
                                    }}
                                    alt="nodata"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      color: "#000",
                      marginTop: "10px",
                      fontWeight: "500",
                    }}
                  >
                    No upcoming birthday available
                  </div>
                )}
                {birthday?.length >= 5 && (
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    <a
                      href="/"
                      className="btn btn-primary btn-sm"
                      style={{ borderRadius: "50px" }}
                    >
                      View All
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
