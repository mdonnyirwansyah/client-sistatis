import React from 'react';

function Nav({ children }) {
    return (
        <nav className="mt-2">
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                {children}
            </ul>
        </nav>
    );
}

export default Nav;
