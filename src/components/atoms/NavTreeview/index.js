import React from "react";
import { FaAngleLeft } from "react-icons/fa";

function NavTreeview({ children, title, icon, active }) {
  return (
    <>
      {active === true ? (
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {icon}
                <p>{title}</p>
              </div>
              <FaAngleLeft className="right" />
            </div>
          </a>
          <ul className="nav nav-treeview">{children}</ul>
        </li>
      ) : (
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {icon}
                <p>{title}</p>
              </div>
              <FaAngleLeft className="right" />
            </div>
          </a>
          <ul className="nav nav-treeview">{children}</ul>
        </li>
      )}
    </>
  );
}

export default NavTreeview;
