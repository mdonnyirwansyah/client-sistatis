import sistatisApi from "./index";

const semestersApi = "/semester";

export const getSemesters = () =>
  sistatisApi
    .get(semestersApi)
    .then((response) => {
      localStorage.setItem("semesters", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch((error) => {
      var semesters = JSON.parse(localStorage.getItem("semesters"));
      if (semesters) {
        return semesters;
      }

      throw error.message;
    });

export default semestersApi;
