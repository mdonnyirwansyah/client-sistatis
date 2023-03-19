import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminars } from "../../../fetch";

function ThesisDefenceEdit() {
  return (
    <Main title="Edit Sidang TA">
      <Card>
        <DataThesisSeminars />
      </Card>
    </Main>
  );
}

export default ThesisDefenceEdit;
