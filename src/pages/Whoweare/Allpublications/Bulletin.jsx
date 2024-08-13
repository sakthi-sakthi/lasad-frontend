import React from "react";

const Bulletin = () => {
  const bulletins = [
    {
      number: "261",
      title: "Right to Education right beyond schooling",
      pdfs: [],
    },
    {
      number: "260",
      title: "Lasallian Region of North America",
      pdfs: [],
    },
    {
      number: "259",
      title: "RELAL Lasallian Region of Latin America",
      pdfs: [],
    },
    {
      number: "258",
      title: "Lasallian Region of Europe and the Mediterranean",
      pdfs: [],
    },
    {
      number: "257",
      title: "Lasallian Region of Africa and Madagascar",
      pdfs: [],
    },
    {
      number: "256",
      title:
        "Creativity and Courage: Living the Promise of the 39th General Chapter",
      pdfs: [],
    },
    {
      number: "255",
      title:
        "Let’s Write Our Unfinished Gospel… Living Joyfully Together Our Mission in PARC",
      pdfs: [],
    },
    {
      number: "254",
      title: "STORIES OF HOPE… Associated for Our Lasallian Mission",
      pdfs: [],
    },
    {
      number: "253",
      title: "Children and youth at Risk A Lasallian response",
      pdfs: [],
    },
    {
      number: "252",
      title: "Lasallian Centers of Higher Education",
      pdfs: [],
    },
    {
      number: "251",
      title: "44th General Chapter",
      pdfs: [],
    },
    {
      number: "250",
      title: "Associated for the Lasallian Educational Mission",
      pdfs: [
        { url: "images/publication/250_bulletin_01_en.pdf", title: "Part 01" },
        { url: "images/publication/250_bulletin_02_en.pdf", title: "Part 02" },
        { url: "images/publication/250_bulletin_03_en.pdf", title: "Part 03" },
        { url: "images/publication/250_bulletin_04_en.pdf", title: "Part 04" },
        { url: "images/publication/250_bulletin_05_en.pdf", title: "Part 05" },
      ],
    },
    {
      number: "249",
      title: "Educating in justice",
      pdfs: [],
    },
    {
      number: "248",
      title: "Lasallian Educational Innovations",
      pdfs: [],
    },
    {
      number: "247",
      title: "The Rights of the Child",
      pdfs: [],
    },
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Lasallian Bulletin</h3>
      <div className="row">
        {bulletins?.map((bulletin, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ fontFamily: "Poppins", fontWeight: "400" }}
                >
                  {bulletin?.number} - {bulletin?.title}
                </h5>
                {bulletin?.number === "250" && bulletin?.pdfs?.length > 0 && (
                  <div className="mt-3">
                    <h6 style={{ fontFamily: "Poppins", fontWeight: "400" }}>
                      Related PDFs:
                    </h6>
                    <ul>
                      {bulletin?.pdfs?.map((pdf, pdfIndex) => (
                        <li key={pdfIndex}>
                          <a
                            href={pdf?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                            style={{ fontFamily: "Poppins", fontWeight: "400" }}
                            download
                          >
                            <i className="fa fa-download"></i> {pdf?.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bulletin;
