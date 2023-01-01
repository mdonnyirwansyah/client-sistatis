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

export const getFieldLecturers = (id) =>
  sistatisApi.get(`${fieldsApi}/${id}/lecturers`).then((response) => {
    console.log(response.data.data);
    return response.data.data;
  });

export default fieldsApi;
