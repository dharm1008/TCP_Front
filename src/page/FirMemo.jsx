import React from 'react'

const FirMemo = () => {
  return (
    <div>
       <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px;"}}>
        <div className="title fw-bold text-center"
            style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white;"}}>Confirmation Of Service Of Show Cause Notice,
            Restoration Orders Or FIR Memo
        </div>
        <div className="text text-start fst-italic"
            style={{backgroundColor: "rgb(237, 237, 237)", paddingTop: "10px", fontSize: "small", color: "rgb(0, 117, 243);"}}>
            <ul className="breadcrumb" style={{margin: "0;"}}>
                <li><a href="#">UC Site Report</a></li>
                <li>New</li>
            </ul>
        </div>
        <div className="text text-end fst-italic mb-3"
            style={{backgroundColor: "rgb(237, 237, 237)" ,paddingBottom: "10px", fontSize: "small", color: "rgb(0, 117, 243);"}}>
            <span>Change Role</span><span className="space">|</span>
            <span>Unit Converter</span><span className="space">|</span>
            <span>Help?</span>
        </div>

        <div className="container">
            <div className="row">
                <div className="form-control" style={{backgroundColor: "rgb(237, 237, 237);"}}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">File ID :<code>*</code></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Owner's Name :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Owner's Address :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Status :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    {/* <!-- Table start --> */}
                    <div className="row mb-3">
                        <div className="col-md-12" >
                            <table className="table  table-striped table-hover">
                                <thead>
                                    <tr>
                                      <th scope="col">Sr.No</th>
                                      <th scope="col">File ID</th>
                                      <th scope="col">Alert Name</th>
                                      <th scope="col">Development Plan</th>
                                      <th scope="col">Owner's Name</th>
                                      <th scope="col">Owner's Address</th>
                                      <th scope="col">Status Date</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>ENF/UC/ST/DTP</td>
                                      <td>---</td>
                                      <td>---</td>
                                      <td>TCP</td>
                                      <td>test</td>
                                      <td>19-03-24</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>ENF/UC/ST/DTP</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>TCP</td>
                                        <td>test</td>
                                        <td>19-03-24</td>
                                      </tr>
                                  </tbody>
                              </table>
                        </div>
                     </div>
{/* <!-- Table end--> */}

<div className="row mb-3">
    <div className="title fw-bold text-center"
        style={{backgroundColor: "#094E7F", padding: "10px", color: "white;"}}>
        SCN Dispatch Details
    </div>
</div>

<div className="row mb-3">
    <div className="col-md-6">
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-4 col-form-label">SCN Dispatch No :</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" id="inputPassword" disabled/>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-4 col-form-label">SCN Dispatch Date :</label>
            <div className="col-sm-8">
                <input type="date" className="form-control" id="inputPassword"/>
            </div>
        </div>
    </div>
</div>
<div className="row mb-3">
    <div className="col-md-6">
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-4 col-form-label">Regd Post No :</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" id="inputPassword"/>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-4 col-form-label">Regd Post Date :</label>
            <div className="col-sm-8">
                <input type="date" className="form-control" id="inputPassword"/>
            </div>
        </div>
    </div>
</div>
<div className="row mb-3">
    <div className="col-md-6">
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-4 col-form-label">SCN Pasted/Served Upload</label>
            <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-4 col-form-label">File Upload :</label>
            <div className="col-sm-8">
                <input type="file" className="form-control" id="inputPassword"/>
            </div>
        </div>
    </div>
</div>
  {/* <!-- Table start --> */}
  <div className="row mb-3">
    <div className="col-md-12" >
        <table className="table  table-striped table-hover">
            <thead>
                <tr>
                  <th scope="col">Alert Name</th>
                  <th scope="col">Document</th>
                  <th scope="col">Created By</th>
                  <th scope="col">Created Date</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ENF/UC/ST/DTP</td>
                  <td>TCP</td>
                  <td>test</td>
                  <td>19-03-24</td>
                </tr>
              </tbody>
          </table>
    </div>
 </div>
{/* <!-- Table end--> */}

<div className="row mb-3">
    <div className="title fw-bold text-center"
        style={{backgroundColor: "#094E7F", padding: "10px", color: "white;"}}>
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
                        <button type="button" className="btn btn-primary">Update</button>
                        {/* <!-- <button type="button" className="btn btn-primary">Next</button> --> */}
                        
                    </div>



                </div>

            </div>
            
        </div>
    </div>


    </div>
  )
}

export default FirMemo