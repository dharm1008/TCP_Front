import axios from "axios";

const API_BASE_URL = "https://onemapdepts.gmda.gov.in/API_tcp_encroachment_v1.0";

const reportAPI = {
  getUsers: (values) => axios.post(`${API_BASE_URL}/getUserWiseData`, values),
  getSummary: () => axios.get(`${API_BASE_URL}/getSurveyReportData`),
  getFilteredSummary: (values) => axios.post(`${API_BASE_URL}/dataForSurveyReport`, values),
  getAllDistrict: () => axios.get(`${API_BASE_URL}/getAllDistrict`),
  getFilteredChanges: (values) => axios.post(`${API_BASE_URL}/dataWithFilter`, values),
  getUIDHistory : (values) => axios.post(`${API_BASE_URL}/getUIDHistory`, values)
};

export default reportAPI;
