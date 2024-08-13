import React, { useState, useEffect } from "react";
import PublicationsData from "./PublicationsData.json";
import { Link } from "react-router-dom";

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    if (Array.isArray(PublicationsData?.data)) {
      setPublications(PublicationsData?.data);
    } else {
      console.error(
        "Publications data is not an array:",
        PublicationsData?.data
      );
    }
  }, []);

  return (
    <div className="container">
      <h3 className="text-center mt-2">Our Lasallian Publications</h3>
      <table className="table table-striped table-bordered table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {publications?.map((pub, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{pub?.title}</td>
              <td>
                {pub?.image ? (
                  <img
                    src={pub?.image}
                    alt={pub?.title}
                    style={{ width: "50px", height: "70px" }}
                  />
                ) : (
                  "No Image Available"
                )}
              </td>
              <td>
                {pub?.url ? (
                  <Link to={pub?.url}>
                    <i className="fas fa-eye"> More</i>
                  </Link>
                ) : pub?.pdf ? (
                  <a href={pub?.pdf} download>
                    <i className="fa fa-download"> PDF</i>
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Publications;
