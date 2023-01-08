import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import thesisProposalsApi, {
  getThesisProposals,
} from "../api/thesisProposalsApi";
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

function DataThesisProposals() {
  const {
    isLoading,
    isError,
    refetch,
    data: thesisProposals,
  } = useQuery("thesisProposals", getThesisProposals, { retry: false });

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
            const response = await sistatisApi.delete(
              `${thesisProposalsApi}/${id}`
            );
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
    return <DataLoading colSpan="5" />;
  }

  if (isError) {
    return <DataError colSpan="5" />;
  }

  return thesisProposals ? (
    thesisProposals.map((thesisProposal, index) => {
      return (
        <tr key={thesisProposal.id}>
          <td>{index + 1}</td>
          <td>
            {thesisProposal.date ? (
              thesisProposal.date
            ) : (
              <span className="badge badge-warning text-white">
                Belum Ditentukan
              </span>
            )}
          </td>
          <td>{thesisProposal.name}</td>
          <td>{thesisProposal.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-center">
              <ButtonIcon
                title="Lihat"
                type="btn-outline-success mr-1"
                icon={<FaEye />}
                url={`show/${thesisProposal.id}`}
              />
              <ButtonIcon
                title="Edit"
                type="btn-outline-warning mx-1"
                icon={<FaPen />}
                url={`edit/${thesisProposal.id}`}
              />
              <FormButtonDelete
                title="Hapus"
                icon={<FaTrashAlt />}
                onClick={() => handleDelete(thesisProposal.id)}
              />
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
