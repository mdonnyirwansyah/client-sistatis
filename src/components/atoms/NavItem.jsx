import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ title, url, icon }) {
    return (
        <li className="nav-item">
            <NavLink
                to={url}
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-white'
                }
            >
                <div className="d-flex align-items-center">
                    {icon}
                    <p>{title}</p>
                </div>
            </NavLink>
        </li>
    );
}

export default NavItem;
