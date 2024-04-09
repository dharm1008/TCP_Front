import React from "react";

const RevenueEstate = () => {
  return (
    <div className="col " style={{ backgroundColor: "rgb(255, 255, 255)", marginTop: "100px" }}>
      <div className="title fw-bold text-center" style={{ backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white" }}>
        Revenue Estate With Number Of Rectangles / Khasras
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
                    Revenue Estate<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Type<code>*</code>
                  </label>
                  <div className="col-sm-8 d-flex" style={{ alignItems: "center" }}>
                    <div className="form-check" style={{ marginRight: "5px" }}>
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        C
                      </label>
                    </div>
                    <div className="form-check" style={{ marginRight: "5px" }}>
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        UP
                      </label>
                    </div>
                    <div className="form-check" style={{ marginRight: "5px" }}>
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        UK
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12" style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
            {/* Table start */}
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table  table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr.No</th>
                      <th scope="col">Owner Name</th>
                      <th scope="col">Revenue Estate</th>
                      <th scope="col">Hadbast No.</th>
                      <th scope="col">Type</th>
                      <th scope="col">No. Of Khasra</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Sanjay</td>
                      <td>Didwari(72)</td>
                      <td>72</td>
                      <td>Type Name</td>
                      <td>00</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Table end*/}
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="mb-3 row" id="heading">
                  <div className="heading text-center"> Rectangle Number With Number of Kilas </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    Rectangle Number<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                    {" "}
                    No. Of Kilas<code>*</code>
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" id="inputPassword" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12" style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
            {/* Table start */}
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table  table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Sr.No</th>
                      <th scope="col">Owner Name</th>
                      <th scope="col">Revenue Estate</th>
                      <th scope="col">Rectangle Number</th>
                      <th scope="col">No. Of Kilas</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Sanjay</td>
                      <td>Didwari(72)</td>
                      <td>16</td>
                      <td>2</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Table end*/}
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="mb-3 row" id="heading">
                  <div className="heading text-center"> Details Of Land </div>
                </div>
              </div>
            </div>
            <div className="orange">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Rectangle/Khasra No.
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Rectangle/Khasra No. Extn
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
                      Kila No.
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Kila No. Extn
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
                      Kanal
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Marla
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
                      Area (Acre)
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Share
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12">
                  <div className="mb-3 row">
                    <div className="heading fw-bold"> Area Taken Details: </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Kanal
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Marla
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
                      Area Taken(Acre)
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="blue">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Rectangle/Khasra No.
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Rectangle/Khasra No. Extn
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
                      Kila No.
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Kila No. Extn
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
                      Kanal
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Marla
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
                      Area (Acre)
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Share
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12">
                  <div className="mb-3 row">
                    <div className="heading fw-bold"> Area Taken Details: </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Kanal
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                      Marla
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
                      Area Taken(Acre)
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputPassword" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
              <button type="button" className="btn btn-primary">
                Save &amp; Update
              </button>
            </div>
            <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
              <button type="button" className="btn btn-primary">
                Back
              </button>
              <button type="button" className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueEstate;
