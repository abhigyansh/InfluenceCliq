import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import formImage from "./assets/formImage2.jpg";

const MyFormBrands = () => {
  return (
    <div
      className="container-fluid pt-3 pb-3"
      style={{ minHeight: "100vh", backgroundColor: "#f9fbfd" }}
    >
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {/* Left Side: Image */}
        <div
          className="col-lg-6 col-md-5 p-0 d-none d-md-block card my-card-2 border-0 shadow p-4 w-100"
          style={{
            backgroundImage: `url(${formImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Right Side: Form */}
        <div className="col-lg-6 col-md-7 col-sm-12 d-flex align-items-center">
          <div
            className="card my-card-1 border-0 shadow p-4 w-100"
            style={{ maxWidth: "800px" }}
          >
            <h3 className="text-center mb-3">Are You A Brand ?</h3>
            <p className="text-center text-muted mb-4">Register Here</p>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="e.g. John"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="e.g. Smith"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="e.g. john@your-domain.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="+00 0000 000 0000"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                    Company Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="Write Here"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                When you want to launch Campaigns? :
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">
                   Industry
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="Write Here"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                 Tentative Budget:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="Write Here"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                Category of Influencer you are looking for? :
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  Creating an account means you're okay with our{" "}
                  <a href="#">Terms and Conditions</a> and our{" "}
                  <a href="#">Privacy Policy</a>.
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFormBrands;
