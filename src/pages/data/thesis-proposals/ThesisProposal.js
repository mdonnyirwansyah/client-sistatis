import React from "react";
import { Main, Pagination } from "../../../components";
import { DataThesisProposals } from "../../../fetch";

function ThesisProposal() {
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
    <Main title="Data Seminar Proposal TA">
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
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <DataThesisProposals />
              </tbody>
            </table>
          </div>
          <Pagination pageLinks={pageLinks} />
        </div>
      </div>
    </Main>
  );
}

export default ThesisProposal;
