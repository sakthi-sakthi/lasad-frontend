import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ApiUrl } from "../../components/API/Api";

const OurContent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageId, setPageId] = useState(null);
  const location = useLocation();
  const url = location?.pathname;

  useEffect(() => {
    const pathToIdMap = {
      "/our-spirituality": 6,
      "/our-founder": 7,
      "/our-mission": 8,
      "/our-formation": 9,
    };
    const newPageId = pathToIdMap[url] || url;
    setPageId(newPageId);
  }, [url]);

  useEffect(() => {
    if (pageId === null) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${ApiUrl}/get/Pages/${pageId}`);
        setData(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId]);

  if (loading) {
    return (
      <CircularProgress
        sx={{ display: "block", margin: "auto", marginTop: "5em" }}
      />
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center mt-5">
        <b>No Data Available</b>
      </div>
    );
  }

  const filteredData = data?.filter((item) => item?.id === pageId);

  if (filteredData.length === 0) {
    return (
      <div className="text-center mt-5">
        <b>No matching data found</b>
      </div>
    );
  }

  return (
    <div className="container subpage">
      <div className="row">
        <div className="col-lg-12">
          {filteredData?.map((item) => (
            <div key={item?.id}>
              <h2 className="heading">{item?.title}</h2>
              <div
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <style>
                      table { width: 100%; max-width: 100%; border-collapse: collapse; }
                      table, th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                      @media (max-width: 600px) { table, th, td { display: block; width: 100%; box-sizing: border-box; } }
                    </style>
                    ${item?.content}
                  `,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurContent;
