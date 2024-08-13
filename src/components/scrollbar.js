import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Scrollbar = ({ scrollbardata }) => {

  const flashnewsData = scrollbardata
    ?.filter((item) => item?.category_id === 5)
    .slice(0, 1);

  const [isScrollingAllowed, setIsScrollingAllowed] = useState(true);
  const stopScroll = () => {
    setIsScrollingAllowed(false);
  }

  const allowScroll = () => {
    setIsScrollingAllowed(true);
  }

  return (
    <>
      <div className="scrollbar">
        <div className="container">
          <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
            <div className="col-4 col-lg-2 d-flex">
              <div className="label ripple">Flash News</div>
            </div>
            <div className="col-8 col-lg-10 d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="marqueenews">
                <div className="marquee">
                  <p
                    onMouseEnter={stopScroll}
                    onMouseLeave={allowScroll}
                    onTouchStart={stopScroll}
                    onTouchEnd={allowScroll}
                    style={{ overflow: isScrollingAllowed ? "" : "hidden" }}
                  >
                    {flashnewsData?.map((newsItem, index) => (
                      <span key={index}>
                        <img
                          src="images/logos/output-onlinegiftools.gif"
                          style={{
                            maxWidth: "40px",
                          }}
                          alt=""
                        />
                        <Link
                          to={`/all-flash-news?flashnewsid=${encodeURIComponent(btoa(newsItem?.id))}`}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {newsItem?.title}
                        </Link>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Scrollbar
