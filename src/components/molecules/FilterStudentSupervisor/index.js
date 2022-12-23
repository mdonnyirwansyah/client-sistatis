import React from "react";
import { DataNotFound } from "../../../components";

function FilterStudentSupervisor() {
  return (
    <>
      <form className="mt-3">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <select className="custom-select">
                <option>Pilih Dosen</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <select className="custom-select">
                <option>Pilih Status Mahasiswa</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <select className="custom-select">
                <option>Pilih Jabatan Dosen</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <select className="custom-select">
                <option>Pilih Semester</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10"></div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-block btn-primary">
              Cari
            </button>
          </div>
        </div>
      </form>
      <div className="mt-3">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: 10 }}>No</th>
                <th>Tanggal Daftar</th>
                <th>NIM</th>
                <th>Nama</th>
                <th>Judul</th>
                <th>Status</th>
                <th style={{ width: 90 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <DataNotFound colSpan="7" />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FilterStudentSupervisor;
