import React from "react";
import { Main, Pagination } from "../../../components";
import { DataThesisDefences } from "../../../fetch";

function ThesisDefence() {
  const pageLinks = [
    {
      title: "Prev",
    },
    {
      title: "1",
    },
    {
      title: "Next",
    },
  ];

  return (
    <Main title="Data Sidang TA">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: 10 }}>No</th>
                  <th>Tanggal Seminar</th>
                  <th>Nama</th>
                  <th>Judul</th>
                  <th style={{ width: 90 }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <DataThesisDefences />
              </tbody>
            </table>
          </div>
          <Pagination pageLinks={pageLinks} />
        </div>
      </div>
    </Main>
  );
}

export default ThesisDefence;
