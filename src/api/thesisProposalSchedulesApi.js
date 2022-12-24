import sistatisApi from "./index";

const thesisProposalSchedulesApi = "/schedule-thesis-proposal-seminars";

export const getThesisProposalSchedules = () =>
  sistatisApi
    .get(thesisProposalSchedulesApi)
    .then((response) => {
      localStorage.setItem(
        "thesisProposalSchedules",
        JSON.stringify(response.data)
      );
      return response.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("thesisProposalSchedules")));

export const getThesisProposalSchedule = (id) =>
  sistatisApi
    .get(`${thesisProposalSchedulesApi}/${id}`)
    .then((response) => response.data);

export default thesisProposalSchedulesApi;
