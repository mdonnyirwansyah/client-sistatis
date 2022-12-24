import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { getTheses } from "../api/thesesApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
} from "../components";

function DataTheses() {
  const { isLoading, isError, data: theses } = useQuery("theses", getTheses);

  if (isLoading) {
    return <DataLoading colSpan="7" />;
  }

  if (isError) {
    return <DataError colSpan="7" />;
  }

  return theses ? (
    theses.map((theses, index) => {
      return (
        <tr key={theses.id}>
          <td>{index + 1}</td>
          <td>{theses.id}</td>
          <td>{theses.thesis.date_register}</td>
          <td>{theses.student.name}</td>
          <td>{theses.thesis.title}</td>
          <td>{theses.student.status}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                icon={<FaEye className="text-primary" />}
                url={"show/" + theses.id}
              />
              <ButtonIcon
                title="Edit"
                icon={<FaPen className="text-warning" />}
                url={"edit/" + theses.id}
              />
              <ButtonIcon
                title="Hapus"
                icon={<FaTrashAlt className="text-danger" />}
              />
            </div>
          </td>
        </tr>
      );
    })
  ) : (
    <DataNotFound colSpan="7" />
  );
}

export default DataTheses;
