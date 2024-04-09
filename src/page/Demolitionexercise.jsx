import React from 'react'

const DemolitionSchedule = () => {
  return (
    <div>
        <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px;"}}>
        <div className="title fw-bold text-center"
            style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white;"}}>Proposed Demolition Schedule
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
                    <div className="col-md-12">
                        <div className="mb-3 row" id="heading">
                            <div className="heading"> Search</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">File ID :<code>*</code></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                    </div>


                   

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">District :<code>*</code></label>
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

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Month :<code>*</code></label>
                                <div className="col-sm-8">
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option selected>April</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Year :<code>*</code></label>
                                <div className="col-sm-8">
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="1">2021</option>
                                        <option value="2">2022</option>
                                        <option value="3">2023</option>
                                        <option selected>2024</option>
                                      </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Status:<code>*</code></label>
                                <div className="col-sm-8">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Final</option>
                                        <option value="3">Pending</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
             
                    <div className="d-grid gap-2 mb-3 d-md-flex justify-content-md-center">
                        <button type="button" className="btn btn-success">Search</button>
   
                    </div>
                    {/* <!-- Table start --> */}
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="mb-3 row" id="heading">
                                <div className="heading"> View/Add Demolition</div>
                            </div>
                        </div>
                        <div className="col-md-12" >
                            <table className="table  table-striped table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Transaction ID</th>
                                    <th scope="col">File ID</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Month/Year</th>
                                    <th scope="col">operation</th>
                                    <th scope="col">Delete</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>ENF/DEMOL-1</td>
                                        <td>ENF/DEMOL-1/DTP-P/SR-1A</td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </td>
                                        <td><input type="date" id="hearing" name="hearing"/></td>
                                        <td><button type="button" className="btn btn-primary">Edit</button></td>
                                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="row"></th>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </td>                                        
                                        <td><input type="date" id="hearing" name="hearing"/></td>
                                        <td><button type="button" className="btn btn-primary">Add</button></td>
                                        <td></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <!-- Table end--> */}


                </div>

            </div>
            
        </div>
    </div>
    </div>
  )
}

export default DemolitionSchedule