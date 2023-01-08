import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisProposal } from "../../../fetch";

function ThesisProposalDetail() {
  return (
    <Main title="Lihat Seminar Proposal TA">
      <Card>
        <DataThesisProposal />
      </Card>
    </Main>
  );
}

export default ThesisProposalDetail;
