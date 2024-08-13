import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ApiUrl } from "../../../components/API/Api";
import { CircularProgress } from "@mui/material";

const DetailsIndiaInstitution = () => {
  const search = useLocation().search;
  const encryptedId = new URLSearchParams(search).get("indiaid");
  const indiaid = parseInt(atob(decodeURIComponent(encryptedId)), 10);

  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${ApiUrl}/get/institution/10`);
        const indiaData = response?.data?.data || [];
        const selected = indiaData?.find(
          (item) => item?.category_id === 10 && item?.id === indiaid
        );
        setSelectedData(selected);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Institution data:", error);
        setLoading(false);
      }
    };
    fetchNewsData();
  }, [indiaid]);

  if (loading) {
    return (
      <CircularProgress
        sx={{ display: "block", margin: "auto", marginTop: "5em" }}
      />
    );
  }

  if (!selectedData) {
    return (
      <div className="text-center mt-5">
        <b>No Data Available</b>
      </div>
    );
  }

  return (
    <div className="container subpage">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="heading">{selectedData?.title}</h3>
          <div
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{
              __html: selectedData?.content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsIndiaInstitution;
