import sistatisApi from "./index";
import thesisProposalsApi from "./thesisProposalsApi";

const thesisProposalValidatesApi = "/seminar/validate";

export const getThesisProposalValidates = () =>
  sistatisApi
    .get(thesisProposalsApi, {
      params: { name: "Seminar Proposal Tugas Akhir", status: "Scheduled" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisProposalValidates",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("thesisProposalValidates")));

export const getThesisProposalValidate = (id) =>
  sistatisApi
    .get(`${thesisProposalsApi}/${id}`)
    .then((response) => response.data.data);

export default thesisProposalValidatesApi;
