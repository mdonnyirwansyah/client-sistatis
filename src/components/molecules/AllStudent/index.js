import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { getTheses } from "../../../api/thesesApi";
import { ButtonIcon } from "../../../components";
import { DataLoading, DataNotFound } from "../../atoms";

function AllStudent() {
  const { isLoading, isError, data: theses } = useQuery("theses", getTheses);
  let content;
  console.log(theses);
  if (isLoading) {
    content = <DataLoading colSpan="7" />;
  } else if (isError) {
    content = <DataNotFound colSpan="7" />;
  } else {
    content = theses ? (
      theses.map((thesis, index) => {
        return (
          <tr key={thesis.date_register}>
            <td>{index + 1}</td>
            <td>{thesis.date_register}</td>
            <td>{thesis.student_id}</td>
            <td>{thesis.name}</td>
            <td>{thesis.field}</td>
            <td>{thesis.status}</td>
            <td>
              <ButtonIcon
                title="Edit"
                icon={<FaPen className="text-primary" />}
                url="/data/thesis/edit/1"
              />
              <ButtonIcon
                title="Hapus"
                icon={<FaTrashAlt className="text-danger" />}
              />
            </td>
          </tr>
        );
      })
    ) : (
      <DataNotFound colSpan="7" />
    );
  }

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
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllStudent;
