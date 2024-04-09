import React from 'react'

const NatureofViolation = () => {
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
                        <div className="row mb-3" style={{display: "flex", justifyContent: "center"}}>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label for="inputPassword" className="col-sm-6 col-form-label">Nature Of Violation</label> 
                                </div>
                            </div>
                            <div className="col-md-6 d-md-flex ">
                                <div className="form-check col-md-6">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                    <label className="form-check-label" for="flexRadioDefault1">zzzzz
                                        Development Works in U/A Colony
                                    </label>
                                  </div>
                                  <div className="form-check col-md-6">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                    Independent U/A Construction
                                    </label>
                                  </div>
                            </div>
                            
                        </div>
                        
                        <hr/>
                        <div className="data" id="dataDiv">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Popular Name Of Unauthorised Colony<code>*</code></label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="inputPassword"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Length Of Roads (In Mtr)<code>*</code></label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Percentage Of Road Completed</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Service, Laid Down</label>
                                        <div className="col-sm-6 d-md-flex">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioservice" id="flexRadioservice1" checked/>
                                                <label className="form-check-label" for="flexRadioservice1">
                                                    Yes
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioservice" id="flexRadioservice2" />
                                                <label className="form-check-label" for="flexRadioservice2">
                                                No
                                                </label>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Remarks, Services</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">No. Of
                                            Constructions Completed</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Remarks, Constructions Completed</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">No. Of Under Construction Sites</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Remarks, Under Construction Sites</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Remarks</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                            <button type="button" className="btn btn-primary">Back</button>
                            <button type="button" className="btn btn-primary">Save as Draft</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default NatureofViolation