import React from "react";

const Tcp = () => {
  return (
    <div className="col " style={{ backgroundColor: "rgb(255, 255, 255)", marginTop: "100px" }}>
      <div className="title fw-bold text-center" style={{ backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white" }}>
        Unauthorized Construction (UC) Site Inspection Report
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
                    Date Of Detection<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Date Of Report<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    District<code>*</code>
                  </label>
                  <div className="col-sm-10">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Controlled Area
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Urban Area
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
                    Owner's Name
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Owner's Address
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
                    Location Details<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Area Of Site<code>*</code>
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
                    Dev Paln<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Old File ID<code>*</code>
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
                    Subject<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Attachment<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
            {/* Table start */}
            <div className="row mb-3">
              <div className="col-md-12  table-responsive">
                <table className="table custom-table  table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr.No</th>
                      <th scope="col">Transaction ID</th>
                      <th scope="col">File ID</th>
                      <th scope="col">Develop Plan</th>
                      <th scope="col">Status Description</th>
                      <th scope="col">Status Date</th>
                      <th scope="col">DTP Order</th>
                      <th scope="col">Sec No</th>
                      <th scope="col">Owner's Name</th>
                      <th scope="col">Name Of Colony</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>ENF/UC</td>
                      <td>ENF/UC/ST/DTP</td>
                      <td>---</td>
                      <td>Site Submit</td>
                      <td>19-03-24</td>
                      <td>--</td>
                      <td>00</td>
                      <td>TCP</td>
                      <td>00</td>
                      <td className="d-flex justify-content-evenly">
                        <button type="button" className="btn btn-primary">
                          Edit
                        </button>
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>ENF/UC</td>
                      <td>ENF/UC/ST/DTP</td>
                      <td>---</td>
                      <td>Site Submit</td>
                      <td>19-03-24</td>
                      <td>--</td>
                      <td>00</td>
                      <td>TCP</td>
                      <td>00</td>
                      <td className="d-flex justify-content-evenly">
                        <button type="button" className="btn btn-primary">
                          Edit
                        </button>
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Table end*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tcp;
