import sistatisApi from "./index";

const seminarsApi = "/seminar";

export const getThesisProposals = () =>
  sistatisApi
    .get(seminarsApi, {
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
    .get(`${seminarsApi}/${id}`)
    .then((response) => response.data.data);

    export const getThesisProposalSchedules = () =>
      sistatisApi
        .get(seminarsApi, {
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
        .get(`${seminarsApi}/${id}`)
        .then((response) => response.data.data);export const getThesisProposalValidates = () =>
        sistatisApi
          .get(seminarsApi, {
            params: { name: "Seminar Proposal Tugas Akhir", status: "Scheduled" },
          })
          .then((response) => {
            localStorage.setItem(
              "thesisProposalValidates",
              JSON.stringify(response.data.data)
            );
            return response.data.data;
          })
          .catch((error) => {
            var thesisProposalValidates = JSON.parse(localStorage.getItem("thesisProposalValidates"));
            if (thesisProposalValidates) {
              return thesisProposalValidates;
            }
      
            throw error.message;
          });
      
      export const getThesisProposalValidate = (id) =>
        sistatisApi
          .get(`${seminarsApi}/${id}`)
          .then((response) => response.data.data);

export default seminarsApi;
