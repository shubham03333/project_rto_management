import React from "react";
import Vmc from "./inc/Vmc";
function About() {
  return (
    <div>
      {/* banner Design */}
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home/ About Us</h6>
            </div>
          </div>
        </div>
      </section>
      {/* ########## */}
      <section className="section border-bottom">
        <div className="container">
          <h5 className="main-heading">RTO Management System</h5>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatibus cum officia voluptatum explicabo, recusandae qui unde
            vitae cumque dolor?
          </p>
        </div>
      </section>
      {/* Our vison, mission and values */}
      {<Vmc />}
    </div>
  );
}
export default About;
