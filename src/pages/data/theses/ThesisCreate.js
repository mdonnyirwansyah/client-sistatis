import React from "react";
import { Card, Input, Main } from "../../../components";

function ThesisCreate() {
  return (
    <Main title="Tambah Data Tugas Akhir">
      <Card>
        <h2 className="lead">
          <strong>Mahasiswa</strong>
        </h2>
        <hr />
        <Input label="Nama" name="name" id="name" type="text" />
        <Input label="NIM" name="nim" id="nim" type="text" />
        <Input label="No. HP" name="phone" id="phone" type="text" />
        <h2 className="lead">
          <strong>Tugas Akhir</strong>
        </h2>
        <hr />
        <Input
          label="Tanggal Daftar"
          name="register_date"
          id="register_date"
          type="date"
        />
        <Input label="Judul" name="title" id="title" type="text" />
        <Input label="KBK" name="field" id="field" type="select">
          <option>Pilih KBK</option>
        </Input>
        <Input
          label="Pembimbing 1"
          name="supervisor[]"
          id="supervisor_1"
          type="select"
        >
          <option>Pilih Pembimbing 1</option>
        </Input>
        <Input
          label="Pembimbing 2"
          name="supervisor[]"
          id="supervisor_2"
          type="select"
        >
          <option>Pilih Pembimbing 2</option>
        </Input>
        <Input label="Submit" type="button" />
      </Card>
    </Main>
  );
}

export default ThesisCreate;
