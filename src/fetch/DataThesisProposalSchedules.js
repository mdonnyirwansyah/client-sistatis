import React from "react";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import { getThesisProposalSchedules } from "../api/thesisProposalSchedulesApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataThesisProposalSchedules() {
  const {
    isLoading,
    isError,
    data: thesisProposalSchedules,
  } = useQuery("thesisProposalSchedules", getThesisProposalSchedules, { retry: false });

  if (isLoading) {
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisProposalSchedules ? (
    thesisProposalSchedules.map((thesisProposalSchedule, index) => {
      return (
        <tr key={thesisProposalSchedule.id}>
          <td>{index + 1}</td>
          <td>{thesisProposalSchedule.register_date}</td>
          <td>{thesisProposalSchedule.name}</td>
          <td>{thesisProposalSchedule.title}</td>
          <td>
            <ButtonIcon
              title="Lihat"
              icon={<FaEye className="text-primary" />}
              url={"show/" + thesisProposalSchedule.id}
            />
          </td>
        </tr>
      );
    })
  ) : (
    <DataNotFound colSpan="5" />
  );
}

export default DataThesisProposalSchedules;
