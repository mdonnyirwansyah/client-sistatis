import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Main } from '../../../components';
import { DataTheses } from '../../../fetch';

function Thesis() {
    return (
        <Main title="Data Tugas Akhir">
            <Card>
                <div>
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
