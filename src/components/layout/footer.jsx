import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            2019 - {new Date().getFullYear()} © by{" "}
            <a href="http://xifra-invest.com">xifra-invest.com</a>
          </div>
          <div className="col-md-6">
            <div className="text-md-right footer-links d-none d-sm-block">
              <a href="http://xifra-invest.com">Home</a>
              <a href="http://xifra-invest.com">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
