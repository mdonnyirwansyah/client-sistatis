import sistatisApi from "./index";

const thesisProposalsApi = "/thesis-proposal-seminars";

export const getThesisProposals = () =>
  sistatisApi
    .get(thesisProposalsApi)
    .then((response) => {
      localStorage.setItem("thesisProposals", JSON.stringify(response.data));
      return response.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("thesisProposals")));

export const getThesisProposal = (id) =>
  sistatisApi
    .get(`${thesisProposalsApi}/${id}`)
    .then((response) => response.data);

export default thesisProposalsApi;
