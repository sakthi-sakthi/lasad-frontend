import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Team.css";
import { ApiUrl } from "../../components/API/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Visitor = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/get/team/4`);
      const data = response?.data?.teams || [];
      setTeamMembers(data);
      if (data.length > 0) {
        setCategoryName(data[0]?.categoryname);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div className="team-area">
      {isLoading ? (
        <p className="text-center mt-5">
          <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        </p>
      ) : (
        <>
          {teamMembers.length === 0 ? (
            <p className="text-center mt-5">
              <b>No Team Members Available</b>
            </p>
          ) : (
            <>
              <div className="col-md-12">
                <h3 className="text-center mb-3">{categoryName}</h3>
              </div>
              <div className="container">
                <div className="row">
                  {teamMembers?.map((member) => (
                    <div
                      key={member?.id}
                      className="col-md-3 col-sm-6 col-xs-12"
                    >
                      <div className="single-team">
                        <div className="img-area">
                          <img
                            src={member?.media_url}
                            className="img-responsive"
                            alt={member?.title}
                          />
                          <div className="social"></div>
                        </div>
                        <div className="img-text">
                          <h4>{member?.title}</h4>
                          <h5>{member?.role}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Visitor;
