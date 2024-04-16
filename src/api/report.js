import axios from "axios";

const API_BASE_URL = "https://onemapdepts.gmda.gov.in/API_tcp_encroachment_v1.0";

const reportAPI = {
  getUsers: (values) => axios.post(`${API_BASE_URL}/getUserWiseData`, values),
};

export default reportAPI;
