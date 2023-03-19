import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisResultSchedules } from "../api/seminarsApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataThesisResultSchedules() {
  const {
    isLoading,
    isError,
    data: thesisResultSchedules,
  } = useQuery("thesisResultSchedules", getThesisResultSchedules, {
    retry: false,
  });

  if (isLoading) {
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisResultSchedules.length > 0 ? (
    thesisResultSchedules.map((thesisResultSchedule, index) => {
      return (
        <tr key={thesisResultSchedule.id}>
          <td>{index + 1}</td>
          <td>{thesisResultSchedule.thesis.register_date}</td>
          <td>{thesisResultSchedule.thesis.student.name}</td>
          <td>{thesisResultSchedule.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                type="btn-outline-success"
                icon={<FaEye />}
                url={`show/${thesisResultSchedule.id}`}
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

export default DataThesisResultSchedules;
