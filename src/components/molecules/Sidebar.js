import React from "react";
import {
  FaCalendar,
  FaRegDotCircle,
  FaFileAlt,
  FaFileSignature,
  FaRegCircle,
  FaServer,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem, NavTreeview } from "../../components";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link text-center">
        <span className="brand-text font-weight-light">
          <strong>SISTATIS</strong>
        </span>
      </Link>

      <div className="sidebar">
        <Nav>
          <NavItem
            title="Dashboard"
            url="/"
            icon={<FaTachometerAlt className="nav-icon" />}
          />
          <NavTreeview
            title="Data"
            icon={<FaServer className="nav-icon" />}
            active={location.pathname.includes("/data") ? true : false}
          >
            <NavItem
              title="Tugas Akhir"
              url="/data/thesis"
              icon={<FaRegCircle className="nav-icon" />}
            />
            {user?.role === "Administrator" ? (
              <NavTreeview
                title="Seminar"
                icon={<FaRegCircle className="nav-icon" />}
                active={
                  location.pathname.includes("/data/seminar") ? true : false
                }
              >
                <NavItem
                  title="Proposal TA"
                  url="/data/seminar/thesis-proposal"
                  icon={<FaRegDotCircle className="nav-icon" />}
                />
                <NavItem
                  title="Hasil TA"
                  url="/data/seminar/thesis-result"
                  icon={<FaRegDotCircle className="nav-icon" />}
                />
                <NavItem
                  title="Sidang TA"
                  url="/data/seminar/thesis-defence"
                  icon={<FaRegDotCircle className="nav-icon" />}
                />
              </NavTreeview>
            ) : null}
          </NavTreeview>
          {user?.role === "Administrator" || user?.role === "Coordinator" ? (
            <NavTreeview
              title="Pendaftaran Seminar"
              icon={<FaFileAlt className="nav-icon" />}
              active={
                location.pathname.includes("/seminar-register") ? true : false
              }
            >
              {user?.role === "Coordinator" ? (
                <NavItem
                  title="Proposal TA"
                  url="/seminar-register/thesis-proposal"
                  icon={<FaRegCircle className="nav-icon" />}
                />
              ) : null}
              {user?.role === "Administrator" ? (
                <NavItem
                  title="Hasil TA"
                  url="/seminar-register/thesis-result"
                  icon={<FaRegCircle className="nav-icon" />}
                />
              ) : null}
              {user?.role === "Coordinator" ? (
                <NavItem
                  title="Sidang TA"
                  url="/seminar-register/thesis-defence"
                  icon={<FaRegCircle className="nav-icon" />}
                />
              ) : null}
            </NavTreeview>
          ) : null}

          {user?.role === "Administrator" ? (
            <NavTreeview
              title="Penjadwalan Seminar"
              icon={<FaCalendar className="nav-icon" />}
              active={
                location.pathname.includes("/seminar-schedule") ? true : false
              }
            >
              <NavItem
                title="Proposal TA"
                url="/seminar-schedule/thesis-proposal"
                icon={<FaRegCircle className="nav-icon" />}
              />
              <NavItem
                title="Hasil TA"
                url="/seminar-schedule/thesis-result"
                icon={<FaRegCircle className="nav-icon" />}
              />
              <NavItem
                title="Sidang TA"
                url="/seminar-schedule/thesis-defence"
                icon={<FaRegCircle className="nav-icon" />}
              />
            </NavTreeview>
          ) : null}
          {user?.role === "Head of Department" ? (
            <NavTreeview
              title="Validasi Seminar"
              icon={<FaFileSignature className="nav-icon" />}
              active={
                location.pathname.includes("/seminar-validate") ? true : false
              }
            >
              <NavItem
                title="Proposal TA"
                url="/seminar-validate/thesis-proposal"
                icon={<FaRegCircle className="nav-icon" />}
              />
              <NavItem
                title="Hasil TA"
                url="/seminar-validate/thesis-result"
                icon={<FaRegCircle className="nav-icon" />}
              />
              <NavItem
                title="Sidang TA"
                url="/seminar-validate/thesis-defence"
                icon={<FaRegCircle className="nav-icon" />}
              />
            </NavTreeview>
          ) : null}
          <NavTreeview
            title="Akun"
            icon={<FaUser className="nav-icon" />}
            active={location.pathname.includes("/account") ? true : false}
          >
            <NavItem
              title="Profil"
              url="/account/profile"
              icon={<FaRegCircle className="nav-icon" />}
            />
            <NavItem
              title="Update Password"
              url="/account/update-password"
              icon={<FaRegCircle className="nav-icon" />}
            />
          </NavTreeview>
        </Nav>
      </div>
    </aside>
  );
}

export default Sidebar;
