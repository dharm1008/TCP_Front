import React from 'react'

const FollowUp = () => {
  return (
    <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px"}}>
            <div className="title fw-bold text-center"
                style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", Color: "white"}}>Filing of FIR, Filing of Challan, Follow-up of Case:
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
                        <div className="row mb-3" style={{display: "flex"}}>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <h6>details of FIR</h6>
                                </div>
                            </div>
                           
                        </div>
                        
                        <hr/>
                        <div className="data" id="dataDiv">
                        
                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <div className="mb-3 row">
                                        <h4>Details to be updated</h4>
                                    </div>
                                </div>
                                
                            </div>
                        
                            <div className="row mb-3">
                                
                                <div className="col-md-12">
                                    <div className="mb-3 row">
                                        <div className="col-sm-6 d-md-flex">
                                            <label for="inputPassword" className="col-sm-6 col-form-label">FIR Registered by Police</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban1" checked/>
                                                <label className="form-check-label" for="flexRadioUrban1">
                                                    Yes
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban2"/ >
                                                <label className="form-check-label" for="flexRadioUrban2">
                                                No
                                                </label>
                                              </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-2 col-form-label">FIR No. :<code>*</code></label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputPassword"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Challan Put up in court</label>
                                        <div className="col-sm-6 d-md-flex">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioOrder" id="flexRadioOrder1" checked/>
                                                <label className="form-check-label" for="flexRadioOrder1">
                                                    Yes
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioOrder" id="flexRadioOrder2"/>
                                                <label className="form-check-label" for="flexRadioOrder2">
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
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Petitioner(s)/Complainant</label>
                                        <div className="col-sm-6">
                                            <input type="email" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Respondent(s)/Accused</label>
                                        <div className="col-sm-6">
                                            <input type="email" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-6 col-form-label">Main Issue Involved</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>                                        </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <div className="mb-3 row">
                                        <form action="/action_page.php">
                                            <label for="birthday" className="col-sm-5 col-form-label">Next Hearing Date:</label>
                                            <input type="date" id="hearing" name="hearing"/>
                                        </form>
                                        
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-4 col-form-label">Case Status :<code>*</code></label>
                                        <div className="col-sm-8">
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="1">Approved</option>
                                                <option selected>Pending</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <div className="mb-3 row">
                                        <form action="/action_page.php">
                                                <label for="birthday" className="col-sm-5 col-form-label">Latest Status On :</label>
                                                <input type="date" id="hearing" name="hearing"/>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-4 col-form-label">Latest Status :<code>*</code></label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            
                            <div className="row mb-3">
                                
                                <div className="col-md-12">
                                    <div className="mb-3 row">
                                        <div className="col-sm-4 d-md-flex">
                                            <label for="inputPassword" className="col-sm-5 col-form-label">Orders Issued :</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban1" checked/>
                                                <label className="form-check-label" for="flexRadioUrban1">
                                                    Yes
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban2"/>
                                                <label className="form-check-label" for="flexRadioUrban2">
                                                No
                                                </label>
                                              </div>
                                        </div>
                                        <div className="col-sm-4 d-md-flex">
                                            <label for="inputPassword" className="col-sm-4 col-form-label">Final Orders :</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban1" checked/>
                                                <label className="form-check-label" for="flexRadioUrban1">
                                                    Yes
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban2"/>
                                                <label className="form-check-label" for="flexRadioUrban2">
                                                No
                                                </label>
                                              </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <div className="mb-3 row">

                                        <form action="/action_page.php">
                                            <label for="birthday" className="col-sm-5 col-form-label">Date of Order :</label>
                                            <input type="date" id="hearing" name="hearing"/>
                                        </form>
                                        
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="mb-3 row">

                                        <form action="/action_page.php">
                                            <label for="birthday" className="col-sm-5 col-form-label">Date of Recipients of Order :</label>
                                            <input type="date" id="hearing" name="hearing"/>
                                        </form>
                                        
                                    </div>
                                </div>

                            </div>


                            <div className="row mb-3">
                                <div className="col-md-8">
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-4 col-form-label">Operative part of Order :<code>*</code></label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                
                                <div className="col-md-12">
                                    <div className="mb-3 row">
                                        <div className="col-sm-4 d-md-flex">
                                            <label for="inputPassword" className="col-sm-5 col-form-label">Orders in Favour :</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban1" checked/>
                                                <label className="form-check-label" for="flexRadioUrban1">
                                                    Yes
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban2"/>
                                                <label className="form-check-label" for="flexRadioUrban2">
                                                No
                                                </label>
                                              </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="mb-3 row">
                                                <label for="inputPassword" className="col-sm-3 col-form-label">Full text of orders :<code>*</code></label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" id="inputPassword"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>



                        </div>
                        <hr/>
                        <div className="row mb-3">
                            <div className="col-md-5">
                                <div className="mb-3 row">

                                    <form action="/action_page.php">
                                        <label for="birthday" className="col-sm-6 col-form-label">Due date for complaince of Order :</label>
                                        <input type="date" id="hearing" name="hearing"/>
                                    </form>
                                    
                                </div>
                            </div>
                            <div className="col-sm-5 d-md-flex">
                                <label for="inputPassword" className="col-sm-5 col-form-label">Orders compiled with or not :</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban1" checked/>
                                    <label className="form-check-label" for="flexRadioUrban1">
                                        Yes
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban2"/>
                                    <label className="form-check-label" for="flexRadioUrban2">
                                    No
                                    </label>
                                  </div>
                            </div>

                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-7 d-md-flex">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Orders compiled with or not :</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban1" checked/>
                                    <label className="form-check-label" for="flexRadioUrban1">
                                        Yes
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioUrban" id="flexRadioUrban2"/>
                                    <label className="form-check-label" for="flexRadioUrban2">
                                    No
                                    </label>
                                  </div>
                            </div>

                        </div>

                        <hr/>
                            <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                                <button type="button" className="btn btn-primary">Back</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                            
                        </div>
</div> </div>
                   // </div>

                //</div>
           // </div>
  )
}

export default FollowUp