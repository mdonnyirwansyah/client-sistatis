import sistatisApi from "./index";

const thesisProposalSchedulesApi = "/seminar";

export const getThesisProposalSchedules = () =>
  sistatisApi
    .get(thesisProposalSchedulesApi, {
      params: { name: "Seminar Proposal Tugas Akhir", status: "Registered" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisProposalSchedules",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("thesisProposalSchedules")));

export const getThesisProposalSchedule = (id) =>
  sistatisApi
    .get(`${thesisProposalSchedulesApi}/${id}`)
    .then((response) => response.data.data);

export default thesisProposalSchedulesApi;
