import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisProposalSchedule } from "../../../fetch";

function ThesisProposalScheduleDetail() {
  return (
    <Main title="Lihat Penjadwalan Seminar Proposal TA">
      <Card>
        <DataThesisProposalSchedule />
      </Card>
    </Main>
  );
}

export default ThesisProposalScheduleDetail;
