import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="home-page-welcome">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12 col-lg-12 order-2 order-lg-1">
              <div className="welcome-content">
                <header className="entry-header">
                  <h2 className="entry-title">
                    Welcome to De La Salle Brothers
                  </h2>
                </header>
                <div className="entry-content mt-2">
                  <p>The Brothers of the Christian Schools, also known as De La Salle Brothers, is a religious congregation of men founded by Saint John Baptist De La Salle, patron saint of teachers of youth. It is a teaching order that is consecrated to procuring God’s glory and the salvation of the young through the ministry of giving a human and Christian education to the young, especially the poor. The Brothers have answered a call to a vocation of faith, community, and service with the work. Lasallian South Asia District The New Identity given to the District is “Lasallian South Asia District – LASAD.” From this moment onwards, the TWO Sectors of INDIA and SRI LANKA, will journey together in unison, with sample opportunity for implementing “Association for the Mission.” Inspired by some Brothers from India and Sri Lanka, the District Logo was conceived on 12 May 2021. The divided Blue and Green Star represents the two Sectors.</p>
                </div>
                <center>
                  <Link to="/history-colombo">
                    <button className="brown-button btn-sm">Read More</button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
