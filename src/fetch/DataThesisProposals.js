import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisProposals } from "../api/thesisProposalsApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataThesisProposals() {
  const {
    isLoading,
    isError,
    data: thesisProposals,
  } = useQuery("thesisProposals", getThesisProposals);

  if (isLoading) {
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisProposals ? (
    thesisProposals.map((thesisProposal, index) => {
      return (
        <tr key={thesisProposal.id}>
          <td>{index + 1}</td>
          <td>{thesisProposal.seminar.date}</td>
          <td>{thesisProposal.student.name}</td>
          <td>{thesisProposal.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                icon={<FaEye className="text-primary" />}
                url={"show/" + thesisProposal.id}
              />
              <ButtonIcon
                title="Edit"
                icon={<FaPen className="text-warning" />}
                url={"edit/" + thesisProposal.id}
              />
              <ButtonIcon
                title="Hapus"
                icon={<FaTrashAlt className="text-danger" />}
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

export default DataThesisProposals;
