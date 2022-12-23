import React from "react";
import {
  FaBars,
  FaLock,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <FaBars />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <FaUserCircle />
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link to="/account/profile" className="dropdown-item">
              <FaUser className="mr-2" /> Profil
            </Link>
            <div className="dropdown-divider" />
            <Link to="/account/update-password" className="dropdown-item">
              <FaLock className="mr-2" /> Update Password
            </Link>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item text-danger">
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
