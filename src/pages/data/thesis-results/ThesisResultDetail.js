import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminars } from "../../../fetch";

function ThesisResultDetail() {
  return (
    <Main title="Lihat Seminar Hasil TA">
      <Card>
        <DataThesisSeminars />
      </Card>
    </Main>
  );
}

export default ThesisResultDetail;
