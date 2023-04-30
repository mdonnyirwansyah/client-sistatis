import React from 'react';
import {
    FaBars,
    FaLock,
    FaSignOutAlt,
    FaUser,
    FaUserCircle,
} from 'react-icons/fa';
import { useMutation, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../api/authsApi';
import { removeAccount, removeAuthentication } from '../../api';
import { toast } from 'react-hot-toast';
import { useGetMe } from '../../hooks/useAuths';

function Header() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data } = useGetMe();

    const mutation = useMutation({
        mutationFn: logout,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            removeAuthentication();
            removeAccount();
            queryClient.removeQueries({ queryKey: ['account'], exact: true });

            toast.success(data.data.message);

            return navigate(`/login`, { replace: true });
        },
    });

    const handleLogout = (e) => {
        e.preventDefault();

        mutation.mutate();
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
                        className={`nav-link ${
                            data?.is_offline ? 'text-danger' : 'text-success'
                        }`}
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
