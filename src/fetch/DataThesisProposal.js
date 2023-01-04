import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getThesisProposal } from "../api/thesisProposalsApi";
import moment from "moment";

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
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">Nama:</label>
            <div className="col-sm-9">{thesisProposal.student.name}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">NIM:</label>
            <div className="col-sm-9">{thesisProposal.student.nim}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              No. HP:
            </label>
            <div className="col-sm-9">{thesisProposal.student.phone}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Status:
            </label>
            <div className="col-sm-9">{thesisProposal.student.status}</div>
          </div>
        </div>
        <div className="col-sm-6 mt-sm-0 mt-3">
          <h2 className="lead">
            <strong>Tugas Akhir</strong>
          </h2>
          <hr />
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Tanggal Daftar:
            </label>
            <div className="col-sm-9">
              {moment(thesisProposal.thesis.register_date).format("LL")}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Judul:
            </label>
            <div className="col-sm-9">{thesisProposal.thesis.title}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">KBK:</label>
            <div className="col-sm-9">{thesisProposal.thesis.field}</div>
          </div>
          {thesisProposal.thesis.supervisors.map((supervisor, index) => {
            return (
              <div className="row mb-sm-0 mb-3" key={index}>
                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                  {supervisor.status}:
                </label>
                <div className="col-sm-9">{supervisor.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row mt-sm-0 mt-3">
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Seminar</strong>
          </h2>
        </div>
        <div className="col-sm-6">
          <h2 className="lead text-sm-right mb-sm-2 mb-0">
            <strong>Semester: {thesisProposal.seminar.semester}</strong>
          </h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Tanggal:
            </label>
            <div className="col-sm-9">
              {thesisProposal.seminar.date ? (
                moment(thesisProposal.seminar.date).format("dddd, D MMMM YYYY")
              ) : (
                <span className="badge badge-warning text-white">
                  Tanggal Belum Ditentukan
                </span>
              )}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">Jam:</label>
            <div className="col-sm-9">
              {thesisProposal.seminar.time ? (
                moment(thesisProposal.seminar.time, "HH:mm:ss").format(
                  "LT [WIB]"
                )
              ) : (
                <span className="badge badge-warning text-white">
                  Jam Belum Ditentukan
                </span>
              )}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Lokasi:
            </label>
            <div className="col-sm-9">
              {thesisProposal.seminar.location ? (
                thesisProposal.seminar.location
              ) : (
                <span className="badge badge-warning text-white">
                  Lokasi Belum Ditentukan
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          {thesisProposal.seminar.examiners.map((examiner, index) => {
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
          <h2 className="lead">
            <strong>Validasi</strong>
          </h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Print Berita Acara
          </button>
          <button type="submit" className="btn btn-primary ml-3">
            Print Undangan
          </button>
        </div>
      </div>
    </>
  ) : (
    "Data Not Found."
  );
}

export default DataThesisProposal;
