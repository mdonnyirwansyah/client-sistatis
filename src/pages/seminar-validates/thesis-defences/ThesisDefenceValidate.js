import React from "react";
import { Card, Main, Pagination } from "../../../components";
import { DataThesisDefenceValidates } from "../../../fetch";

function ThesisDefenceValidate() {
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
    <Main title="Validasi Sidang TA">
      <Card>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: 10 }}>No</th>
                <th>Tanggal Seminar</th>
                <th>Nama</th>
                <th>Judul</th>
                <th style={{ width: 30 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <DataThesisDefenceValidates />
            </tbody>
          </table>
        </div>
        <Pagination pageLinks={pageLinks} />
      </Card>
    </Main>
  );
}

export default ThesisDefenceValidate;
