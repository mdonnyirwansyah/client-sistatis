import axios from "axios";

const sistatisApi = axios.create({
  baseURL: "http://api-sistatis.test/api",
});

export default sistatisApi;
