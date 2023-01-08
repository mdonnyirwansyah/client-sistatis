import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisProposal } from "../../../fetch";

function ThesisProposalEdit() {
  return (
    <Main title="Edit Seminar Proposal TA">
      <Card>
        <DataThesisProposal />
      </Card>
    </Main>
  );
}

export default ThesisProposalEdit;
