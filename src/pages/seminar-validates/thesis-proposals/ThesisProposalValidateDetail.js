import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisProposalValidate } from "../../../fetch";

function ThesisProposalValidateDetail() {
  return (
    <Main title="Lihat Validasi Seminar Proposal TA">
      <Card>
        <DataThesisProposalValidate />
      </Card>
    </Main>
  );
}

export default ThesisProposalValidateDetail;
