import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminarValidates } from "../../../fetch";

function ThesisDefenceValidateDetail() {
  return (
    <Main title="Lihat Validasi Sidang TA">
      <Card>
        <DataThesisSeminarValidates />
      </Card>
    </Main>
  );
}

export default ThesisDefenceValidateDetail;
