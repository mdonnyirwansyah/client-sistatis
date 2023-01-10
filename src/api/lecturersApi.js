import sistatisApi from "./index";

const lecturersApi = "/lecturer";

export const getLecturersByField = (fieldId) =>
  sistatisApi
    .get(`${lecturersApi}/field`, {
      params: { id: fieldId },
    })
    .then((response) => {
      return response.data.data;
    });

export default lecturersApi;
