import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminarSchedules } from "../../../fetch";

function ThesisResultScheduleDetail() {
  return (
    <Main title="Lihat Penjadwalan Seminar Hasil TA">
      <Card>
        <DataThesisSeminarSchedules />
      </Card>
    </Main>
  );
}

export default ThesisResultScheduleDetail;
