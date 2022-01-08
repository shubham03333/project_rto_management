import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080";

class User {
  getUser() {
    return axios.get(RTO_API_BASE_URL + "/user/search");
  }

  //   createEmployee(employee) {
  //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
  //   }

  //   getEmployeeById(employeeId) {
  //     return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  //   }

  //   updateEmployee(employee, employeeId) {
  //     return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  //   }

  // deleteUser(userId) {
  //   return axios.delete(RTO_API_BASE_URL + "/" + userId);
  // }
}

export default new User();
