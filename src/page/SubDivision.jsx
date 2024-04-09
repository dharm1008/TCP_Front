import React from "react";

const SubDivision = () => {
  return (
    <div className="col " style={{ backgroundColor: "rgb(255, 255, 255)", marginTop: "100px" }}>
      <div className="title fw-bold text-center" style={{ backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white" }}>
        Sub-Division Details
      </div>
      <div className="text text-start fst-italic" style={{ backgroundColor: "rgb(237, 237, 237)", paddingTop: "10px", fontSize: "small", color: "rgb(0, 117, 243)" }}>
        <ul className="breadcrumb" style={{ margin: 0 }}>
          <li>
            <a href="#">UC Site Report</a>
          </li>
          <li>New</li>
        </ul>
      </div>
      <div className="text text-end fst-italic mb-3" style={{ backgroundColor: "rgb(237, 237, 237)", paddingBottom: "10px", fontSize: "small", color: "rgb(0, 117, 243)" }}>
        <span>Change Role</span>
        <span className="space">|</span>
        <span>Unit Converter</span>
        <span className="space">|</span>
        <span>Help?</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="form-control" style={{ backgroundColor: "rgb(237, 237, 237)" }}>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Date Of Subdivision :<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Name By Which The Colony Is Popularly Known:<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Subdivision Into How Many Plots :
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="title fw-bold text-center" style={{ backgroundColor: "#094E7F", padding: "10px", color: "white" }}>
                Sale Deed Involved in the Present Violation
              </div>
            </div>
            {/* Table start */}
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table  table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr</th>
                      <th scope="col">Sale Deed Regn</th>
                      <th scope="col">Sale Deed Regn Date</th>
                      <th scope="col">Area Involved(sqm)</th>
                      <th scope="col">Sale in Favour of</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Remarks</th>
                      <th scope="col">Name of Sub-Reg.</th>
                      <th scope="col">Operation Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="date" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          Add
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Table end*/}
            <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
              <button type="button" className="btn btn-primary">
                Back
              </button>
              {/* <button type="button" class="btn btn-primary">Next</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDivision;
