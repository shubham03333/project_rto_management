import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080";

class Puc {
  getPuc() {
    return axios.get(RTO_API_BASE_URL + "/puc/search");
  }

  getPucById(pucId) {
    return axios.get(RTO_API_BASE_URL + "/puc/" + pucId);
  }

  updatePuc(puc, pucId) {
    return axios.put(RTO_API_BASE_URL + "/puc/" + pucId, puc);
  }

  deletePuc(pucId) {
    return axios.delete(RTO_API_BASE_URL + "/puc/" + pucId);
  }
}

export default new Puc();
