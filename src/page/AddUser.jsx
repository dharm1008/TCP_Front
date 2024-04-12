import React from "react";

const AddUser = () => {
  return (
    <>
      <div className="col " style={{ backgroundColor: "rgb(255, 255, 255)", marginTop: 100 }}>
        <div
          className="title fw-bold text-center"
          style={{
            backgroundColor: "#094E7F",
            padding: 10,
            marginTop: 100,
            color: "white",
          }}
        >
          Add User
        </div>
        <div
          className="text text-start fst-italic"
          style={{
            backgroundColor: "rgb(237, 237, 237)",
            paddingTop: 10,
            fontSize: "small",
            color: "rgb(0, 117, 243)",
          }}
        >
          <ul className="breadcrumb" style={{ margin: 0 }}>
            <li>
              <a href="#">UC Site Report</a>
            </li>
            <li>New</li>
          </ul>
        </div>
        <div
          className="text text-end fst-italic mb-3"
          style={{
            backgroundColor: "rgb(237, 237, 237)",
            paddingBottom: 10,
            fontSize: "small",
            color: "rgb(0, 117, 243)",
          }}
        >
          <span>Change Role</span>
          <span className="space">|</span>
          <span>Unit Converter</span>
          <span className="space">|</span>
          <span>Help?</span>
        </div>
        <div className="container">
          <div className="container-xl px-4 mt-4">
            <div className="row">
              <div className="col-xl-4">
                {/* Profile picture card*/}
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header text-center">Profile Picture</div>
                  <div className="card-body text-center">
                    {/* Profile picture image*/}
                    <img className="img-account-profile rounded-circle mb-2" src="https://avatar.iran.liara.run/public/boy" alt="" name="Profileic" />
                    {/* Profile picture help block*/}
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    {/* Profile picture upload button*/}
                    <button className="btn btn-primary" type="button">
                      Upload new image
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                {/* Account details card*/}
                <div className="card mb-4">
                  <div className="card-header text-center">User Details</div>
                  <div className="card-body">
                    <form id="sign-up-form" action="/api/signup" method="POST">
                      {/* Form Group (username)*/}
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="user-name">
                          Username
                        </label>
                        <input className="form-control" id="user-name" type="text" placeholder="Enter your username" name="username" />
                      </div>
                      {/* Form Row*/}
                      <div className="row gx-3 mb-3">
                        {/* Form Group (first name)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputFullName">
                            Full name
                          </label>
                          <input className="form-control" id="inputFullName" type="text" placeholder="Enter your full name" name="fullName" />
                        </div>
                        {/* Form Group (last name)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="Gender">
                            Gender
                          </label>
                          <div className="d-flex">
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio1" name="gender" defaultValue="male" defaultChecked="" />
                              <label className="form-check-label" htmlFor="radio1">
                                Male
                              </label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio2" name="gender" defaultValue="female" />
                              <label className="form-check-label" htmlFor="radio2">
                                Female
                              </label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio3" name="gender" defaultValue="other" />
                              <label className="form-check-label" htmlFor="radio3">
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Form Group (email address)*/}
                      <div className="row gx-3 mb-3">
                        {/* Form Group (phone number)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputEmailAddress">
                            Email address
                          </label>
                          <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" name="email" />
                        </div>
                        {/* Form Group (phone number)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputPhone">
                            Phone number
                          </label>
                          <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" name="Phone_number" />
                        </div>
                      </div>
                      {/* Form Row*/}
                      <div className="row gx-3 mb-3">
                        {/* Form Group (user role)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputUserRole">
                            User Role
                          </label>
                          <input className="form-control" id="inputUserRole" type="text" placeholder="Enter your User Role" name="User_Role" />
                        </div>
                        {/* Form Group (password)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="password">
                            Password
                          </label>
                          <input className="form-control" id="password" type="password" placeholder="Password" name="password" />
                        </div>
                      </div>
                      {/* Save changes button*/}
                      <button className="btn btn-primary" type="submit">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
