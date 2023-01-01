import sistatisApi from "./index";

const thesesApi = "/thesis";

export const getTheses = () =>
  sistatisApi
    .get(thesesApi)
    .then((response) => {
      localStorage.setItem("theses", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("theses")));

export const getThesis = (id) =>
  sistatisApi.get(`${thesesApi}/${id}`).then((response) => response.data.data);

export const addThesis = (data) =>
  sistatisApi
    .post(thesesApi, data)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error.response.data;
    });

export default thesesApi;
