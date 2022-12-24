import sistatisApi from "./index";

const thesisProposalValidatesApi = "/validate-thesis-proposal-seminars";

export const getThesisProposalValidates = () =>
  sistatisApi
    .get(thesisProposalValidatesApi)
    .then((response) => {
      localStorage.setItem(
        "thesisProposalValidates",
        JSON.stringify(response.data)
      );
      return response.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("thesisProposalValidates")));

export const getThesisProposalValidate = (id) =>
  sistatisApi
    .get(`${thesisProposalValidatesApi}/${id}`)
    .then((response) => response.data);

export default thesisProposalValidatesApi;
