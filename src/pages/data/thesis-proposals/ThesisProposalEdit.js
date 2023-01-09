import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminars } from "../../../fetch";

function ThesisProposalEdit() {
  return (
    <Main title="Edit Seminar Proposal TA">
      <Card>
        <DataThesisSeminars />
      </Card>
    </Main>
  );
}

export default ThesisProposalEdit;
