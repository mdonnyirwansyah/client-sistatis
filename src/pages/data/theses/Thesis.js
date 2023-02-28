import React from "react";
import { Link } from "react-router-dom";
import { Card, Main, AllStudent } from "../../../components";
import { DataThesesFilter } from "../../../fetch";
import { useSelector } from "react-redux";

function Thesis() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Main title="Data Tugas Akhir">
      <Card>
        <div>
        {user?.role === "Administrator" || user?.role === "Coordinator" ? (
          <Link to="/data/thesis/create" className="btn btn-primary">
            Tambah
          </Link>
              ) : null}
        </div>
        <hr />
        <div>
          <ul
            className="nav nav-tabs"
            id="custom-content-below-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="semua-tab"
                data-toggle="pill"
                href="#semua"
                role="tab"
                aria-controls="semua"
                aria-selected="true"
              >
                Semua
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="cari-mahasiswa-tab"
                data-toggle="pill"
                href="#cari-mahasiswa"
                role="tab"
                aria-controls="cari-mahasiswa"
                aria-selected="false"
              >
                Cari Mahasiswa
              </a>
            </li>
          </ul>
          <div
            className="tab-content mt-3"
            id="custom-content-below-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="semua"
              role="tabpanel"
              aria-labelledby="semua-tab"
            >
              <AllStudent />
            </div>
            <div
              className="tab-pane fade"
              id="cari-mahasiswa"
              role="tabpanel"
              aria-labelledby="cari-mahasiswa-tab"
            >
              <DataThesesFilter />
            </div>
          </div>
        </div>
      </Card>
    </Main>
  );
}

export default Thesis;
