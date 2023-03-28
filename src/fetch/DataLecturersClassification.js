import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getLecturersClassification } from "../api/lecturersApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DatalecturersClassification({ semester }) {
  const {
    isLoading,
    isError,
    data: lecturersClassification,
  } = useQuery(
    ["lecturersClassification", semester],
    () => getLecturersClassification(semester),
    { retry: false }
  );

  if (isLoading) {
    return <DataLoading colSpan="12" />;
  }

  if (isError) {
    return <DataError colSpan="12" />;
  }

  return lecturersClassification.length > 0 ? (
    lecturersClassification.map((lecturersClassification, index) => {
      return (
        <tr key={lecturersClassification.id}>
          <td>{index + 1}</td>
          <td>{lecturersClassification.nip}</td>
          <td>{lecturersClassification.name}</td>
          <td>{lecturersClassification.supervisors_1_by_semester_count}</td>
          <td>{lecturersClassification.supervisors_2_by_semester_count}</td>
          <td>{lecturersClassification.examiners_by_semester_count}</td>
          <td>
            {lecturersClassification.chief_of_examiners_by_semester_count}
          </td>
          <td>{lecturersClassification.supervisors1_count}</td>
          <td>{lecturersClassification.supervisors2_count}</td>
          <td>{lecturersClassification.examiners_count}</td>
          <td>{lecturersClassification.chief_of_examiners_count}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                type={"btn-outline-success"}
                icon={<FaEye />}
                url={`show/${lecturersClassification.id}`}
              />
            </div>
          </td>
        </tr>
      );
    })
  ) : (
    <DataNotFound colSpan="7" />
  );
}

export default DatalecturersClassification;
