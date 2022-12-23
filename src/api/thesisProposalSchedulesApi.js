import sistatisApi from "./index";

const thesisProposalSchedulesApi = "/scheduled-thesis-proposal-seminars";

export const getThesisProposalSchedules = () =>
  sistatisApi
    .get(thesisProposalSchedulesApi)
    .then((response) => {
      localStorage.setItem(
        "scheduleThesisProposals",
        JSON.stringify(response.data)
      );
      return response.data;
    })
    .catch(() => JSON.parse(localStorage.getItem("scheduleThesisProposals")));

export const getThesisProposalSchedule = (id) =>
  sistatisApi
    .get(`${thesisProposalSchedulesApi}/${id}`)
    .then((response) => response.data);

export default thesisProposalSchedulesApi;
