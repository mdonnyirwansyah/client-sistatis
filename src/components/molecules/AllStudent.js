import { DataTheses } from "../../fetch";

function AllStudent() {
  return (
    <div className="mt-3">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: 10 }}>No</th>
              <th>Tanggal Daftar</th>
              <th>NIM</th>
              <th>Nama</th>
              <th>Judul</th>
              <th>Status</th>
              <th style={{ width: 90 }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <DataTheses />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllStudent;
