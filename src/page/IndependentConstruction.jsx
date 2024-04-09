import React from 'react'

const IndependentConstruction = () => {
  return (
    <div className="col " style={{backgroundColor: "rgb(255, 255, 255)", marginTop: "100px"}}>
        <div className="title fw-bold text-center"
            style={{backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white"}}>Independent Unauthorised Construction:Present Status
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

            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label">Present Land Use<code>*</code></label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputPassword"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label">Activity /Purpose<code>*</code></label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Stage of Construction<code>*</code></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword"/>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Category of Construction<code>*</code></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label">Site Area
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
                        <label for="inputPassword" className="col-sm-4 col-form-label">Ground Coverage<code>*</code></label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="inputPassword"/>
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
                        <label for="inputPassword" className="col-sm-4 col-form-label">Boundary Wall<code>*</code>
                        </label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="inputPassword"/>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="inputPassword"
                                placeholder="sq M"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label">Excavation<code>*</code></label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="inputPassword"/>
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
                        <label for="inputPassword" className="col-sm-4 col-form-label">Site/Area Falling in 30/100m restricted Belt<code>*</code></label>
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
                        <label for="inputPassword" className="col-sm-4 col-form-label">
                            Construction Area Falling in 30/100m
                            restricted belt<code>*</code></label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="inputPassword"/>
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
                        <label for="inputPassword" className="col-sm-4 col-form-label">No of Storeys<code>*</code></label>
                        <div className="col-sm-8">
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label">Area covered in respective Floor</label>
                        <div className="col-sm-8">
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                
                <div className="col-md-6">
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label">Remarks</label>
                        <div className="col-sm-8">
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

     );
};

export default IndependentConstruction