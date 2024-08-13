import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "./API/Api";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "./gallerystyle.css";

const Youtube = ({newsletterdata}) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const latestnewsletterData = newsletterdata.slice().sort((a, b) => new Date(b.id) - new Date(a.id)).slice(0, 5);

  useEffect(() => {
    axios
      .get(`${ApiUrl}/get/gallery_images`)
      .then((response) => {
        setGalleryImages(response?.data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching gallery images:", error);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 2000);
      });
  }, []);

  const images =
    galleryImages?.map((image) => ({
      original: image?.image || "",
      thumbnail: image?.image || "",
    })) || [];

  // Additional check before using forEach
  if (galleryImages) {
    galleryImages.forEach((image) => {
      images.push({
        original: image.image || "",
        thumbnail: image.image || "",
      });
    });
  }
  // const getMonthName = (monthNumber) => {
  //   const monthNames = [
  //     "January", "February", "March", "April", "May", "June",
  //     "July", "August", "September", "October", "November", "December"
  //   ];
  //   return monthNames[monthNumber - 1];
  // };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="section-heading">
            <h2 className="entry-title">Gallery</h2>
          </div>
          {loading ? (
            <p>
              <b>Loading...</b>
            </p>
          ) : galleryImages.length === 0 ? (
            <p>
              <b>No gallery images available</b>
            </p>
          ) : (
            <ImageGallery items={images} />
          )}
        </div>
        <div className="col-md-6">
          <div className="section-heading">
            <h2 className="entry-title">Monthly Newsletter</h2>
          </div>
          <div className="scrollable-content" id="newsletterprog">
            {latestnewsletterData?.length > 0 ? (
              latestnewsletterData?.map((newsletter) => {
                const { id, title, eventdate, file_url } = newsletter;
                // const monthName = getMonthName(parseInt(month));
                return (
                  <div
                    key={id}
                    className="card shadow mb-2"
                    style={{ maxWidth: "585px", height: "100px" }}
                  >
                    <div className="card-body text-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src="images/all-img/pdf.png"
                          alt="PDF Icon"
                          className="mb-3"
                          style={{ width: "50px" }}
                        />
                        <div className="text-center">
                          <h5 className="card-title mb-2">{title}</h5>
                          <p className="card-text mb-3">{eventdate}</p>
                        </div>
                        <a
                          href={file_url}
                          className="btn btn-sm btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>
                <b>No Newsletter available</b>
              </p>
            )}

            {latestnewsletterData.length >= 5 && (
              <center>
                <Link
                  to={"/newsletter"}
                  style={{
                    backgroundColor: "#012c6d",
                    color: "white",
                    textDecoration: "none",
                    display: "inline-block",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    marginTop: "10px",
                    fontSize: "14px",
                  }}
                >
                  View More
                </Link>
              </center>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
