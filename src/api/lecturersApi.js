import sistatisApi from "./index";

const lecturersApi = "/lecturer";

export const getLecturers = (fieldId) =>
  sistatisApi
    .get(lecturersApi)
    .then((response) => {
      localStorage.setItem("lecturers", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch((error) => {
      var lecturers = JSON.parse(localStorage.getItem("lecturers"));
      if (lecturers) {
        return lecturers;
      }

      throw error.message;
    });


export default lecturersApi;
