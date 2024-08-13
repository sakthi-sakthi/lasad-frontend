import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiUrl } from "../../components/API/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const CouncilMembers = () => {
  const [data, setData] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [india, setIndia] = useState([]);
  const [srilanka, setSrilanka] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/get/teammembers`);
      const teams = response?.data?.teams || [];
      setData(teams?.filter((item) => item?.category_id === 12));
      setSectors(teams?.filter((item) => item?.category_id === 13));
      setIndia(teams?.filter((item) => item?.category_id === 14));
      setSrilanka(teams?.filter((item) => item?.category_id === 15));
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-5">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  if (data?.length === 0)
    return (
      <div>
        <p className="text-center font-weight-bold">No data found</p>
      </div>
    );

  return (
    <div className="container">
      <h3 className="entry-title text-center mb-3 mt-2">
        LASAD – District Council Members
      </h3>
      <p className="font-weight-bold mb-3">Total Members : {data?.length}</p>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Role</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item?.id || index}>
              <td>{index + 1}</td>
              <td>{item?.title}</td>
              <td>
                {item?.role ? (
                  item?.role?.split(",")?.map((role, index) => (
                    <span
                      key={index}
                      className={`badge badge-${
                        index % 2 === 0 ? "success" : "danger"
                      }`}
                      style={{ marginRight: "5px" }}
                    >
                      {role}
                      &nbsp;
                    </span>
                  ))
                ) : (
                  <span
                    className="badge badge-danger"
                    style={{ marginRight: "5px" }}
                  >
                    No Role &nbsp;
                  </span>
                )}
              </td>
              <td>
                <img
                  src={item?.media_url}
                  alt={item?.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "1px solid green",
                    padding: "2px",
                    borderRadius: "5px",
                    margin: "5px",
                    backgroundColor: "white",
                    boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 2nd table */}

      <h3 className="entry-title text-center mb-3">Sector Leadership Team</h3>
      <p className="font-weight-bold mb-3">Total Members : {sectors?.length}</p>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Role</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {sectors?.map((item, index) => (
            <tr key={item?.id || index}>
              <td>{index + 1}</td>
              <td>{item?.title}</td>
              <td>
                {item?.role ? (
                  item?.role?.split(",")?.map((role, index) => (
                    <span
                      key={index}
                      className={`badge badge-${
                        index % 2 === 0 ? "success" : "danger"
                      }`}
                      style={{ marginRight: "5px" }}
                    >
                      {role}
                      &nbsp;
                    </span>
                  ))
                ) : (
                  <span
                    className="badge badge-danger"
                    style={{ marginRight: "5px" }}
                  >
                    No Role &nbsp;
                  </span>
                )}
              </td>
              <td>
                <img
                  src={item?.media_url}
                  alt={item?.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "1px solid green",
                    padding: "2px",
                    borderRadius: "5px",
                    margin: "5px",
                    backgroundColor: "white",
                    boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 3rd table */}

      <h3 className="entry-title text-center mb-3">
        Sector Leadership Team (India)
      </h3>
      <p className="font-weight-bold mb-3">Total Members : {india?.length}</p>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Role</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {india?.map((item, index) => (
            <tr key={item?.id || index}>
              <td>{index + 1}</td>
              <td>{item?.title}</td>
              <td>
                {item?.role ? (
                  item?.role?.split(",")?.map((role, index) => (
                    <span
                      key={index}
                      className={`badge badge-${
                        index % 2 === 0 ? "success" : "danger"
                      }`}
                      style={{ marginRight: "5px" }}
                    >
                      {role}
                      &nbsp;
                    </span>
                  ))
                ) : (
                  <span
                    className="badge badge-danger"
                    style={{ marginRight: "5px" }}
                  >
                    No Role &nbsp;
                  </span>
                )}
              </td>
              <td>
                <img
                  src={item?.media_url}
                  alt={item?.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "1px solid green",
                    padding: "2px",
                    borderRadius: "5px",
                    margin: "5px",
                    backgroundColor: "white",
                    boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 4th table */}

      <h3 className="entry-title text-center mb-3">
        Sector Leadership Team (Sri Lanka)
      </h3>
      <p className="font-weight-bold mb-3">
        Total Members : {srilanka?.length}
      </p>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Role</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {srilanka?.map((item, index) => (
            <tr key={item?.id || index}>
              <td>{index + 1}</td>
              <td>{item?.title}</td>
              <td>
                {item?.role ? (
                  item?.role?.split(",")?.map((role, index) => (
                    <span
                      key={index}
                      className={`badge badge-${
                        index % 2 === 0 ? "success" : "danger"
                      }`}
                      style={{ marginRight: "5px" }}
                    >
                      {role}
                      &nbsp;
                    </span>
                  ))
                ) : (
                  <span
                    className="badge badge-danger"
                    style={{ marginRight: "5px" }}
                  >
                    No Role &nbsp;
                  </span>
                )}
              </td>
              <td>
                <img
                  src={item?.media_url}
                  alt={item?.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "1px solid green",
                    padding: "2px",
                    borderRadius: "5px",
                    margin: "5px",
                    backgroundColor: "white",
                    boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouncilMembers;
