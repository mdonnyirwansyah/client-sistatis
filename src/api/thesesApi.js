import sistatisApi from "./index";

const thesesApi = "/thesis";

export const getTheses = () =>
  sistatisApi
    .get(thesesApi)
    .then((response) => {
      localStorage.setItem("theses", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch((error) => {
      var theses = JSON.parse(localStorage.getItem("theses"));
      if (theses) {
        return theses;
      }

      throw error.message;
    });

export const getThesis = (id) =>
  sistatisApi.get(`${thesesApi}/${id}`).then((response) => response.data.data);

export const getThesisByNim = (nim) =>
  sistatisApi
    .get(`${thesesApi}/show`, {
      params: { nim: nim },
    })
    .then((response) => {
      return response.data.data;
    });

export default thesesApi;
