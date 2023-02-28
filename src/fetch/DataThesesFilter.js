import React, { useState } from "react";
import { ButtonIcon, DataNotFound, Pagination } from "../components";
import toast from "react-hot-toast";
import sistatisApi from "../api";
import thesesApi from "../api/thesesApi";
import { FaEye } from "react-icons/fa";
import { FormThesisFilter } from "../components/forms";

function DataThesesFilter() {
  const [theses, setTheses] = useState([]);
  const handleFilter = (e) => {
    e.preventDefault();
    const toastGetTheses = toast.loading("Loading...");
    const formData = new FormData(e.target);
    const field = formData.get("field");
    const status = formData.get("status");
    const getTheses = async (field, status) => {
      try {
        const response = await sistatisApi.get(`${thesesApi}/filter`, {
          params: { field: field, status: status },
        });
        const data = response.data.data;
        setTheses(data);
        if (data.length > 0) {
          toast.success("Got it!", {
            id: toastGetTheses,
          });
        } else {
          toast.error("Not Found!", {
            id: toastGetTheses,
          });
        }
      } catch (error) {
        setTheses([]);
        if (error.response) {
          if (error.response) {
            const data = error.response.data;
            toast.error(data.status, {
              id: toastGetTheses,
            });
          }
        } else {
          toast.error(error.message, {
            id: toastGetTheses,
          });
        }
      }
    };

    getTheses(field, status);
  };

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

  return (
    <>
      <FormThesisFilter onSubmit={handleFilter} />
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
                <th style={{ width: 30 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {theses.length > 0 ? (
                theses.map((theses, index) => {
                  return (
                    <tr key={theses.id}>
                      <td>{index + 1}</td>
                      <td>{theses.thesis.register_date}</td>
                      <td>{theses.student.nim}</td>
                      <td>{theses.student.name}</td>
                      <td>{theses.thesis.title}</td>
                      <td>{theses.thesis.status}</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <ButtonIcon
                            title="Lihat"
                            type="btn-outline-success mr-1"
                            icon={<FaEye />}
                            url={`show/${theses.id}`}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <DataNotFound colSpan="7" />
              )}
            </tbody>
          </table>
        </div>
        <Pagination pageLinks={pageLinks} />
      </div>
    </>
  );
}

export default DataThesesFilter;
