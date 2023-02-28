import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisProposalValidates } from "../api/seminarsApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataThesisProposalValidates() {
  const {
    isLoading,
    isError,
    data: thesisProposalValidates,
  } = useQuery("thesisProposalValidates", getThesisProposalValidates, {
    retry: false,
  });

  if (isLoading) {
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisProposalValidates.length > 0 ? (
    thesisProposalValidates.map((thesisProposalValidate, index) => {
      return (
        <tr key={thesisProposalValidate.id}>
          <td>{index + 1}</td>
          <td>{thesisProposalValidate.seminar.date}</td>
          <td>{thesisProposalValidate.thesis.student.name}</td>
          <td>{thesisProposalValidate.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                type="btn-outline-success"
                icon={<FaEye />}
                url={`show/${thesisProposalValidate.id}`}
              />
            </div>
          </td>
        </tr>
      );
    })
  ) : (
    <DataNotFound colSpan="5" />
  );
}

export default DataThesisProposalValidates;
