import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisDefenceValidates } from "../api/seminarsApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataThesisDefenceValidates() {
  const {
    isLoading,
    isError,
    data: thesisDefenceValidates,
  } = useQuery("thesisDefenceValidates", getThesisDefenceValidates, {
    retry: false,
  });

  if (isLoading) {
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisDefenceValidates.length > 0 ? (
    thesisDefenceValidates.map((thesisDefenceValidate, index) => {
      return (
        <tr key={thesisDefenceValidate.id}>
          <td>{index + 1}</td>
          <td>{thesisDefenceValidate.seminar.date}</td>
          <td>{thesisDefenceValidate.thesis.student.name}</td>
          <td>{thesisDefenceValidate.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                type="btn-outline-success"
                icon={<FaEye />}
                url={`show/${thesisDefenceValidate.id}`}
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

export default DataThesisDefenceValidates;
