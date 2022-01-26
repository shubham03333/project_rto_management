import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080";

class Permit {
  getPermit() {
    return axios.get(RTO_API_BASE_URL + "/permit/search");
  }

  getPermitById(permitId) {
    return axios.get(RTO_API_BASE_URL + "/permit/" + permitId);
  }

  updatePermit(permit, permitId) {
    return axios.put(RTO_API_BASE_URL + "/permit/" + permitId, permit);
  }

  deletePermit(permitId) {
    return axios.delete(RTO_API_BASE_URL + "/permit/" + permitId);
  }
}

export default new Permit();
