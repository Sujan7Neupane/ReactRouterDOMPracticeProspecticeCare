import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <>
      <section className="advice-section padding-top-btm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h1>Need an advice?</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque quaerat facere saepe quo doloremque tenetur magni
                    culpa qui temporibus officia?
                  </p>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-sm-6 col-6">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-sm-6 col-6">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="row my-4">
                <div className="col-md-12 col-12">
                  <textarea
                    id="message"
                    placeholder="Message"
                    rows="10"
                    style={{ minWidth: "100%" }}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-12 my-5">
              </div>
            </div>

            <div className="col-md-6 mt-4">
              <div className="row">
                <div className="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
