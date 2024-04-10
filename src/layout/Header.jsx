import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/har.govt.png";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "/construction-existing", title: "Existing-construction", icon: "bx bx-grid-alt", name: "Existing construction" },
  { href: "/const-violation", title: "Violation", icon: "bx bx-message-square-detail", name: "Violation" },
  { href: "/demolitionexercise", title: "Demolition Exercise", icon: "bx bx-detail", name: "Demolition Exercise" },
  { href: "/demolition-schedule", title: "Demoltion Schedule", icon: "bx bx-table", name: "Demoltion Schedule" },
  { href: "/fir-memo", title: "Fir Memo", icon: "bx bx-grid-alt", name: "Fir Memo" },
  { href: "/follow-up", title: "Follow UP", icon: "bx bx-message-square-detail", name: "Follow UP" },
  { href: "/illegal-land", title: "Illegal land", icon: "bx bx-detail", name: "Illegal land" },
  { href: "/independent-construction", title: "Independent Construction", icon: "bx bx-table", name: "Independent Construction" },
  { href: "/misuse-land", title: "Misuse Land", icon: "bx bx-table", name: "Misuse Land" },
  { href: "/misuse-report", title: "Misuse Report", icon: "bx bx-table", name: "Misuse Report" },
  { href: "/natureof-violation", title: "Nature Violation", icon: "bx bx-user", name: "Nature Violation" },
  { href: "/office-proposal", title: "Office Proposal", icon: "bx bx-user", name: "Office Proposal" },
  { href: "/order-dtp", title: "Order Dtp", icon: "bx bx-window", name: "Order Dtp" },
  { href: "/prm-competent-auth", title: "PRM", icon: "bx bx-window", name: "PRM" },
  { href: "/revenue-estate", title: "Revenue Estate", icon: "bx bx-table", name: "Revenue Estate" },
  { href: "/search-filling", title: "Search Filling", icon: "bx bx-table", name: "Search Filling" },
  { href: "/search-illegal", title: "Search Illegal Land", icon: "bx bx-table", name: "Search Illegal Land" },
  { href: "/search-uc", title: "UC site", icon: "bx bx-table", name: "UC site" },
  { href: "/sub-division", title: "Sub Division", icon: "bx bx-table", name: "Sub Division" },
  { href: "/tcp", title: "TCP", icon: "bx bx-table", name: "TCP" },
];
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400 && !isNavOpen) {
        setIsNavOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen]);

  return (
    <>
      {/*-------------- header start ---------------------*/}
      <header className={isNavOpen ? "header body-pd" : "header"} id="header" style={{ height: "100px" }}>
        <div className="header_toggle" onClick={toggleNavbar}>
          <i className={isNavOpen ? "bx bx-x" : "bx bx-menu"} id="header-toggle" />
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
      <div className={isNavOpen ? "l-navbar show " : "l-navbar"} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="/" className={pathname === "/" ? "nav_logo active" : "nav_logo"}>
              <i className="bx bx-home nav_logo-icon" /> <span className="nav_logo-name">Home</span>
            </a>
            <div className="nav_list">
              {navLinks.map((link, index) => (
                <Nav.Link key={index} className={pathname === link.href ? "active" : ""} as={"button"} title={link.title} onClick={() => navigate(link.href)}>
                  <i className={link.icon + " nav_icon"} /> <span className="nav_name">{link.name}</span>
                </Nav.Link>
              ))}
            </div>
          </div>
          <Nav.Link href="#">
            <i className="bx bx-log-out nav_icon" /> <span className="nav_name">SignOut</span>
          </Nav.Link>
        </nav>
      </div>
      {/*-------------- header end ---------------------*/}
    </>
  );
};

export default Header;
