import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisDefenceSchedules } from "../api/seminarsApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataThesisDefenceSchedules() {
  const {
    isLoading,
    isError,
    data: thesisDefenceSchedules,
  } = useQuery("thesisDefenceSchedules", getThesisDefenceSchedules, {
    retry: false,
  });

  if (isLoading) {
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisDefenceSchedules.length > 0 ? (
    thesisDefenceSchedules.map((thesisDefenceSchedule, index) => {
      return (
        <tr key={thesisDefenceSchedule.id}>
          <td>{index + 1}</td>
          <td>{thesisDefenceSchedule.thesis.register_date}</td>
          <td>{thesisDefenceSchedule.thesis.student.name}</td>
          <td>{thesisDefenceSchedule.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                type="btn-outline-success"
                icon={<FaEye />}
                url={`show/${thesisDefenceSchedule.id}`}
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

export default DataThesisDefenceSchedules;
