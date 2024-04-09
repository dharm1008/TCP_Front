import React from 'react'

const OfficeProposal = () => {
  return (
    <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px"}}>
    <div className="title fw-bold text-center"
        style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", Color: "white"}}>Office Proposal by JE
    </div>
    <div className="text text-start fst-italic"
        style={{backgroundColor: "rgb(237, 237, 237)", paddingTop: "10px", fontSize: "small", Color: "rgb(0, 117, 243)"}}>
        <ul className="breadcrumb" style={{margin: "0"}}>
            <li><a href="#">UC Site Report</a></li>
            <li>New</li>
        </ul>
    </div>
    <div className="text text-end fst-italic mb-3"
        style={{backgroundColor: "rgb(237, 237, 237)", paddingBottom: "10px", fontSize: "small", Color: "rgb(0, 117, 243)"}}>
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
                            <label for="inputPassword" className="col-sm-6 col-form-label">Office Proposal
                                <code>*</code></label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" checked/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                Proposal for sending complaint to police for investigation and registration of
                                FIR
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2"/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                Updated Site Report
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault3"/>
                            <label className="form-check-label" for="flexRadioDefault3">
                                Proposal for issue of show causes notice
                            </label>
                        </div>
                        <div className="form-check col-md-12">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault4"/>
                            <label className="form-check-label" for="flexRadioDefault4">
                                Other, Specify
                            </label>
                        </div>
                    </div>

                </div>

                <hr/>
                <div className="data" id="ShowCauseNotice">
                    <div className="row mb-3">
                        <div className="title fw-bold text-center"
                            style={{backgroundColor: "#094E7F", padding: "10px", Color: "white"}}>
                            Show Causes Notice
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            Show Cause Notice to be Issued for Violation
                        </div>
                    </div>
                    <div className="row d-md-flex">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Act No 41 of 1963
                                </label>
                            </div>
                           
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-check">

                                        <label className="form-check-label" for="flexCheckDefault">
                                            Violation of section
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-8 d-md-flex">
                                    <div className="form-check">
                                        
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                   
                                        <label className="form-check-label" for="flexCheckDefault">
                                            3
                                        </label> </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            6
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            7
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            8
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            10
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row d-md-flex">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Act No 8 of 1975
                                </label>
                            </div>
                           
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-check">

                                        <label className="form-check-label" for="flexCheckDefault">
                                            Violation of section
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-8 d-md-flex">
                                    <div className="form-check">
                                        
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                   
                                        <label className="form-check-label" for="flexCheckDefault">
                                            7(ii)
                                        </label> </div>
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row d-md-flex">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Act No 1 of 1952
                                </label>
                            </div>
                           
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-check">

                                        <label className="form-check-label" for="flexCheckDefault">
                                            Violation of section
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-8 d-md-flex">
                                    <div className="form-check">
                                        
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                   
                                        <label className="form-check-label" for="flexCheckDefault">
                                            5
                                        </label> </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            6
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            7
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            11
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row d-md-flex">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">Others, Specify
                                
                                 </label>
                                 </div>
                            </div>
                           
                        
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-check">

                                        <label className="form-check-label" for="flexCheckDefault">
                                            Violation of section
                                        </label>
                                    </div>
                                </div></div>
                                 <div className="col-md-8 d-md-flex">
                                    <div className="form-check">
                                        
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                   
                                        <label className="form-check-label" for="flexCheckDefault">
                                            3
                                        </label> </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            6
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            7
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            0
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="flexCheckDefault">
                                            10
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                    </div>
                                </div> 
                            </div>
                            
                        </div>
                    </div>
                    <div className="data" id="LodgingofFIR">
                        <div className="row mb-3">
                            <div className="title fw-bold text-center"
                                style={{backgroundColor: "#094E7F", padding: "10px", Color: "white"}}>
                                Lodging of FIR
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                Lounge FIR Under Act/Section
                            </div>
                        </div>
                        <div className="row d-md-flex">
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Select Act No 41 of 1963
                                    </label>
                                </div>
                               
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-check">

                                            <label className="form-check-label" for="flexCheckDefault">
                                                Violation of section
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-8 d-md-flex">
                                        <div className="form-check">
                                            
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                       
                                            <label className="form-check-label" for="flexCheckDefault">
                                                3
                                            </label> </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                6
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                7
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                8
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                10
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row d-md-flex">
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Select Act No 8 of 1975
                                    </label>
                                </div>
                               
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-check">

                                            <label className="form-check-label" for="flexCheckDefault">
                                                Violation of section
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-8 d-md-flex">
                                        <div className="form-check">
                                            
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                       
                                            <label className="form-check-label" for="flexCheckDefault">
                                                7(ii)
                                            </label> </div>
                                       
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row d-md-flex">
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Select Act No 1 of 1952
                                    </label>
                                </div>
                               
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-check">

                                            <label className="form-check-label" for="flexCheckDefault">
                                                Violation of section
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-8 d-md-flex">
                                        <div className="form-check">
                                            
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                       
                                            <label className="form-check-label" for="flexCheckDefault">
                                                5
                                            </label> </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                6
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                7
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                11
                                            </label>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row d-md-flex">
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">Others, Specify
                                    

                                    </label>
                                    </div>
                                </div>
                               
                            
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-check">

                                            <label className="form-check-label" for="flexCheckDefault">
                                                Violation of section
                                            </label>
                                        </div>
                                    </div></div>
                                   
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    Ground for lodging FIR against the seller under sec 7(i) and/ or 7(ii) of act no. * of 1975
                                </div>
                                <div className="col-md-6 d-block">
                                    <div className="mb-3">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ground for lodging FIR against the seller under sec ?(ii) "></textarea>
                                      </div>
                                      <div className="mb-3">
                                        <input className="form-control" type="file" id="formFile"/>
                                      </div>
                                </div>
                            </div>    
                        </div>
                    <div className="data" id="US_report">


                       


                    </div>
                    <div className="data" id="Specify">


                       




                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">JE
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
        </div>
    </div>

// </div>
// </div>
)
}


export default OfficeProposal