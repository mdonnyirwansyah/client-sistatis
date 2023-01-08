import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisProposalValidates } from "../api/thesisProposalValidatesApi";
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

  return thesisProposalValidates ? (
    thesisProposalValidates.map((thesisProposalValidate, index) => {
      return (
        <tr key={thesisProposalValidate.id}>
          <td>{index + 1}</td>
          <td>{thesisProposalValidate.date}</td>
          <td>{thesisProposalValidate.name}</td>
          <td>{thesisProposalValidate.title}</td>
          <td>
            <ButtonIcon
              title="Lihat"
              icon={<FaEye className="text-primary" />}
              url={"show/" + thesisProposalValidate.id}
            />
          </td>
        </tr>
      );
    })
  ) : (
    <DataNotFound colSpan="5" />
  );
}

export default DataThesisProposalValidates;
