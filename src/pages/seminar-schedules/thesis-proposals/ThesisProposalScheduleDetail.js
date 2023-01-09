import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminarSchedules } from "../../../fetch";

function ThesisProposalScheduleDetail() {
  return (
    <Main title="Lihat Penjadwalan Seminar Proposal TA">
      <Card>
        <DataThesisSeminarSchedules />
      </Card>
    </Main>
  );
}

export default ThesisProposalScheduleDetail;
