import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getThesisProposal } from "../api/thesisProposalsApi";

function DataThesisProposal() {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: thesisProposal,
  } = useQuery("thesisProposal", () => getThesisProposal(id));

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  return thesisProposal ? (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Mahasiswa</strong>
          </h2>
          <hr />
          <div className="row">
            <label className="col-sm-3 text-right">Nama:</label>
            <div className="col-sm-9">{thesisProposal.student.name}</div>
          </div>
          <div className="row">
            <label className="col-sm-3 text-right">NIM:</label>
            <div className="col-sm-9">{thesisProposal.student.student_id}</div>
          </div>
          <div className="row">
            <label className="col-sm-3 text-right">No. HP:</label>
            <div className="col-sm-9">{thesisProposal.student.phone}</div>
          </div>
          <div className="row">
            <label className="col-sm-3 text-right">Status:</label>
            <div className="col-sm-9">{thesisProposal.student.status}</div>
          </div>
        </div>
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Tugas Akhir</strong>
          </h2>
          <hr />
          <div className="row">
            <label className="col-sm-3 text-right">Tanggal Daftar:</label>
            <div className="col-sm-9">
              {thesisProposal.thesis.date_register}
            </div>
          </div>
          <div className="row">
            <label className="col-sm-3 text-right">Judul:</label>
            <div className="col-sm-9">{thesisProposal.thesis.title}</div>
          </div>
          <div className="row">
            <label className="col-sm-3 text-right">KBK:</label>
            <div className="col-sm-9">{thesisProposal.thesis.field}</div>
          </div>
          {thesisProposal.thesis.supervisors.map((supervisor, index) => {
            return (
              <div className="row" key={index}>
                <label className="col-sm-3 text-right">
                  {supervisor.status}:
                </label>
                <div className="col-sm-9">{supervisor.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Seminar</strong>
          </h2>
        </div>
        <div className="col-sm-6">
          <h2 className="lead text-right">
            <strong>Semester: {thesisProposal.seminar.semester}</strong>
          </h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <label className="col-sm-3 text-right">Tanggal:</label>
            <div className="col-sm-9">{thesisProposal.seminar.date}</div>
          </div>
          <div className="row">
            <label className="col-sm-3 text-right">Jam:</label>
            <div className="col-sm-9">{thesisProposal.seminar.time}</div>
          </div>
          <div className="row">
            <label className="col-sm-3 text-right">Lokasi:</label>
            <div className="col-sm-9">{thesisProposal.seminar.location}</div>
          </div>
        </div>
        <div className="col-sm-6">
          {thesisProposal.seminar.examiners.map((examiner, index) => {
            return (
              <div className="row" key={index}>
                <label className="col-sm-3 text-right">
                  {examiner.status}:
                </label>
                <div className="col-sm-9">{examiner.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    "Data Not Found."
  );
}

export default DataThesisProposal;