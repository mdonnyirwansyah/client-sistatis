import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { getThesisProposal } from "../api/thesisProposalsApi";
import {
  FormThesisProposalDetail,
  FormThesisProposalEdit,
} from "../components";

function DataThesisProposal() {
  const { id } = useParams();
  const location = useLocation();
  const isFormEdit = location.pathname.includes("/edit");
  const isFormDetail = location.pathname.includes("/show");

  const {
    isLoading,
    isError,
    data: thesisProposal,
  } = useQuery("thesisProposal", () => getThesisProposal(id), { retry: false });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  if (isFormEdit) {
    return <FormThesisProposalEdit data={thesisProposal} />;
  }

  if (isFormDetail) {
    return <FormThesisProposalDetail data={thesisProposal} />;
  }
}

export default DataThesisProposal;
