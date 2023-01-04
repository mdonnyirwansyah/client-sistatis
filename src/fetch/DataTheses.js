import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import thesesApi, { getTheses } from "../api/thesesApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
  FormButtonDelete,
} from "../components";
import swal from "sweetalert";
import sistatisApi from "../api";
import toast from "react-hot-toast";

function DataTheses() {
  const {
    isLoading,
    isError,
    refetch,
    data: theses,
  } = useQuery("theses", getTheses);

  if (isLoading) {
    return <DataLoading colSpan="7" />;
  }

  if (isError) {
    return <DataError colSpan="7" />;
  }

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const toastDeleteThesis = toast.loading("Loading...");
        const deleteThesis = async (id) => {
          try {
            const response = await sistatisApi.delete(`${thesesApi}/${id}`);
            const data = response.data;
            refetch();
            toast.success(`Successfully deleted!`, {
              id: toastDeleteThesis,
            });
          } catch (error) {
            if (error.response) {
              if (error.response) {
                toast.error("Something when wrong...", {
                  id: toastDeleteThesis,
                });
              }
            } else {
              toast.error(error.message, {
                id: toastDeleteThesis,
              });
            }
          }
        };

        deleteThesis(id);
      } else {
        swal("Your data is safe!");
      }
    });
  };

  return theses ? (
    theses.map((theses, index) => {
      return (
        <tr key={theses.id}>
          <td>{index + 1}</td>
          <td>{theses.register_date}</td>
          <td>{theses.nim}</td>
          <td>{theses.name}</td>
          <td>{theses.title}</td>
          <td>{theses.status}</td>
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
              <FormButtonDelete
                title="Hapus"
                icon={<FaTrashAlt className="text-danger" />}
                onClick={() => handleDelete(theses.id)}
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
