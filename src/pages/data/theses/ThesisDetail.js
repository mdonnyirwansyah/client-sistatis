import React from "react";
import { Card, Main } from "../../../components";
import DataThesis from "../../../fetch/DataThesis";

function ThesisDetail() {
  return (
    <Main title="Lihat Seminar Proposal TA">
      <Card>
        <DataThesis />
      </Card>
    </Main>
  );
}

export default ThesisDetail;
