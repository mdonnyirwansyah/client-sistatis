import React from 'react';
import { Card, Main } from '../../../components';
import { DataLecturer } from '../../../fetch';

function LecturerDetail() {
    return (
        <Main title="Lihat Data Dosen">
            <Card>
                <DataLecturer />
            </Card>
        </Main>
    );
}

export default LecturerDetail;
