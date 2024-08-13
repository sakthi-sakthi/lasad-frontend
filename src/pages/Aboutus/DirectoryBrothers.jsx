import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ApiUrl } from "../../components/API/Api";

function DirectoryBrothers() {
  const [pdfLinks, setPdfLinks] = useState([]);
  const [archivedPdfLinks, setArchivedPdfLinks] = useState([]);
  const [mainAccordionOpen, setMainAccordionOpen] = useState(true);
  const [subAccordionOpen, setSubAccordionOpen] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleMainAccordionClick = () => {
    setMainAccordionOpen((prevState) => !prevState);
  };

  const handleSubAccordionClick = (index) => {
    setSubAccordionOpen(subAccordionOpen === index ? null : index);
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.overflowY = "scroll";
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.overflowY = "hidden";
  };

  useEffect(() => {
    axios
      .get(`${ApiUrl}/get/Newsletter`)
      .then((response) => {
        const allPdfLinks = response?.data?.data?.filter(
          (item) => item.category_id === 6
        );

        const currentYearPdfLinks = [];
        const archivedPdfLinks = [];

        const currentDate = new Date();

        allPdfLinks.forEach((item) => {
          const dateParts = item.eventdate.split("-");
          const eventDate = new Date(
            `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
          );

          if (eventDate.getFullYear() === currentDate.getFullYear()) {
            currentYearPdfLinks.push(item);
          } else {
            archivedPdfLinks.push(item);
          }
        });

        setPdfLinks(currentYearPdfLinks);
        setArchivedPdfLinks(archivedPdfLinks);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (pdfLinks.length > 0) {
    pdfLinks.sort((a, b) => new Date(b.eventdate) - new Date(a.eventdate));
  }

  const currentYear = new Date().getFullYear();

  const groupedArchivedLinks = archivedPdfLinks.reduce((acc, pdf) => {
    const year = new Date(pdf.eventdate.split("-").reverse().join("-")).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pdf);
    return acc;
  }, {});

  return (
    <div className="container subpage">
      <br />
      <h3 className="text-center mb-4">Directory of the Brothers</h3>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div
              className="col-12 col-lg-12 custom-scrollbar"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="accordion" id="newsletterAccordion">
                <div className="accordion-item mb-4">
                  <h2
                    className="accordion-header"
                    onClick={handleMainAccordionClick}
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#allNewsletters"
                      aria-expanded="true"
                      aria-controls="allNewsletters"
                      style={{ fontWeight: "bold" }}
                    >
                      Directory - {currentYear}
                    </button>
                  </h2>
                  <div
                    id="allNewsletters"
                    className={`accordion-collapse collapse ${
                      mainAccordionOpen ? "show" : ""
                    }`}
                    aria-labelledby="allNewsletters"
                    data-parent="#newsletterAccordion"
                  >
                    <div className="accordion-body">
                      {!loading && pdfLinks.length > 0 ? (
                        pdfLinks
                          .reduce((acc, pdf) => {
                            const existingMonth = acc.find(
                              (item) => item.month === pdf.month
                            );
                            if (existingMonth) {
                              existingMonth.pdfs.push(pdf);
                            } else {
                              acc.push({ month: pdf.month, pdfs: [pdf] });
                            }
                            return acc;
                          }, [])
                          .map((monthGroup, index) => (
                            <div key={index}>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  onClick={() =>
                                    handleSubAccordionClick(index + 1)
                                  }
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={`collapse${index}`}
                                    onClick={(event) => {
                                      const clickedElement = event.target;
                                      const isSubAccordion = clickedElement.closest(
                                        ".accordion-collapse"
                                      );

                                      if (!isSubAccordion) {
                                        const mainAccordion = document.getElementById(
                                          "allNewsletters"
                                        );
                                        if (mainAccordion)
                                          mainAccordion.classList.remove("show");
                                      }
                                    }}
                                    style={{ fontWeight: "bold" }}
                                  >
                                    {currentYear}
                                  </button>
                                </h2>
                                <div
                                  id={`collapse${index}`}
                                  className={`accordion-collapse collapse ${
                                    subAccordionOpen === index + 1 ? "show" : ""
                                  }`}
                                  aria-labelledby={`heading${index}`}
                                  data-parent="#newsletterAccordion"
                                >
                                  <div className="accordion-body">
                                    {monthGroup.pdfs?.map((pdf, pdfIndex) => (
                                      <div
                                        key={pdfIndex}
                                        style={{
                                          marginBottom:
                                            pdfIndex ===
                                            monthGroup.pdfs.length - 1
                                              ? "0"
                                              : "20px",
                                        }}
                                      >
                                        <p>
                                          <b>{pdf?.title} </b>
                                        </p>
                                        <p>{pdf?.eventdate}</p>
                                        <a
                                          href={pdf?.file_url}
                                          rel="noopener noreferrer"
                                          className="btn btn-sm"
                                          target="_blank"
                                          style={{
                                            backgroundColor: "#012c6d",
                                            color: "#e0ab08",
                                            textDecoration: "none",
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faDownload} />{" "}
                                          Download
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                      ) : loading ? (
                        <div className="text-center">
                          <div className="text-center font-weight-bold">
                            Loading Data...
                          </div>
                        </div>
                      ) : (
                        <p
                          className="text-center font-weight-bold"
                          style={{ fontSize: "16px" }}
                        >
                          No Directory Available
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* Archived Newsletters */}
                {Object.keys(groupedArchivedLinks).map((year, index) => (
                  <div className="accordion-item mb-4" key={year}>
                    <h2
                      className="accordion-header"
                      onClick={() => handleSubAccordionClick(year)}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#archiveNewsletters${year}`}
                        aria-expanded="false"
                        aria-controls={`archiveNewsletters${year}`}
                        style={{ fontWeight: "bold" }}
                      >
                        Archived Directory - {year}
                      </button>
                    </h2>
                    <div
                      id={`archiveNewsletters${year}`}
                      className={`accordion-collapse collapse ${
                        subAccordionOpen === year ? "show" : ""
                      }`}
                      aria-labelledby={`archiveNewsletters${year}`}
                      data-parent="#newsletterAccordion"
                    >
                      <div className="accordion-body">
                        {groupedArchivedLinks[year].map((pdf, pdfIndex) => (
                          <div key={pdfIndex}>
                            <p>
                              <b>{pdf?.title} </b>
                            </p>
                            <p>{pdf?.eventdate}</p>
                            <a
                              href={pdf?.file_url}
                              rel="noopener noreferrer"
                              className="btn btn-sm"
                              target="_blank"
                              style={{
                                backgroundColor: "#012c6d",
                                color: "#e0ab08",
                                textDecoration: "none",
                              }}
                            >
                              <FontAwesomeIcon icon={faDownload} /> Download
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectoryBrothers;
