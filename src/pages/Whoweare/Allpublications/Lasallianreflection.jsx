import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Lasallianreflection = () => {
  const reflections = [
    {
      id: 1,
      title: "LASALLIAN DNA – PRESENTATION",
      url: "images/publication/EN-PRESENTATION_LR8.pdf",
    },
    {
      id: 2,
      title: "Attached file",
      url: "images/publication/allegato_inglese",
    },
    {
      id: 3,
      title: "Lasallian Reflection 7",
      url: "images/publication/ENG_RL7_2021_web_2_11zon",
    },
    {
      id: 4,
      title: "Lasallian Reflection 6",
      url: "images/publication/RL6_ENG_WEB_5_11zon",
    },
    {
      id: 5,
      title: "Lasallian Reflection 5",
      url: "images/publication/REFLEXION-LASALLISTA-5_EN_entregable-final",
    },
    {
      id: 6,
      title: "Lasallian Reflection 4",
      url: "images/publication/lasallian_reflexion4_3_11zon",
    },
    {
      id: 7,
      title: "Lasallian Reflection 3",
      url: "images/publication/DOCUMENTO-LASALIANO-3_EN_baja_1_11zon",
    },
    {
      id: 8,
      title: "Lasallian Reflection 2",
      url: "images/publication/Lasallian-reflection-2",
    },
    {
      id: 9,
      title: "Lasallian Reflection 1",
      url: "images/publication/reflexion_lasaliana_eng",
    },
    {
      id: 10,
      title: "Circular 470",
      url: "images/publication/Circ470_eng1",
    },
  ];

  return (
    <div className="container">
      <h3 className="text-center mb-3">Lasallian Reflection</h3>
      <div className="accordion" id="reflectionAccordion">
        {reflections?.map((reflection, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {reflection?.id}. {reflection?.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#reflectionAccordion"
            >
              <div className="accordion-body">
                <p className="mb-0">
                  <a
                    href={reflection?.url}
                    style={{ textDecoration: "none", color: "blue" }}
                    download
                  >
                    <i className="fas fa-download"></i> Download PDF Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img
            src="images/publication/r1.JPG"
            alt="lasallian"
            className="img-fluid mt-3"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-lg-6">
          <img
            src="images/publication/r2.JPG"
            alt="lasallian"
            className="img-fluid mt-3"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Lasallianreflection;
