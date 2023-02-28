import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import seminarsApi, { getThesisProposals } from "../api/seminarsApi";
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

function DataThesisProposals() {
  const {
    isLoading,
    isError,
    refetch,
    data: thesisProposals,
  } = useQuery("thesisProposals", getThesisProposals, { retry: false });
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

  return thesisProposals.length > 0 ? (
    thesisProposals.map((thesisProposal, index) => {
      return (
        <tr key={thesisProposal.id}>
          <td>{index + 1}</td>
          <td>
            {thesisProposal.seminar.date ? (
              thesisProposal.seminar.date
            ) : (
              <span className="badge badge-warning text-white">
                Belum Ditentukan
              </span>
            )}
          </td>
          <td>{thesisProposal.thesis.student.name}</td>
          <td>{thesisProposal.thesis.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              {user?.role === "Administrator" ||
              user?.role === "Coordinator" ||
              user?.role === "Head of Department" ? (
                <ButtonIcon
                  title="Lihat"
                  type="btn-outline-success mr-1"
                  icon={<FaEye />}
                  url={`show/${thesisProposal.id}`}
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
                    url={`edit/${thesisProposal.id}`}
                  />
                  <FormButtonDelete
                    title="Hapus"
                    icon={<FaTrashAlt />}
                    onClick={() => handleDelete(thesisProposal.id)}
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

export default DataThesisProposals;
