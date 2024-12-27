import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section padding-top-btm">
        <div className="container">
          <div className="row">
            <h1 className="main-title pt-4">Footer Section</h1>
          </div>

          <div className="row">
            <div className="col-md-4 p-3">
              <div className="col-md-12">
                <h3>CONTACT</h3>
                <hr />
              </div>

              <div className="col-md-12 d-flex contact-logo-info mb-2 mx-auto">
                <div className="col-md-2 d-flex justify-content-left align-items-center"></div>
                <div className="col-md-10 mt-4 mx-2">
                  <p>1201 park stree, Avenue 456, Dhanmondy</p>
                </div>
              </div>

              <div className="col-md-12 d-flex contact-logo-info mb-2">
                <div className="col-md-2 d-flex justify-content-left align-items-start"></div>
                <div className="col-md-10 mx-2">
                  <p>+91 123 568 963</p>
                </div>
              </div>

              <div className="col-md-12 d-flex contact-logo-info mb-2">
                <div className="col-md-2 d-flex justify-content-left align-items-start"></div>
                <div className="col-md-10 mx-2">
                  <p>info@Prospective.com.au</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-2 follow-us-logo mx-auto">
              <div className="col-md-12">
                <h3>FOLLOW US</h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
