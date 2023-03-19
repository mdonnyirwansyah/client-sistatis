import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisResultValidates } from "../api/seminarsApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataThesisResultValidates() {
  const {
    isLoading,
    isError,
    data: thesisResultValidates,
  } = useQuery("thesisResultValidates", getThesisResultValidates, {
    retry: false,
  });

  if (isLoading) {
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisResultValidates.length > 0 ? (
    thesisResultValidates.map((thesisResultValidate, index) => {
      return (
        <tr key={thesisResultValidate.id}>
          <td>{index + 1}</td>
          <td>{thesisResultValidate.seminar.date}</td>
          <td>{thesisResultValidate.thesis.student.name}</td>
          <td>{thesisResultValidate.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                type="btn-outline-success"
                icon={<FaEye />}
                url={`show/${thesisResultValidate.id}`}
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

export default DataThesisResultValidates;
