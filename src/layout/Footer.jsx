import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 bg-light border-top mt-5 text-center" id="MainFooter">
      <strong>
        Copyright © 2024{" "}
        <a style={{ color: "blue" }} href="https://www.gmda.gov.in/?language=en">
          Developed by GIS Division
        </a>
        .
      </strong>
      All rights reserved.
    </footer>
  );
};

export default Footer;
