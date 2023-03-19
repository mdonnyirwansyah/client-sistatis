import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import seminarsApi, { getThesisDefences } from "../api/seminarsApi";
import {
  ButtonIcon,
  DataError,
  DataLoading,
  DataNotFound,
  FormButtonDelete,
} from "../components";
import swal from "sweetalert";
import toast from "react-hot-toast";
import sistatisApi from "../api";
import { useSelector } from "react-redux";

function DataThesisDefences() {
  const {
    isLoading,
    isError,
    refetch,
    data: thesisDefences,
  } = useQuery("thesisDefences", getThesisDefences, { retry: false });
  const { user } = useSelector((state) => state.auth);

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
            const response = await sistatisApi.delete(`${seminarsApi}/${id}`);
            const data = response.data;
            refetch();
            toast.success(data.message, {
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
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisDefences.length > 0 ? (
    thesisDefences.map((thesisDefence, index) => {
      return (
        <tr key={thesisDefence.id}>
          <td>{index + 1}</td>
          <td>
            {thesisDefence.seminar.date ? (
              thesisDefence.seminar.date
            ) : (
              <span className="badge badge-warning text-white">
                Belum Ditentukan
              </span>
            )}
          </td>
          <td>{thesisDefence.thesis.student.name}</td>
          <td>{thesisDefence.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              {user?.role === "Administrator" ||
              user?.role === "Coordinator" ||
              user?.role === "Head of Department" ? (
                <ButtonIcon
                  title="Lihat"
                  type="btn-outline-success mr-1"
                  icon={<FaEye />}
                  url={`show/${thesisDefence.id}`}
                />
              ) : null}

              {user?.role === "Administrator" ||
              user?.role === "Coordinator" ? (
                <>
                  <ButtonIcon
                    title="Edit"
                    type={`btn-outline-warning ${
                      user?.role === "Administrator" ? "mx-1" : "mr-1"
                    }`}
                    icon={<FaPen />}
                    url={`edit/${thesisDefence.id}`}
                  />
                  <FormButtonDelete
                    title="Hapus"
                    icon={<FaTrashAlt />}
                    onClick={() => handleDelete(thesisDefence.id)}
                  />
                </>
              ) : null}
            </div>
          </td>
        </tr>
      );
    })
  ) : (
    <DataNotFound colSpan="5" />
  );
}

export default DataThesisDefences;
