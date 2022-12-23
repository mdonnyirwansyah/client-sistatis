import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisProposalSchedules } from "../../../fetch";

function ThesisProposalSchedule() {
  return (
    <Main title="Penjadwalan Seminar Proposal TA">
      <Card>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: 10 }}>No</th>
                <th>Tanggal Daftar</th>
                <th>Nama</th>
                <th>Judul</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <DataThesisProposalSchedules />
            </tbody>
          </table>
        </div>
      </Card>
    </Main>
  );
}

export default ThesisProposalSchedule;
