import axios from "axios";

const token = localStorage.getItem("access_token");

const sistatisApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: { Authorization: `Bearer ${token}` },
});

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
