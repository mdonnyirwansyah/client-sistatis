import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getThesis } from "../api/thesesApi";

function DataThesis() {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: thesis,
  } = useQuery("thesis", () => getThesis(id));

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Something when wrong...";
  }

  return thesis ? (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="lead">
            <strong>Mahasiswa</strong>
          </h2>
          <hr />
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">Nama:</label>
            <div className="col-sm-9">{thesis.student.name}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">NIM:</label>
            <div className="col-sm-9">{thesis.student.nim}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              No. HP:
            </label>
            <div className="col-sm-9">{thesis.student.phone}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Status:
            </label>
            <div className="col-sm-9">{thesis.student.status}</div>
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
            <div className="col-sm-9">{thesis.thesis.date_register}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
              Judul:
            </label>
            <div className="col-sm-9">{thesis.thesis.title}</div>
          </div>
          <div className="row mb-sm-0 mb-3">
            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">KBK:</label>
            <div className="col-sm-9">{thesis.thesis.field}</div>
          </div>
          {thesis.thesis.supervisors.map((supervisor, index) => {
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
      {thesis.seminars
        ? thesis.seminars.map((seminar, index) => {
            return (
              <div key={index}>
                <div className="row mt-sm-0 mt-3">
                  <div className="col-sm-6">
                    <h2 className="lead">
                      <strong>{seminar.name}</strong>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <h2 className="lead text-sm-right mb-sm-2 mb-0">
                      <strong>Semester: {seminar.semester}</strong>
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
                        {seminar.date ? (
                          seminar.date
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
                        {seminar.time ? (
                          seminar.time
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
                        {seminar.location ? (
                          seminar.location
                        ) : (
                          <span className="badge badge-warning text-white">
                            Lokasi Belum Ditentukan
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    {seminar.examiners.map((examiner, index) => {
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
              </div>
            );
          })
        : null}
      {thesis.chief_of_examiner ? (
        <div className="row mt-sm-0 mt-3">
          <div className="col-sm-12">
            <h2 className="lead">
              <strong>Ketua Penguji: {thesis.chief_of_examiner}</strong>
            </h2>
          </div>
        </div>
      ) : null}
    </>
  ) : (
    "Data Not Found."
  );
}

export default DataThesis;
