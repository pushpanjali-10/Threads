import axios from "axios";

const newRequests = axios.create({
  baseURL: "http://3.104.172.87:8080/api/",
  withCredentials: true,
});

export default newRequests;
