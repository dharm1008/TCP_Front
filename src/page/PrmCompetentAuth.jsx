import React from 'react'

const PrmCompetentAuth = () => {
  return (
    <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px"}}>
            <div className="title fw-bold text-center"
                style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white"}}>Details of Permission From Competent Authority
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
                            <div className="col-md-12">
                                <div className="mb-3 row">
                                    <label for="inputPassword" className="col-sm-6 col-form-label">Any Permission From Competent
                                        Authority For Undertaking Construction<code>*</code></label>
                                    <div className="col-sm-6 d-md-flex">
                                        <div className="form-check col-md-6">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Yes
                                            </label>
                                          </div>
                                          <div className="form-check col-md-6">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/ >
                                            <label className="form-check-label" for="flexRadioDefault2">
                                            No
                                            </label>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr/>
                        <div className="data" id="dataDiv">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-4 col-form-label">If YES, CaseID<code>*</code></label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="inputPassword"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-4 col-form-label">Nature Of Violation From Such Approval<code>*</code></label>
                                        <div className="col-sm-8">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                              </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                               
                         </div>
                         <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Final Remarks</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                            <button type="button" className="btn btn-primary">Back</button>
                            <button type="button" className="btn btn-primary">Save as Draft</button>
                        </div>
                        </div></div>
                    </div>
                    </div>

               // </div>
            //</div>
  )
}

export default PrmCompetentAuth