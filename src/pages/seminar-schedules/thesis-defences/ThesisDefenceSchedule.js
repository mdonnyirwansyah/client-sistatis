import React from "react";
import { Card, Main, Pagination } from "../../../components";
import { DataThesisDefenceSchedules } from "../../../fetch";

function ThesisDefenceSchedule() {
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
    <Main title="Penjadwalan Sidang TA">
      <Card>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: 10 }}>No</th>
                <th>Tanggal Daftar</th>
                <th>Nama</th>
                <th>Judul</th>
                <th style={{ width: 30 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <DataThesisDefenceSchedules />
            </tbody>
          </table>
        </div>
        <Pagination pageLinks={pageLinks} />
      </Card>
    </Main>
  );
}

export default ThesisDefenceSchedule;
