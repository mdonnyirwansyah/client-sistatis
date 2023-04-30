import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Main } from '../../../components';
import { ThesisTable } from './components';

function Thesis() {
    return (
        <Main title="Data Tugas Akhir">
            <Card>
                <div>
                    <Link to="/data/thesis/filter" className="btn btn-info">
                        Filter Dosen
                    </Link>
                </div>
                <hr />
                <ThesisTable />
            </Card>
        </Main>
    );
}

export default Thesis;
