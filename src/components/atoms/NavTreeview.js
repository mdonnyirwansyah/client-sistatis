import React from "react";
import { FaAngleLeft } from "react-icons/fa";

function NavTreeview({ children, title, icon, active }) {
  return (
    <>
      {active === true ? (
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <div className="d-flex align-items-center">
              {icon}
              <p className="d-flex flex-grow-1 justify-content-between align-items-center">
                {title}
                <FaAngleLeft className="right" />
              </p>
            </div>
          </a>
          <ul className="nav nav-treeview">{children}</ul>
        </li>
      ) : (
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="d-flex align-items-center">
              {icon}
              <p className="d-flex flex-grow-1 justify-content-between align-items-center">
                {title}
                <FaAngleLeft className="right" />
              </p>
            </div>
          </a>
          <ul className="nav nav-treeview">{children}</ul>
        </li>
      )}
    </>
  );
}

export default NavTreeview;
