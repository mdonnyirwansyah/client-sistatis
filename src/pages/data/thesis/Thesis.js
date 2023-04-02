import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Main } from '../../../components';
import { DataTheses } from '../../../fetch';
import { useSelector } from 'react-redux';

function Thesis() {
    const { user } = useSelector((state) => state.auth);

    return (
        <Main title="Data Tugas Akhir">
            <Card>
                <div>
                    {user?.role === 'Administrator' ||
                    user?.role === 'Coordinator' ? (
                        <Link
                            to="/data/thesis/create"
                            className="btn btn-primary mr-3"
                        >
                            Tambah
                        </Link>
                    ) : null}
                    <Link
                        to="/data/thesis/lecturer-filter"
                        className="btn btn-info"
                    >
                        Filter Dosen
                    </Link>
                </div>
                <hr />
                <DataTheses />
            </Card>
        </Main>
    );
}

export default Thesis;
