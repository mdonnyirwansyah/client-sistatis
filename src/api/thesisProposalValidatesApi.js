import sistatisApi from "./index";

const thesisProposalValidatesApi = "/seminar";

export const getThesisProposalValidates = () =>
  sistatisApi
    .get(thesisProposalValidatesApi, {
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
    .get(`${thesisProposalValidatesApi}/${id}`)
    .then((response) => response.data.data);

export default thesisProposalValidatesApi;
