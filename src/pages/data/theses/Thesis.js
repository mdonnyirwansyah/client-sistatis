import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Main,
  AllStudent,
  FilterStudentSupervisor,
  FilterStudent,
} from "../../../components";

function Thesis() {
  return (
    <Main title="Data Tugas Akhir">
      <Card>
        <div>
          <Link to="/data/thesis/create" className="btn btn-primary">
            Tambah
          </Link>
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
                id="cari-mahasiswa-bimbingan-tab"
                data-toggle="pill"
                href="#cari-mahasiswa-bimbingan"
                role="tab"
                aria-controls="cari-mahasiswa-bimbingan"
                aria-selected="false"
              >
                Cari Mahasiswa Bimbingan
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
              id="cari-mahasiswa-bimbingan"
              role="tabpanel"
              aria-labelledby="cari-mahasiswa-bimbingan-tab"
            >
              <FilterStudentSupervisor />
            </div>
            <div
              className="tab-pane fade"
              id="cari-mahasiswa"
              role="tabpanel"
              aria-labelledby="cari-mahasiswa-tab"
            >
              <FilterStudent />
            </div>
          </div>
        </div>
      </Card>
    </Main>
  );
}

export default Thesis;
