import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminarSchedules } from "../../../fetch";

function ThesisDefenceScheduleDetail() {
  return (
    <Main title="Lihat Penjadwalan Sidang TA">
      <Card>
        <DataThesisSeminarSchedules />
      </Card>
    </Main>
  );
}

export default ThesisDefenceScheduleDetail;
