import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getThesisProposalSchedule } from "../api/thesisProposalSchedulesApi";
import { FormThesisProposalSchedule } from "../components";

function DataThesisProposalSchedule() {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: thesisProposalSchedule,
  } = useQuery("thesisProposalSchedule", () => getThesisProposalSchedule(id), {
    retry: false,
  });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  return <FormThesisProposalSchedule data={thesisProposalSchedule} />;
}

export default DataThesisProposalSchedule;
