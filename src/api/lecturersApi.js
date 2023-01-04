import sistatisApi from "./index";

const lecturersApi = "/lecturer";

export const getLecturers = () =>
  sistatisApi
    .get(lecturersApi)
    .then((response) => {
      localStorage.setItem("lecturers", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("lecturers")));

export const getLecturersByField = (field_id) =>
  sistatisApi
    .get(`${lecturersApi}/field`, {
      params: { id: field_id },
    })
    .then((response) => {
      return response.data.data;
    });

export default lecturersApi;
