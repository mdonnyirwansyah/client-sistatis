import React from 'react';
import { PageLink } from '../../components';

function Pagination({ data, onClick }) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div>
                Showing {data.from ?? 0} to {data.to ?? 0} of {data.total}{' '}
                entries
            </div>
            <ul className="pagination pagination-sm m-0">
                {data.links.map((item, index) => {
                    return (
                        <PageLink
                            onClick={onClick}
                            key={index}
                            label={item.label}
                            active={item.active}
                            value={item.url?.split('=')[1]}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default Pagination;
