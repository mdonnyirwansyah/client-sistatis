import React from "react";
import { Card, Input, Main } from "../../../components";
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
            <Input label="Tanggal" name="date" id="date" type="date" />
            <Input label="Jam" name="time" id="time" type="time" />
            <Input label="Lokasi" name="location" id="location" type="select">
              <option>Pilih Lokasi</option>
            </Input>
            <Input label="Atur Jadwal" type="button" />
          </div>
        </div>
      </Card>
    </Main>
  );
}

export default ThesisProposalScheduleDetail;
