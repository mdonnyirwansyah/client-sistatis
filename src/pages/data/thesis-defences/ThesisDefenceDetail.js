import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminars } from "../../../fetch";

function ThesisDefenceDetail() {
  return (
    <Main title="Lihat Sidang TA">
      <Card>
        <DataThesisSeminars />
      </Card>
    </Main>
  );
}

export default ThesisDefenceDetail;
