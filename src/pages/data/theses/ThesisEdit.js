import React from "react";
import {
  Card,
  FormInput,
  FormSelect,
  FormButton,
  Main,
} from "../../../components";

function ThesisEdit() {
  return (
    <Main title="Edit Data Tugas Akhir">
      <Card>
        <h2 className="lead">
          <strong>Mahasiswa</strong>
        </h2>
        <hr />
        <FormInput label="Nama" name="name" id="name" type="text" />
        <FormInput label="NIM" name="nim" id="nim" type="text" />
        <FormInput label="No. HP" name="phone" id="phone" type="text" />
        <h2 className="lead">
          <strong>Tugas Akhir</strong>
        </h2>
        <hr />
        <FormInput
          label="Tanggal Daftar"
          name="register_date"
          id="register_date"
          type="date"
        />
        <FormInput label="Judul" name="title" id="title" type="text" />
        <FormSelect label="KBK" name="field" id="field">
          <option>Pilih KBK</option>
        </FormSelect>
        <FormSelect label="Pembimbing 1" name="supervisor[]" id="supervisor_1">
          <option>Pilih Pembimbing 1</option>
        </FormSelect>
        <FormSelect label="Pembimbing 2" name="supervisor[]" id="supervisor_2">
          <option>Pilih Pembimbing 2</option>
        </FormSelect>
        <FormButton label="Simpan Perubahan" type="submit" />
      </Card>
    </Main>
  );
}

export default ThesisEdit;
