import sistatisApi from "./index";

const thesesApi = "/theses";

export const getTheses = () =>
  sistatisApi
    .get(thesesApi)
    .then((response) => {
      localStorage.setItem("theses", JSON.stringify(response.data));
      return response.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("theses")));

export const getThesis = (id) =>
  sistatisApi.get(`${thesesApi}/${id}`).then((response) => response.data);

export default thesesApi;
