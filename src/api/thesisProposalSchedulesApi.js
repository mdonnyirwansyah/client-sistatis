import sistatisApi from "./index";
import thesisProposalsApi from "./thesisProposalsApi";

const thesisProposalSchedulesApi = "/seminar/schedule";

export const getThesisProposalSchedules = () =>
  sistatisApi
    .get(thesisProposalsApi, {
      params: { name: "Seminar Proposal Tugas Akhir", status: "Registered" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisProposalSchedules",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch((error) => {
      var thesisProposalSchedules = JSON.parse(
        localStorage.getItem("thesisProposalScheduleschedules")
      );
      if (thesisProposalSchedules) {
        return thesisProposalSchedules;
      }

      throw error.message;
    });

export const getThesisProposalSchedule = (id) =>
  sistatisApi
    .get(`${thesisProposalsApi}/${id}`)
    .then((response) => response.data.data);

export default thesisProposalSchedulesApi;
