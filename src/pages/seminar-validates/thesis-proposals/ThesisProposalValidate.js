import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisProposalValidates } from "../../../fetch";

function ThesisProposalValidate() {
  return (
    <Main title="Validasi Seminar Proposal TA">
      <Card>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: 10 }}>No</th>
                <th>Tanggal Seminar</th>
                <th>Nama</th>
                <th>Judul</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <DataThesisProposalValidates />
            </tbody>
          </table>
        </div>
      </Card>
    </Main>
  );
}

export default ThesisProposalValidate;
