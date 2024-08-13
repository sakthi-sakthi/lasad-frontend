import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiUrl } from "../../components/API/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";

const AuxilaryPresidents = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/get/teammembers`);
      const teams = response?.data?.teams || [];
      const filteredTeams = teams?.filter((item) => item?.category_id === 18);
      setData(filteredTeams);
      setFilteredData(filteredTeams);
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

  useEffect(() => {
    const lowercasedQuery = searchQuery?.toLowerCase();
    const filtered = data?.filter(
      (item) =>
        item?.title?.toLowerCase()?.includes(lowercasedQuery) ||
        item?.role?.toLowerCase()?.includes(lowercasedQuery) ||
        item?.place?.toLowerCase()?.includes(lowercasedQuery)
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "80px",
    },
    {
      name: "Name",
      selector: (row) => row?.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row?.year,
      sortable: true,
    },
    {
      name: "Role",
      cell: (row) =>
        row.role ? (
          row.role?.split(",")?.map((role, index) => (
            <span
              key={index}
              className={`badge badge-${
                index % 2 === 0 ? "success" : "danger"
              }`}
              style={{ marginRight: "5px" }}
            >
              {role}
            </span>
          ))
        ) : (
          <span className="badge badge-danger" style={{ marginRight: "5px" }}>
            No Role
          </span>
        ),
      sortable: true,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row?.media_url}
          alt={row?.title}
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
      ),
      sortable: false,
    },
  ];

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
    <div className="container mb-3">
      <h3 className="entry-title text-center mb-3 mt-2">
        Former Auxiliary Visitor & Presidents
      </h3>
      <p className="font-weight-bold mb-3">Total Members : {data?.length}</p>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          autoFocus
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationRowsPerPageOptions={[
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55,
          60,
          65,
          70,
          75,
          80,
          85,
          90,
          95,
          100,
        ]}
        highlightOnHover
        responsive
        pointerOnHover
        striped
        noDataComponent="No Results found"
      />
    </div>
  );
};

export default AuxilaryPresidents;
