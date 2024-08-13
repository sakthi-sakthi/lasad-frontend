import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";

const Quotation = () => {
  const [loading] = useState(false);
  const [error] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 24 * 60 * 60 * 1000); // 1 day
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-sm-12">
          <div id="myCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                key={`carousel-item-${currentIndex}`}
              >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="section-heading">
                      <h2 className="entry-title text-black">
                        Daily Bible Quotation
                      </h2>
                    </div>
                    <div className="testimonial">
                      <iframe
                        src="https://www.topverses.com/widget2.php?find1=&fg=FFFFFF&&font=16pt Garamond&raw=color:white;font-family:sans-serif;rate=H&"
                        style={{
                          width: "100%",
                          height: "auto",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          margin: "10px 0",
                        }}
                        title="biblequote"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
