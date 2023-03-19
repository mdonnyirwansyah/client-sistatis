import React from "react";
import { Card, Main } from "../../../components";
import { DataThesisSeminars } from "../../../fetch";

function ThesisResultEdit() {
  return (
    <Main title="Edit Seminar Hasil TA">
      <Card>
        <DataThesisSeminars />
      </Card>
    </Main>
  );
}

export default ThesisResultEdit;
