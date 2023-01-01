import React from "react";
import {
  Card,
  FormInput,
  FormSelect,
  FormButton,
  Main,
} from "../../components";

function ThesisProposalRegister() {
  return (
    <Main title="Pendaftaran Seminar Proposal TA">
      <Card>
        <h2 className="lead">
          <strong>Mahasiswa</strong>
        </h2>
        <hr />
        <FormInput label="NIM" name="nim" id="nim" type="text" />
        <h2 className="lead">
          <strong>Seminar</strong>
        </h2>
        <hr />
        <FormInput
          label="Tanggal Daftar"
          name="register_date"
          id="register_date"
          type="date"
        />
        <FormSelect label="Penguji 1" name="examiner[]" id="examiner_1">
          <option>Pilih Penguji 1</option>
        </FormSelect>
        <FormSelect label="Penguji 2" name="examiner[]" id="examiner_2">
          <option>Pilih Penguji 2</option>
        </FormSelect>
        <FormSelect label="Penguji 3" name="examiner[]" id="examiner_3">
          <option>Pilih Penguji 3</option>
        </FormSelect>
        <FormSelect label="Semester" name="semester" id="semester">
          <option>Pilih Semester</option>
        </FormSelect>
        <FormButton label="Submit" type="submit" />
      </Card>
    </Main>
  );
}

export default ThesisProposalRegister;
