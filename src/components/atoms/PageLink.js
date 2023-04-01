import React from 'react';

function PageLink({ label, value, active, onClick }) {
    return (
        <li className={`page-item  ${active ? 'active' : ''}`}>
            <button
                onClick={onClick}
                dangerouslySetInnerHTML={{ __html: label }}
                className="page-link"
                data-value={value}
                disabled={value ? false : true}
            ></button>
        </li>
    );
}

export default PageLink;
