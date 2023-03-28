import { useState } from "react";
import { FormSelect, Main, Pagination } from "../../../components";
import { DataLecturersClassification, DataSemesters } from "../../../fetch";

function LecturerClassification() {
  const pageLinks = [
    {
      title: "Prev",
    },
    {
      title: "1",
    },
    {
      title: "Next",
    },
  ];

  const [semester, setSemester] = useState("");
  const handleFilter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const semester = formData.get("semester");

    setSemester(semester);
  };

  return (
    <Main title="Data Dosen">
      <div className="card">
        <div className="card-body">
          <form className="mt-3" onSubmit={handleFilter}>
            <div className="row">
              <div className="col-sm-10">
                <FormSelect
                  label="Semester"
                  type="no-label"
                  name="semester"
                  id="semester"
                >
                  <DataSemesters />
                  <option value="tes">Tes</option>
                </FormSelect>
              </div>
              <div className="col-sm-2">
                <button type="submit" className="btn btn-block btn-primary">
                  Cari
                </button>
              </div>
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: 10 }}>No</th>
                  <th>NIP</th>
                  <th>Nama</th>
                  <th>P1</th>
                  <th>P2</th>
                  <th>P</th>
                  <th>KS</th>
                  <th>Total P1</th>
                  <th>Total P2</th>
                  <th>Total P</th>
                  <th>Total KS</th>
                  <th style={{ width: 90 }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <DataLecturersClassification semester={semester} />
              </tbody>
            </table>
          </div>
          <Pagination pageLinks={pageLinks} />
        </div>
      </div>
    </Main>
  );
}

export default LecturerClassification;
