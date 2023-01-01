import sistatisApi from "./index";

const locationsApi = "/location";

export const getLocations = () =>
  sistatisApi
    .get(locationsApi)
    .then((response) => {
      localStorage.setItem("locations", JSON.stringify(response.data));
      return response.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("locations")));

export default locationsApi;
