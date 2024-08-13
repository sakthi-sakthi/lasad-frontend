import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ApiUrl } from "../../components/API/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const India = () => {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/get/institution/10`);
      setInstitutes(response?.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-5">
        Error fetching data: {error}
      </div>
    );
  }

  if (institutes?.length === 0) {
    return (
      <div className="alert alert-info text-center mt-5">No data available</div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center mb-4">Indian Institutions</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Institutions</th>
                <th>Place</th>
                <th>Year of Establishment</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              {institutes?.map((institute, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{institute?.title}</td>
                  <td>{institute?.place}</td>
                  <td>{institute?.year}</td>
                  <td>
                    <Link
                      to={`/details-india?indiaid=${encodeURIComponent(
                        btoa(institute?.id)
                      )}`}
                    >
                      <i className="fas fa-eye bt btn-success btn-sm ml-4"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Static Data for The Statistics At Present in the Indian Sector */}
          <h3 className="text-center mt-5">
            The Statistics At Present in the Indian Sector
          </h3>
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Item</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Number of Brothers</td>
                <td>47</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Number of Communities</td>
                <td>10</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Number of Schools</td>
                <td>7</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Number of Developmental Projects</td>
                <td>5</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Number of Vocational Training Centers</td>
                <td>2</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Number of Teachers in Schools</td>
                <td>350</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Number of Staff in Vocational Training Centres</td>
                <td>37</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Number of Staff involved in Developmental Projects</td>
                <td>1430</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Number of Target Clientele</td>
                <td>51350</td>
              </tr>
            </tbody>
          </table>
          {/* End Static Data for The Statistics At Present in the Indian Sector */}
        </div>
      </div>
    </div>
  );
};

export default India;
