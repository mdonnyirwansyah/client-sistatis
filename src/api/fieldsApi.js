import sistatisApi from "./index";

const fieldsApi = "/field";

export const getFields = () =>
  sistatisApi
    .get(fieldsApi)
    .then((response) => {
      localStorage.setItem("fields", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch((error) => {
      var fileds = JSON.parse(localStorage.getItem("fields"));
      if (fileds) {
        return fileds;
      }

      throw error.message;
    });

export default fieldsApi;
