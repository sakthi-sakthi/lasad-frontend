import React from "react";
const OurStatic = () => {

  const imageStyles1 = {
    height: "250px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  const imageStyles = {
    height: "250px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "2rem",
  };

  const boxStyles1 = {
    boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
    padding: "7px 25px 9px 22px",
    backgroundColor: "#fff",
    height: "400px",
  };

  return (
    <>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div style={boxStyles1} id="style-1">
                <div className="section-heading">
                  <h2 className="entry-title">Bible Diary 2024</h2>
                </div>
                <div className="entry-content">
                  <div className="row">
                    <div className="col-lg-4">
                      <a href="https://lasallianresources.org/product/a-2023-bible-diary-the-word-of-god-in-the-eyes-of-lasallians/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/all-img/Capture.png" alt="noimage" style={imageStyles1} />
                      </a>
                      <p style={{ textAlign: "center", fontSize: "10px", fontWeight: "bold" }} className="mt-2">
                        <i className="fas fa-hand-point-up" style={{ marginRight: "5px" }}></i>CLICK ON THE ABOVE IMAGE FOR CONTENT OF THE BIBLE DIARY 2024
                      </p>
                    </div>

                    <div className="col-lg-8">
                      <div className="tab-image entry-content">
                        <div>
                          This valuable daily prayer resource is a rich treasure for all Lasallians provides a host of helpful elements to enrich one’s prayer life. For each day of 2024, daily liturgical details, the daily saint, and daily scriptural readings are provided, each reading accompanied by a thoughtful reflection that was written by a Brother who was invited to do so.Pages from this resource could be printed and posted in Lasallian communities or schools.
                        </div>
                        <button type="button" className="brown-button btn-sm mt-3" data-toggle="modal" data-target="#exampleModal">Read More</button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                          <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">BIBLE DIARY 2024</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body text-justify">
                                <p>
                                  John Baptist de La Salle, the Patron Saint of Teachers, was a French priest and educational
                                  reformer. He dedicated his life to the education of the poor, and he founded the Brothers of the
                                  Christian Schools to continue his work after his death. In 1987, Pope John Paul II declared him the
                                  Patron Saint of Teachers of Youth. He is also the patron saint of the Lasallian Christian Brothers
                                  and the Brothers of the Christian Schools.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd tab */}
            <div className="col-md-6 col-12">
              <div style={boxStyles1} id="style-1">
                <div className="section-heading">
                  <h2 className="entry-title">Bro.Armin Luistro,FSC</h2>
                </div>
                <div className="entry-content">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="tab-image entry-content">
                        <div>
                          This valuable daily prayer resource is a rich treasure for all Lasallians provides a host of helpful elements to enrich one’s prayer life. For each day of 2024, daily liturgical details, the daily saint, and daily scriptural readings are provided, each reading accompanied by a thoughtful reflection that was written by a Brother who was invited to do so.Pages from this resource could be printed and posted in Lasallian communities or schools.
                        </div>
                        <button type="button" className="brown-button btn-sm mt-3" 
                        onClick={() => window.open("https://en.wikipedia.org/wiki/Armin_Luistro", "_blank")} 
                        rel="noopener noreferrer" target="_blank">Read More</button>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <a href="https://en.wikipedia.org/wiki/Armin_Luistro" target="_blank" rel="noopener noreferrer">
                        <img src="images/priestimage/Armin.png" alt="general" style={imageStyles} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStatic;