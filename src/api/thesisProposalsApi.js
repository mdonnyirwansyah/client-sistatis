import sistatisApi from "./index";

const thesisProposalsApi = "/seminar";

export const getThesisProposals = () =>
  sistatisApi
    .get(thesisProposalsApi, {
      params: { name: "Seminar Proposal Tugas Akhir" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisProposals",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch((error) => {
      var thesisProposals = JSON.parse(localStorage.getItem("thesisProposals"));
      if (thesisProposals) {
        return thesisProposals;
      }

      throw error.message;
    });

export const getThesisProposal = (id) =>
  sistatisApi
    .get(`${thesisProposalsApi}/${id}`)
    .then((response) => response.data.data);

export default thesisProposalsApi;
