import React from "react";
function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home/ Contact</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Type your message"
                    ></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button className="btn btn-primary shadow w-100">
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-md-6 mt-5 border-start text-center ">
                  {/* <h5 className="main-heading  text-center" id="contactadd"> Address Information</h5>
                  <p>#XXX, pune , Pune Maharastra - 561230,India</p>
                  <p>Phone: +91 789456813</p>
                  <p>Email: email@test.com</p> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.3798026887484!2d74.12865575058555!3d17.297214688074387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc183f76a66bd4b%3A0x629bf898a1c05602!2sRTO%20Karad!5e0!3m2!1sen!2sin!4v1641562486959!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    // style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
