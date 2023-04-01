import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';

function NavTreeview({ children, title, icon, active }) {
    const [isMenuOpen, setIsMenuOpen] = useState(active);

    const handleMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
    };
    return (
        <li
            className={`nav-item ${isMenuOpen ? 'menu-open' : 'text-white'}`}
            style={{ color: `#c2c7d0` }}
        >
            <div className={`nav-link ${active ? 'active' : 'text-white'}`}>
                <div className="d-flex align-items-center">
                    {icon}
                    <p
                        className="d-flex flex-grow-1 justify-content-between align-items-center"
                        style={{ cursor: `pointer` }}
                        onClick={handleMenu}
                    >
                        {title}
                        <FaAngleLeft className="right" />
                    </p>
                </div>
            </div>
            <ul className="nav-treeview">{children}</ul>
        </li>
    );
}

export default NavTreeview;
