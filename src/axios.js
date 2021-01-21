import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-d41cd/us-central1/api", //APIc(cloud) URL
});

export default instance;
