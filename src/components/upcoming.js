import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';

const Upcoming = ({ projectdata }) => {
  const filteredData = projectdata?.filter(cause => cause && cause.category_id === 2);

  if (!projectdata) {
    return <div><b><center>Loading...</center></b></div>;
  }

  return (
    <div className='container'>
      <div className="section-heading">
        <h2 className="entry-title">Upcoming Events</h2>
      </div>
      <div className="row mt-2">
        {filteredData?.map((project, index) => (
          <div className="col-md-3" key={index}>
            <div className="tpn_card">
              <img src={project?.media_url} className="w-100 mb-4" alt="Project" />
              <h5>{project?.title}</h5>
              <p>{project?.eventdate}</p>
              <Link to="/upcomeevents">
                <button className="brown-button">Read More</button>
              </Link>
            </div>
          </div>
        ))}
        {
          filteredData?.length === 0 && <p><b>No Upcoming Events Available</b></p>
        }
      </div>
    </div>
  );
}

export default Upcoming;
