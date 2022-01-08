import React, { useState, useEffect } from "react";
import UserService from "../../Services/UserService";

const UserTable = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    UserService.getUser()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setUser(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(user);
  const deleteUser = (id) => {
    UserService.deleteUser(id).then((res) => {
      setUser(user.filter((user) => user.id !== id));
    });
  };

  console.log(user);
  const userList = user.map((obj) => {
    return (
      <div className="container align-content-center">
        <div className="col-md-12 ">
          <h2 className="text-center mt-3">Users List</h2>
          {/* <div className="row">
            <button className="btn btn-primary" onClick={this}>
 
          Add Employee
        </button>
          </div> */}
          <br></br>
          <div className="row">
            <table
              id="usertable"
              className="table table-striped table-bordered "
            >
              <thead className="table-dark text-center">
                <tr className="text-center">
                  <th>Aadhar No.</th>
                  <th> Email</th>
                  <th> Name</th>
                  <th> Address</th>
                  <th> Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user) => (
                  <tr key={user.id}>
                    <td> {user.aadhar_no} </td>
                    <td> {user.email}</td>
                    <td> {user.name}</td>
                    <td> {user.address}</td>
                    <td>
                      <button
                        // onClick={() => this.editEmployee(employee.id)}
                        className="btn btn-info"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => deleteUser(user.id)}
                        className="btn btn-danger"
                      >
                        Delete{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        // onClick={() => this.viewEmployee(employee.id)}
                        className="btn btn-info"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {userList[0]}
      {console.log(userList)}
    </div>
  );
};
export default UserTable;
