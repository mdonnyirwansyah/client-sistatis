import axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

const sistatisApi = fetchClient();

export const storeAuthentication = (token) => {
  localStorage.setItem("access_token", token);
};

export const storeUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeAuthentication = () => {
  localStorage.removeItem("access_token");
};

export default sistatisApi;
