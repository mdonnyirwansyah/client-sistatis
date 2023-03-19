import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminarValidates } from "../../../fetch";

function ThesisResultValidateDetail() {
  return (
    <Main title="Lihat Validasi Seminar Hasil TA">
      <Card>
        <DataThesisSeminarValidates />
      </Card>
    </Main>
  );
}

export default ThesisResultValidateDetail;
