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
import { Nav, NavItem, NavTreeview } from "../../../components";

function Sidebar() {
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
          </NavTreeview>
          <NavTreeview
            title="Pendaftaran Seminar"
            icon={<FaFileAlt className="nav-icon" />}
            active={
              location.pathname.includes("/seminar-register") ? true : false
            }
          >
            <NavItem
              title="Proposal TA"
              url="/seminar-register/thesis-proposal"
              icon={<FaRegCircle className="nav-icon" />}
            />
            <NavItem
              title="Hasil TA"
              url="/seminar-register/thesis-result"
              icon={<FaRegCircle className="nav-icon" />}
            />
            <NavItem
              title="Sidang TA"
              url="/seminar-register/thesis-defence"
              icon={<FaRegCircle className="nav-icon" />}
            />
          </NavTreeview>
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
          <NavTreeview
            title="Validasi"
            icon={<FaFileSignature className="nav-icon" />}
            active={location.pathname.includes("/validate") ? true : false}
          >
            <NavTreeview
              title="Pendaftaran Seminar"
              icon={<FaRegCircle className="nav-icon" />}
              active={
                location.pathname.includes("/validate/seminar-register")
                  ? true
                  : false
              }
            >
              <NavItem
                title="Proposal TA"
                url="/validate/seminar-register/thesis-proposal"
                icon={<FaRegDotCircle className="nav-icon" />}
              />
              <NavItem
                title="Hasil TA"
                url="/validate/seminar-register/thesis-result"
                icon={<FaRegDotCircle className="nav-icon" />}
              />
              <NavItem
                title="Sidang TA"
                url="/validate/seminar-register/thesis-defence"
                icon={<FaRegDotCircle className="nav-icon" />}
              />
            </NavTreeview>
          </NavTreeview>
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
