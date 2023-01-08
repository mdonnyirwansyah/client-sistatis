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
  } = useQuery("theses", getTheses, { retry: false });

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const toastDeleteData = toast.loading("Loading...");
        const deleteData = async (id) => {
          try {
            const response = await sistatisApi.delete(`${thesesApi}/${id}`);
            const data = response.data;
            refetch();
            toast.success(`Successfully deleted!`, {
              id: toastDeleteData,
            });
          } catch (error) {
            if (error.response) {
              if (error.response) {
                toast.error("Something when wrong...", {
                  id: toastDeleteData,
                });
              }
            } else {
              toast.error(error.message, {
                id: toastDeleteData,
              });
            }
          }
        };

        deleteData(id);
      } else {
        swal("Your data is safe!");
      }
    });
  };

  if (isLoading) {
    return <DataLoading colSpan="7" />;
  }

  if (isError) {
    return <DataError colSpan="7" />;
  }

  return theses.length > 0 ? (
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
                type="btn-outline-success mr-1"
                icon={<FaEye />}
                url={`show/${theses.id}`}
              />
              <ButtonIcon
                title="Edit"
                type="btn-outline-warning mx-1"
                icon={<FaPen />}
                url={`edit/${theses.id}`}
              />
              <FormButtonDelete
                title="Hapus"
                icon={<FaTrashAlt />}
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
