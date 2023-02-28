import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { getThesisProposal } from "../api/seminarsApi";
import {
  FormThesisProposalDetail,
  FormThesisProposalEdit,
} from "../components";
import moment from "moment";

function DataThesisSeminars() {
  const { id } = useParams();
  const location = useLocation();
  const isFormThesisProposalEdit = location.pathname.includes("/edit");
  const isFormThesisProposalDetail = location.pathname.includes("/show");

  const {
    isLoading,
    isError,
    data: thesisProposal,
  } = useQuery("thesisProposal", () => getThesisProposal(id), { retry: false });

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
            <div className="col-sm-9">{thesisProposal.thesis.student.name}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">NIM:</label>
            <div className="col-sm-9">{thesisProposal.thesis.student.nim}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              No. HP:
            </label>
            <div className="col-sm-9">
              {thesisProposal.thesis.student.phone}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Status:
            </label>
            <div className="col-sm-9">
              {thesisProposal.thesis.student.status}
            </div>
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
            <div className="col-sm-9">{thesisProposal.thesis.field.name}</div>
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
      {isFormThesisProposalDetail ? (
        <>
          <div className="row mt-sm-0 mt-3">
            <div className="col-sm-6">
              <h2 className="lead">
                <strong>{thesisProposal.seminar.name}</strong>
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
                  Tanggal Daftar:
                </label>
                <div className="col-sm-9">
                  {moment(thesisProposal.seminar.register_date).format(
                    "dddd, D MMMM YYYY"
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="row mb-sm-0 mb-3">
                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                  Tanggal:
                </label>
                <div className="col-sm-9">
                  {thesisProposal.seminar.date ? (
                    moment(thesisProposal.seminar.date).format(
                      "dddd, D MMMM YYYY"
                    )
                  ) : (
                    <span className="badge badge-warning text-white">
                      Tanggal Belum Ditentukan
                    </span>
                  )}
                </div>
              </div>
              <div className="row mb-sm-0 mb-3">
                <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                  Jam:
                </label>
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
                    thesisProposal.seminar.location.name
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
          <FormThesisProposalDetail data={thesisProposal} />
        </>
      ) : isFormThesisProposalEdit ? (
        <FormThesisProposalEdit data={thesisProposal} />
      ) : null}
    </>
  );
}

export default DataThesisSeminars;
