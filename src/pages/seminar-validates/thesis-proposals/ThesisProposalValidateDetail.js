import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminarValidates } from "../../../fetch";

function ThesisProposalValidateDetail() {
  return (
    <Main title="Lihat Validasi Seminar Proposal TA">
      <Card>
        <DataThesisSeminarValidates />
      </Card>
    </Main>
  );
}

export default ThesisProposalValidateDetail;
