import React from "react";
import { useNavigate } from "react-router-dom";

import googlelogo from "../assets/images/google.png";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row bg" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
        <div className="col-xl-4 col-lg-6">
          {/* ==================== Login Start ============================= */}
          <div className="card">
            <div className="card-body">
              <div className="login-box">
                <div className="login-header">
                  <header>Welcome</header>
                  <p>We are happy to have you back!</p>
                </div>
                <form id="loginForm">
                  <div className="input-box">
                    <input type="text" className="input-field" id="username" name="username" autoComplete="off" required="" />
                    <label htmlFor="email">Email or phone</label>
                  </div>
                  <div className="input-box">
                    <input type="password" className="input-field" id="password" name="password" autoComplete="off" required="" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="forgot">
                    <section>
                      <input type="checkbox" id="check" name="remember" />
                      <label htmlFor="check">Remember me</label>
                    </section>
                    <section>
                      <a href="#" className="forgot-link">
                        Forgot password?
                      </a>
                    </section>
                  </div>
                  <div className="input-box">
                    <input type="submit" className="input-submit" defaultValue="Sign In" />
                  </div>
                </form>
                <div className="middle-text">
                  <hr />
                </div>
                <div className="social-sign-in">
                  <button className="input-google">
                    <img src={googlelogo} alt="" />
                    <p>Sign In with Google</p>
                  </button>
                </div>
                <div className="sign-up">
                  <p>
                    Don't have an account?{" "}
                    <a className="signup" href="/signup">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ==================== Login End ============================= */}
        </div>
      </div>
    </div>
  );
};

export default Login;
