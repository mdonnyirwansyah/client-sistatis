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
        localStorage.getItem("thesisProposalSchedules")
      );
      if (thesisProposalSchedules) {
        return thesisProposalSchedules;
      }

      throw error.message;
    });

export const getThesisProposalSchedule = (id) =>
  sistatisApi
    .get(`${seminarsApi}/${id}`)
    .then((response) => response.data.data);

export const getThesisProposalValidates = () =>
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
      var thesisProposalValidates = JSON.parse(
        localStorage.getItem("thesisProposalValidates")
      );
      if (thesisProposalValidates) {
        return thesisProposalValidates;
      }

      throw error.message;
    });

export const getThesisProposalValidate = (id) =>
  sistatisApi
    .get(`${seminarsApi}/${id}`)
    .then((response) => response.data.data);

export const getThesisResults = () =>
  sistatisApi
    .get(seminarsApi, {
      params: { name: "Seminar Hasil Tugas Akhir" },
    })
    .then((response) => {
      localStorage.setItem("thesisResults", JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch((error) => {
      var thesisResults = JSON.parse(localStorage.getItem("thesisResults"));
      if (thesisResults) {
        return thesisResults;
      }

      throw error.message;
    });

export const getThesisResultSchedules = () =>
  sistatisApi
    .get(seminarsApi, {
      params: { name: "Seminar Hasil Tugas Akhir", status: "Registered" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisResultSchedules",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch((error) => {
      var thesisResultSchedules = JSON.parse(
        localStorage.getItem("thesisResultSchedules")
      );
      if (thesisResultSchedules) {
        return thesisResultSchedules;
      }

      throw error.message;
    });

export const getThesisResultValidates = () =>
  sistatisApi
    .get(seminarsApi, {
      params: { name: "Seminar Hasil Tugas Akhir", status: "Scheduled" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisResultValidates",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch((error) => {
      var thesisResultValidates = JSON.parse(
        localStorage.getItem("thesisResultValidates")
      );
      if (thesisResultValidates) {
        return thesisResultValidates;
      }

      throw error.message;
    });

export const getThesisDefences = () =>
  sistatisApi
    .get(seminarsApi, {
      params: { name: "Sidang Tugas Akhir" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisDefences",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch((error) => {
      var thesisDefences = JSON.parse(localStorage.getItem("thesisDefences"));
      if (thesisDefences) {
        return thesisDefences;
      }

      throw error.message;
    });

export const getThesisDefenceSchedules = () =>
  sistatisApi
    .get(seminarsApi, {
      params: { name: "Sidang Tugas Akhir", status: "Registered" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisDefenceSchedules",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch((error) => {
      var thesisDefenceSchedules = JSON.parse(
        localStorage.getItem("thesisDefenceSchedules")
      );
      if (thesisDefenceSchedules) {
        return thesisDefenceSchedules;
      }

      throw error.message;
    });

export const getThesisDefenceValidates = () =>
  sistatisApi
    .get(seminarsApi, {
      params: { name: "Sidang Tugas Akhir", status: "Scheduled" },
    })
    .then((response) => {
      localStorage.setItem(
        "thesisDefenceValidates",
        JSON.stringify(response.data.data)
      );
      return response.data.data;
    })
    .catch((error) => {
      var thesisDefenceValidates = JSON.parse(
        localStorage.getItem("thesisDefenceValidates")
      );
      if (thesisDefenceValidates) {
        return thesisDefenceValidates;
      }

      throw error.message;
    });

export default seminarsApi;
