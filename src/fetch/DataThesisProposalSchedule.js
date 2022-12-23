import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getThesisProposalSchedule } from "../api/thesisProposalSchedulesApi";

function DataThesisProposalSchedule() {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: thesisProposalSchedule,
  } = useQuery("thesisProposalSchedule", () => getThesisProposalSchedule(id));

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  return thesisProposalSchedule ? (
    <div className="row">
      <div className="col-sm-6">
        <h2 className="lead">
          <strong>Mahasiswa</strong>
        </h2>
        <hr />
        <div className="row">
          <label className="col-sm-3 text-right">Nama:</label>
          <div className="col-sm-9">{thesisProposalSchedule.student.name}</div>
        </div>
        <div className="row">
          <label className="col-sm-3 text-right">NIM:</label>
          <div className="col-sm-9">
            {thesisProposalSchedule.student.student_id}
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <h2 className="lead">
          <strong>Penguji</strong>
        </h2>
        <hr />
        {thesisProposalSchedule.seminar.examiners.map((examiner, index) => {
          return (
            <div className="row" key={index}>
              <label className="col-sm-3 text-right">{examiner.status}:</label>
              <div className="col-sm-9">{examiner.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    "Data Not Found."
  );
}

export default DataThesisProposalSchedule;
