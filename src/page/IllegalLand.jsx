import React from 'react'

const IllegalLand = () => {
  return (
    <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px"}}>
      <div className="title fw-bold text-center"
        style={{backgroundColor: "#094E7F", padding: "10px" ,marginTop: "100p", color: "white"}}>Illegal Land Subdivision Report
      </div>
      <div className="text text-start fst-italic"
          style={{backgroundColor: "rgb(237, 237, 237)", paddingTop: "10px", fontSize: "small", color: "rgb(0, 117, 243)"}}>
          <ul className="breadcrumb" style={{margin: "0"}}>
              <li><a href="#">UC Site Report</a></li>
              <li>New</li>
          </ul>
      </div>
      <div className="text text-end fst-italic mb-3"
          style={{backgroundColor: "rgb(237, 237, 237)", paddingBottom: "10px", fontSize: "small", color: "rgb(0, 117, 243)"}}>
          <span>Change Role</span><span className="space">|</span>
          <span>Unit Converter</span><span className="space">|</span>
          <span>Help?</span>
      </div>

      <div className="container">
          <div className="row">
              <div className="form-control" style={{backgroundColor: "rgb(237, 237, 237)"}}>
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Date Of Detection :<code>*</code></label>
                              <div className="col-sm-8">
                                  <input type="date" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Date Of Report :<code>*</code></label>
                              <div className="col-sm-8">
                                  <input type="date" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      
                  </div>

                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">District :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Controlled Area :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Urban Area :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Name OF Original
                                  Owner :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Owner’s Address :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Location Details :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Area Of Site :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Unit :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Dev Plan :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Sector No. :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Nature Of
                                  Unauthorised
                                  Activity At Site :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Total Area Of Land
                                  Covered Under Sale
                                  deed :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Unit :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div classNameName="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Total Area Under The
                                  Ownership Of Seller
                                  in a Compact Block :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Unit :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>



                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Old File ID :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>
            


                  <div className="row mb-3">
                      <div className="title fw-bold text-center"
                          style={{backgroundColor: "#094E7F", padding: "10px", color: "white"}}>
                        Attachments
                      </div>
                  </div>
                  <div className="row mb-3">
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Subject :</label>
                              <div className="col-sm-8">
                                  <input type="text" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="mb-3 row">
                              <label for="inputPassword" className="col-sm-4 col-form-label">Attachments :</label>
                              <div className="col-sm-8">
                                  <input type="file" className="form-control" id="inputPassword"/>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                      <button type="button" className="btn btn-primary">Save</button>
                      {/* <button type="button" className="btn btn-primary">Next</button> */}
                      
                  </div>



              </div>

          </div>
          
      </div>
    </div>
  );
};

export default IllegalLand