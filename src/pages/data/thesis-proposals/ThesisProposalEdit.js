import React from "react";
import { Card, Input, Main } from "../../../components";

function ThesisProposalEdit() {
  return (
    <Main title="Edit Pendaftaran Seminar Proposal TA">
      <Card>
        <h2 className="lead">
          <strong>Mahasiswa</strong>
        </h2>
        <hr />
        <Input label="NIM" name="nim" id="nim" type="select">
          <option>Pilih NIM</option>
        </Input>
        <h2 className="lead">
          <strong>Seminar</strong>
        </h2>
        <hr />
        <Input
          label="Penguji 1"
          name="examiner[]"
          id="examiner_1"
          type="select"
        >
          <option>Pilih Penguji 1</option>
        </Input>
        <Input
          label="Penguji 2"
          name="examiner[]"
          id="examiner_2"
          type="select"
        >
          <option>Pilih Penguji 2</option>
        </Input>
        <Input label="Semester" name="semester" id="semester" type="select">
          <option>Pilih Semester</option>
        </Input>
        <Input label="Simpan Perubahan" type="button" />
      </Card>
    </Main>
  );
}

export default ThesisProposalEdit;
