import React from 'react'

const ConstructionExisting = () => {
  return (
    <div>
  <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px;"}}>
    <div className="title fw-bold text-center"
        style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color:"white"}}>Construction Existing
        Before Material Date
    </div>
    <div className="text text-start fst-italic"
        style={{backgroundColor: "rgb(237, 237, 237)", paddingTop: "10px", fontSize: "small", color: "rgb(0, 117, 243);"}}>
        <ul className="breadcrumb" style={{margin: "0;"}}>
            <li><a href="#">UC Site Report</a></li>
            <li>New</li>
        </ul>
    </div>
    <div className="text text-end fst-italic mb-3"
        style={{backgroundColor: "rgb(237, 237, 237)", paddingBottom: "10px", fontSize: "small", color: "rgb(0, 117, 243);"}}>
        <span>Change Role</span><span className="space">|</span>
        <span>Unit Converter</span><span className="space">|</span>
        <span>Help?</span>
    </div>

    <div className="container">
        <div className="row">
            <div className="form-control" style={{backgroundColor: "rgb(237, 237, 237);"}}>
                <div className="row mb-3" style={{display: "flex", justifyContent: "center;"}}>
                    <div className="col-md-6">
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-6 col-form-label">Construction Existing
                                Before Material Date</label>
                            <div className="col-sm-6">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Yes</option>
                                    <option value="1">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr/>
                <div className="data">
                <div className="row mb-3">
                    <div className="col-md-12" style={{display: "flex", justifyContent: "center;"}}>
                        <button type="button" className="btn btn-primary">Add New UC Material Date</button>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-4 col-form-label">Site Area</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword"
                                    placeholder="45000.00" disabled/>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Sq M"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-4 col-form-label">Ground Coverage</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword"
                                    placeholder="45000.00" disabled/>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Sq M"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-4 col-form-label">Use Of such
                                Construction</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputPassword"
                                    placeholder="Recreational"/>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Boundary Wall</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="200.000" disabled/>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="Feets"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Excavation</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="10.000" disabled/>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="cubic Feets"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Site Area Falling in
                                    30/100m
                                    restricted Belt
                                </label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="100.000" disabled/>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="sq M"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Constructed area
                                    Falling in 30/100 restricted Belt</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="10.000" disabled/>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="Sq M"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Material Date</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">No. Of
                                    Storeys</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Area (Acre)</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Share</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Area covered on
                                    Respective Floor Unit</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"
                                        placeholder="Sq M"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Area covered on Respective
                            Floor</label>
                        <div className="col-sm-10">
                            <table className="table  table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr.No</th>
                                        <th scope="col">Floor No</th>
                                        <th scope="col">Floor Area</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>0</td>
                                        <td>2000.00 sq. M</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>0</td>
                                        <td>1000.00 sq. M</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Area Covered on all Floors
                          </label>
                            <div className="col-sm-5">
                            <input type="text" className="form-control" id="inputPassword" placeholder="3900.00" disabled/>
                        </div>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="inputPassword" placeholder="Sq M" disabled/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">
                            Remarks</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword" placeholder="Jesonipat 15/02/2014: Remarks by JE "  disabled />
                        </div>
                       
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label"> Pre-Existing Constrn. Plan/Field Book Details</label>
                            <div className="col-sm-10">
                                <span>FileName.jpg</span>
                        </div>
                       
                    </div>
                </div>
                </div>
                    <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                        <button type="button" className="btn btn-primary">Edit</button>
                        <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                    <div className="d-grid gap-2 mb-3 d-md-flex justify-content-end">
                        <button type="button" className="btn btn-primary">Back</button>
                        <button type="button" className="btn btn-primary">Next</button>

                    </div>
                </div>

            </div>

        </div>
    </div>
  
    </div>
  
    
  )
}

export default ConstructionExisting