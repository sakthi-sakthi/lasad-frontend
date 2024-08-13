import React from "react";

const Generalchapter = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-2">General Chapter Publications</h3>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">File Name</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Report III AIMEL</td>
              <td>
                <a href="/images/publication/Report-III-AIMEL_EN-1.pdf" download>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Circular 476 Convocation of 46th GC</td>
              <td>
                <a
                  href="/images/publication/ENG_Convocatoria_46CG_Circular_476_11zon.pdf"
                  download
                >
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Report of Brother Superior General (2014 – 2022)</td>
              <td>
                <a
                  href="/images/publication/INFORME_EN_WEB_11zon.pdf"
                  download
                >
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Communication Plan 46th General Chapter</td>
              <td>
                <a
                  href="/images/publication/EN-COMMUNICATION-PLAN_FSC46GC_11zon.pdf"
                  download
                >
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Generalchapter;
