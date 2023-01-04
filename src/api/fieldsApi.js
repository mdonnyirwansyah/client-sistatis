import sistatisApi from "./index";

const fieldsApi = "/field";

export const getFields = () =>
  sistatisApi
    .get(fieldsApi)
    .then((response) => {
      localStorage.setItem("fields", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("fields")));

export default fieldsApi;
