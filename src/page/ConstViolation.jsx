import React from 'react'

const ConstViolation = () => {
  return (
    <div>
      <div className="col " style={{ backgroundColor: "rgb(255, 255, 255)", marginTop: "100px;" }}>
        <div className="title fw-bold text-center"
          style={{ backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white;" }}>Construction And Violation Details
        </div>
        <div className="text text-start fst-italic"
          style={{ backgroundColor: "rgb(237, 237, 237)", paddingTop: "10px", fontSize: "small", color: "rgb(0, 117, 243);" }}>
          <ul className="breadcrumb" style={{ margin: "0;" }}>
            <li><a href="#">UC Site Report</a></li>
            <li>New</li>
          </ul>
        </div>
        <div className="text text-end fst-italic mb-3"
          style={{ backgroundColor: "rgb(237, 237, 237)", paddingBottom: "10px", fontSize: "small", color: "rgb(0, 117, 243);" }}>
          <span>Change Role</span><span className="space">|</span>
          <span>Unit Converter</span><span className="space">|</span>
          <span>Help?</span>
        </div>

        <div className="container">
          <div className="row">
            <div className="form-control" style={{ backgroundColor: "rgb(237, 237, 237);" }}>
              <div className="row mb-3" style={{ display: "flex", justifyContent: "center;" }}>
                <div className="col-md-4">
                  <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-6 col-form-label">Any Construction At Site:</label>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex ">
                  <div className="form-check col-md-6">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check col-md-6">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>

              </div>

              <hr />
              <div className="data" id="dataDiv">

                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="mb-3 row">
                      <label for="inputPassword" className="col-sm-6 col-form-label">Details Of Construction at Site</label>
                      <div className="col-sm-6">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="row mb-3">

                  <div className="col-md-12">
                    <div classNameName="mb-3 row">
                      <label for="inputPassword" className="col-sm-6 col-form-label">Violation Of Urban Area Act 7(ii)</label>
                      <div className="col-sm-6 d-md-flex">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban1" checked />
                          <label className="form-check-label" for="flexRadioUrban1">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban2" />
                          <label className="form-check-label" for="flexRadioUrban2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">

                  <div className="col-md-12">
                    <div className="mb-3 row">
                      <label for="inputPassword" className="col-sm-6 col-form-label">Any Show Cause Notice/
                        Restoration Order Issued</label>
                      <div className="col-sm-6 d-md-flex">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioOrder" id="flexRadioOrder1" checked />
                          <label className="form-check-label" for="flexRadioOrder1">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioOrder" id="flexRadioOrder2" />
                          <label className="form-check-label" for="flexRadioOrder2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="mb-3 row">
                      <label for="inputPassword" className="col-sm-6 col-form-label">File ID</label>
                      <div className="col-sm-6">
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>

                </div>




              </div>
              <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                <button type="button" className="btn btn-primary">Back</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>

            </div>
          </div> </div>
      </div></div>
  )
}

export default ConstViolation