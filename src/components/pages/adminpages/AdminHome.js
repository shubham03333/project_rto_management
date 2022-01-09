import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/v-road-tax.png";

function AdminHome() {
  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Admin Home</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img src={Service1} alt="services" />
                <div className="card-body">
                  <h6>Drivers License Control </h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/userHome" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Vehicle Registration Control</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/userHome" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service3}
                  className="w-80 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Ownership Transfer Control</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/userHome" className="btn btn-info shadow ">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Vehicle Permit Control</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/userHome" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img src={Service6} alt="services" />
                <div className="card-body">
                  <h6>TAX</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/userHome" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img src={Service5} alt="services" />
                <div className="card-body">
                  <h6>PUC Control</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/userHome" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4"></div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Users Control</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/userHome" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdminHome;
