import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Error } from '../../components';

function NotFound() {
    return (
        <Error title="404 Not Found">
            <h3 className="d-flex align-items-center">
                <FaExclamationTriangle className="text-warning" />
                <span className="ml-1">Oops! Page not found.</span>
            </h3>
            <p>
                We could not find the page you were looking for. Meanwhile, you
                may
                <Link to="/"> return to dashboard</Link>.
            </p>
        </Error>
    );
}

export default NotFound;
