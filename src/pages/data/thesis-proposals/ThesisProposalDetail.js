import React from "react";
import { Card, Main } from "../../../components";
import DataThesisProposal from "../../../fetch/DataThesisProposal";

function ThesisProposalDetail() {
  return (
    <Main title="Lihat Seminar Proposal TA">
      <Card>
        <DataThesisProposal />
        <hr />
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Print Berita Acara
          </button>
          <button type="submit" className="btn btn-primary ml-3">
            Print Undangan
          </button>
        </div>
      </Card>
    </Main>
  );
}

export default ThesisProposalDetail;
