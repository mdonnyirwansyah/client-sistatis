import sistatisApi from "./index";

const fieldsApi = "/fields";

export const getFields = () => sistatisApi.get(fieldsApi).then((response) => {localStorage.setItem("theses", JSON.stringify(response.data))
return response.data}).catch(() => JSON.parse(localStorage.getItem("theses")));

export default fieldsApi;
