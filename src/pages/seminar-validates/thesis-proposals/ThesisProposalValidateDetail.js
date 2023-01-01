import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisProposalValidate } from "../../../fetch";

function ThesisProposalValidateDetail() {
  return (
    <Main title="Lihat Validasi Seminar Proposal TA">
      <Card>
        <DataThesisProposalValidate />
        <hr />
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Validasi
          </button>
        </div>
      </Card>
    </Main>
  );
}

export default ThesisProposalValidateDetail;
