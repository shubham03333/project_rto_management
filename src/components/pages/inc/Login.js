import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const validate = (event) => {
    event.preventDefault();

    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
        role,
      };

      // url to make signin api call
      const url = `${URL}/user/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Welcome to the application");

          // get the data sent by server
          const { id, name } = result["data"];

          // persist the logged in user's information for future use
          sessionStorage["id"] = id;
          sessionStorage["name"] = name;
          sessionStorage["loginStatus"] = 1;

          // navigate to home component
          navigate("/userHome");
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };

  return (
    <div className="body">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>RTO Management System</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad
            alias nesciunt quas culpa veniam voluptates nostrum ducimus ut in.
          </p>
        </div>

        <div className="col-md-3" id="lf">
          <h2>Login</h2>
          <form onSubmit={validate}>
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              // value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <div className="col-md-2 justify">
              <label className="role">Role</label>
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="exampleRadios1"
                  value="admin"
                  
                  // defaultChecked
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <label
                  className="form-check-label radiog "
                  htmlFor="exampleRadios1"
                >
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  value="user"
                  id="exampleRadios2"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <label
                  className="form-check-label radiog"
                  htmlFor="exampleRadios2"
                >
                  User
                </label>
              </div>
            </div> */}
            <input
              type="submit"
              className="btn btn-primary button form-control"
              value="Login"
            />
            <hr />
            <button
              className="btn btn-success button"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
