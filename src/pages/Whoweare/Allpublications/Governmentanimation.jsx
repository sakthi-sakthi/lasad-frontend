import React from "react";

const documents = [
  {
    id: 1,
    title:
      "THE RULE OF THE BROTHERS OF THE CHRISTIAN SCHOOLS (British English)",
    url: "images/publication/Rule_2015_eng_bri.pdf",
  },
  {
    id: 2,
    title: "THE RULE OF THE BROTHERS OF THE CHRISTIAN SCHOOLS (U.S. English)",
    url: "images/publication/Rule_2015_eng_ame.pdf",
  },
  {
    id: 3,
    title: "BROTHER VISITOR'S MANUAL",
    url: "/images/publication/Manual-of-the-Brother-Visitor-1.pdf",
  },
  {
    id: 4,
    title: "Guide for Brother Directors",
    url: "/images/publication/manuale-direttori_ing.pdf",
  },
  {
    id: 5,
    title: "THE ADMINISTRATOR'S DIRECTORY",
    url: "/images/publication/Administrators-Directory_eng.pdf",
  },
  {
    id: 6,
    title: "Communication Plan",
    url: "/images/publication/Piano-Comunicativo_inglese.pdf",
  },
  {
    id: 7,
    title: "LASALLIAN FORMATION FOR MISSION - THE PILGRIM'S HANDBOOK",
    url: "/images/publication/Book_formation_handbook_EN-1.pdf",
  },
  {
    id: 8,
    title: "2020 - DECLARATION ON THE LASALLIAN EDUCATIONAL MISSION",
    url: "/images/publication/La_Declaracion_ENG_26_10_2020_web-1-1.pdf",
  },
  {
    id: 9,
    title:
      "2020 - IDENTITY CRITERIA FOR THE VITALITY OF LASALLIAN EDUCATIONAL MINISTRIES",
    url: "/images/publication/ENG_lasallian_criteria_web-1.pdf",
  },
];

const Governmentanimation = () => {
  return (
    <div className="container">
      <h3 className="text-center mb-4">Government Animation</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {documents?.map((doc) => (
            <tr key={doc?.id}>
              <td>{doc?.id}</td>
              <td>{doc?.title}</td>
              <td>
                <a href={doc?.url} className="btn btn-success btn-sm" download>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Governmentanimation;
