import React from 'react'

const OrderDTP = () => {
  return (
    <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px"}}>
    <div className="title fw-bold text-center"
        style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white"}}>Office Proposal by JE
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
                            <label for="inputPassword" className="col-sm-6 col-form-label">Office Proposal by JE
                                <code>*</code></label>
                        </div>
                    </div>
                    <div className="col-md-6  ">
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" disabled
                                id="flexRadioDefault01" checked/>
                            <label className="form-check-label" for="flexRadioDefault01">
                                Lodge FIR Against illegal land sub-division
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"disabled
                                id="flexRadioDefault02"/>
                            <label className="form-check-label" for="flexRadioDefault02">
                                Lodge FIR Against illegal land sub-division and illegal Construction there on
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"disabled
                                id="flexRadioDefault03"/>
                            <label className="form-check-label" for="flexRadioDefault03">
                                Updated Site Report
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"disabled
                                id="flexRadioDefault04"/>
                            <label className="form-check-label" for="flexRadioDefault04">
                                Other, Specify
                            </label>
                        </div>
                    </div>

                </div>
                <div className="row" >
                    <div className="col-md-12">
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-4 col-form-label">FIR Memo</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" disabled placeholder="hills.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-12">
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-4 col-form-label">JE
                                Remarks</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" disabled placeholder="JE Remarks/Proposal"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row mb-3" style={{display: "flex", justifyContent: "center"}}>
                    <div className="col-md-4">
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-6 col-form-label">Brief of DTP Order
                                <code>*</code></label>
                        </div>
                    </div>
                    <div className="col-md-6  ">
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" checked/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                Violation of Act: No action proposed
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2"/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                Other, Specify
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault3"/>
                            <label className="form-check-label" for="flexRadioDefault3">
                                Forward FIR case to police
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault4"/>
                            <label className="form-check-label" for="flexRadioDefault4">
                                Seek Update Site Report
                            </label>
                        </div>
                    </div>

                </div>
                <div className="data" id="ShowCauseNotice">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Grounds</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">FIR Memo <code>*</code></label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="file" id="formFile"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label"></label>
                                <div className="col-sm-8">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                         FIR Memo Signed
                                        </label>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="data" id="LodgingofFIR">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3 row">
                                    <label for="inputPassword" className="col-sm-4 col-form-label">Grounds</label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                            rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        
                        </div>
                    <div className="data" id="US_report">


                       


                    </div>
                    <div className="data" id="Specify">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3 row">
                                    <label for="inputPassword" className="col-sm-4 col-form-label">Revert To</label>
                                    <div className="col-sm-8">
                                       <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                       




                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Subject:</label>
                                <div className="col-sm-8">
                                   <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        
                        <div className="col-md-12">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Attachment:</label>
                                <div className="col-sm-8">
                                    <input type="file" classname="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">DTP
                                    Remarks/Proposal</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                        <button type="button" className="btn btn-primary">Back</button>
                        <button type="button" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>

                </div>
            </div>
       // </div>
    //</div>

//</div>
//</div>
  )
}

export default OrderDTP