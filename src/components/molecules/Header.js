import React from 'react';
import {
    FaBars,
    FaLock,
    FaSignOutAlt,
    FaUser,
    FaUserCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/authSlice';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/login');
    };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <div
                        className="nav-link"
                        data-widget="pushmenu"
                        role="button"
                    >
                        <FaBars />
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <div
                        className="nav-link"
                        data-toggle="dropdown"
                        style={{ cursor: `pointer` }}
                    >
                        <FaUserCircle />
                    </div>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <Link to="/account/profile" className="dropdown-item">
                            <FaUser className="mr-2" /> Profil
                        </Link>
                        <div className="dropdown-divider" />
                        <Link
                            to="/account/update-password"
                            className="dropdown-item"
                        >
                            <FaLock className="mr-2" /> Update Password
                        </Link>
                        <div className="dropdown-divider" />
                        <button
                            className="dropdown-item text-danger"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt className="mr-2" /> Logout
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
