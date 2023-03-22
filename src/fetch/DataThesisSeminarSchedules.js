import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getThesisSeminarSchedule } from "../api/seminarsApi";
import { FormThesisSeminarSchedule } from "../components";

function DataThesisSeminarSchedules() {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: thesisSeminarSchedule,
  } = useQuery("thesisSeminarSchedule", () => getThesisSeminarSchedule(id), {
    retry: false,
  });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Mahasiswa</strong>
          </h2>
          <hr />
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">Nama:</label>
            <div className="col-sm-9">
              {thesisSeminarSchedule.thesis.student.name}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">NIM:</label>
            <div className="col-sm-9">
              {thesisSeminarSchedule.thesis.student.nim}
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-sm-0 mt-3">
          <h2 className="lead">
            <strong>Penguji</strong>
          </h2>
          <hr />
          {thesisSeminarSchedule.seminar.chief_of_examiner ? (
            <div className="row mb-sm-0 mb-3">
              <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                Ketua Sidang:
              </label>
              <div className="col-sm-9">
                {thesisSeminarSchedule.seminar.chief_of_examiner.name}
              </div>
            </div>
          ) : null}
          {thesisSeminarSchedule.seminar.examiners.map((examiner, index) => {
            return (
              <div className="row mb-sm-0 mb-3" key={index}>
                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                  {examiner.status}:
                </label>
                <div className="col-sm-9">{examiner.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row mt-sm-0 mt-3">
        <div className="col-sm-12">
          <FormThesisSeminarSchedule data={thesisSeminarSchedule} />
        </div>
      </div>
    </>
  );
}

export default DataThesisSeminarSchedules;
