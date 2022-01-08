import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "../slider/Slider";
import Vmc from "./inc/Vmc";
import "./Home.css";
import CarAnimation from "./inc/caranimation/CarAnimation";
import Service1 from "../../assets/v-learners-license-services.png";
import Service2 from "../../assets/v-renewal-of-registration.png";
import Service3 from "../../assets/v-transfer-ownership.png";
import Service4 from "../../assets/v-permit-services.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Slider />
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/login")}
                />
                <div className="card-body">
                  <h6>Drivers/ Learners License</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/login" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/login")}
                />
                <div className="card-body">
                  {/* <ButtonBase></ButtonBase> */}
                  <h6>Vehicle Registration</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/login" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service3}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/login")}
                />
                <div className="card-body">
                  <h6>Transfer Ownership</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/login" className="btn btn-info shadow ">
                    More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/login")}
                />
                <div className="card-body">
                  <h6>Vehicle Permit</h6>
                  <p>amet recusandae repudiandae vitae natus deleniti ut,</p>
                  <Link to="/login" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">RTO Management System</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                amet recusandae repudiandae vitae natus deleniti ut, earum
                aperiam distinctio labore? Perferendis dolores in exercitationem
                pariatur maiores et, vero saepe iste.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our vison, mission and values
      {<Vmc />} */}
      {<CarAnimation />}
    </div>
  );
}
export default Home;
