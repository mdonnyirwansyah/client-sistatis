import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getThesisProposalValidate } from "../api/thesisProposalValidatesApi";
import { FormThesisProposalValidate } from "../components";
import moment from "moment";

function DataThesisProposalValidate() {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: thesisProposalValidate,
  } = useQuery("thesisProposalValidate", () => getThesisProposalValidate(id));

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  return thesisProposalValidate ? (
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
              {thesisProposalValidate.student.name}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">NIM:</label>
            <div className="col-sm-9">{thesisProposalValidate.student.nim}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              No. HP:
            </label>
            <div className="col-sm-9">
              {thesisProposalValidate.student.phone}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Status:
            </label>
            <div className="col-sm-9">
              {thesisProposalValidate.student.status}
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
              {moment(thesisProposalValidate.thesis.register_date).format("LL")}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Judul:
            </label>
            <div className="col-sm-9">
              {thesisProposalValidate.thesis.title}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">KBK:</label>
            <div className="col-sm-9">
              {thesisProposalValidate.thesis.field}
            </div>
          </div>
          {thesisProposalValidate.thesis.supervisors.map(
            (supervisor, index) => {
              return (
                <div className="row mb-sm-0 mb-3" key={index}>
                  <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                    {supervisor.status}:
                  </label>
                  <div className="col-sm-9">{supervisor.name}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="row mt-sm-0 mt-3">
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Seminar</strong>
          </h2>
        </div>
        <div className="col-sm-6">
          <h2 className="lead text-sm-right">
            <strong>Semester: {thesisProposalValidate.seminar.semester}</strong>
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
              {moment(thesisProposalValidate.seminar.date).format(
                "dddd, D MMMM YYYY"
              )}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">Jam:</label>
            <div className="col-sm-9">
              {moment(thesisProposalValidate.seminar.time, "HH:mm:ss").format(
                "LT [WIB]"
              )}
            </div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Lokasi:
            </label>
            <div className="col-sm-9">
              {thesisProposalValidate.seminar.location}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          {thesisProposalValidate.seminar.examiners.map((examiner, index) => {
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
      <FormThesisProposalValidate />
    </>
  ) : (
    "Data Not Found."
  );
}

export default DataThesisProposalValidate;
