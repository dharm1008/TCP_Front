import React from "react";

const Signup = () => {
  const initialValues = {
    name: "",
    moblie: "",
    email: "",
    password: "",
    designationID: "",
  };

  return (
    <div className="container-fluid">
      <div className="row bg" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
        <div className="col-xl-4 col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="login-box">
                <div className="login-header">
                  <header>Sign up</header>
                </div>
                <form id="loginForm">
                  <div className="input-box">
                    <input type="text" className="input-field" id="username" name="username" autoComplete="off" required="" />
                    <label htmlFor="email">Name</label>
                  </div>
                  <div className="input-box">
                    <input type="text" className="input-field" id="username" name="username" autoComplete="off" required="" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-box">
                    <input type="text" className="input-field" id="username" name="username" autoComplete="off" required="" />
                    <label htmlFor="email">Phone</label>
                  </div>
                  <div className="input-box">
                    <input type="password" className="input-field" id="password" name="password" autoComplete="off" required="" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-box">
                    <input type="submit" className="input-submit" defaultValue="Sign In" />
                  </div>
                </form>
                <div className="middle-text">
                  <hr />
                </div>
                <div className="">
                  <button className="input-google justify-content-center">
                    Sign Up
                  </button>
                </div>
                <div className="sign-up">
                  <p>
                    Already have an account?{" "}
                    <a className="signup" href="/signup">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
