import React from "react";
import {
  Card,
  FormInput,
  FormSelect,
  FormButton,
  Main,
} from "../../../components";
import { DataThesisProposalSchedule } from "../../../fetch";

function ThesisProposalScheduleDetail() {
  return (
    <Main title="Lihat Penjadwalan Seminar Proposal TA">
      <Card>
        <DataThesisProposalSchedule />
        <div className="row">
          <div className="col-sm-12">
            <h2 className="lead">
              <strong>Jadwal</strong>
            </h2>
            <hr />
            <FormInput label="Tanggal" name="date" id="date" type="date" />
            <FormInput label="Jam" name="time" id="time" type="time" />
            <FormSelect label="Lokasi" name="location" id="location">
              <option>Pilih Lokasi</option>
            </FormSelect>
            <FormButton label="Atur Jadwal" type="submit" />
          </div>
        </div>
      </Card>
    </Main>
  );
}

export default ThesisProposalScheduleDetail;
