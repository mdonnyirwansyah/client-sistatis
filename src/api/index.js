import axios from "axios";

const sistatisApi = axios.create({
  baseURL: "http://localhost:4000",
});

export default sistatisApi;
