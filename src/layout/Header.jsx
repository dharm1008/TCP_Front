import React from "react";
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/images/har.govt.png";

const Header = () => {
  return (
    <form id="form1" runat="server">
      {/*-------------- header start ---------------------*/}
      <header className="header" id="header" style={{ height: "100px" }}>
        <div className="header_toggle">
          <i className="bx bx-menu" id="header-toggle" />
        </div>
        <div className="container-fluid d-flex">
          <div className="logo" style={{ margin: "5px" }}>
            <img src={logo} className="rounded float-start" style={{ marginTop: "5px" }} alt="..." />
          </div>
          <div className="main col text-center p-0 m-0" style={{ color: "rgb(0, 61, 164)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h2 className="text fw-bold text-center" style={{ color: "#094E7F" }}>
              Department of Town Country Planning
            </h2>
          </div>
          <div className style={{ margin: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span className="UserId">Junior Engineer</span>
            <i className="fa fa-sign-out" />
          </div>
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <a className="nav_logo">
              <i className="bx bx-home nav_logo-icon" /> <span className="nav_logo-name">Home</span>
            </a>
              <div className="nav_list">
                <Nav.Link href="/home"  className="nav_link active">
                  <i className="bx bx-grid-alt nav_icon" />
                  <span className="nav_name">LandSchedule-License</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-message-square-detail nav_icon" /> <span className="nav_name">Renewal Of License</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-detail nav_icon" /> <span className="nav_name">LandSchedule-CLU</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-table nav_icon" /> <span className="nav_name">UC Site Report</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-table nav_icon" /> <span className="nav_name">ISL Site Report</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-table nav_icon" /> <span className="nav_name">MOL Site Report</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-user nav_icon" /> <span className="nav_name">Filing of FIR</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-user nav_icon" /> <span className="nav_name">Demolition</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-window nav_icon" /> <span className="nav_name">Sectoral Plan &amp; Site or Planning Param</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-window nav_icon" /> <span className="nav_name">Demarcation Plan</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-window nav_icon" /> <span className="nav_name">Building Plan</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-user nav_icon" /> <span className="nav_name">Occupation</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bx bx-bookmark nav_icon" /> <span className="nav_name">Grant Of Compl. Certificate</span>
                </Nav.Link>
              </div>
          </div>
          <Nav.Link href="#">
            <i className="bx bx-log-out nav_icon" /> <span className="nav_name">SignOut</span>
          </Nav.Link>
        </nav>
      </div>
      {/*-------------- header end ---------------------*/}
      {/*Container Main start*/}
      {/*Container Main start*/}
      {/*Container Main end*/}
    </form>
  );
};

export default Header;
