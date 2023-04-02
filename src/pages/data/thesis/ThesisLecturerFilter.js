import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesesLecturerFilter } from '../../../fetch';

function ThesisLecturerFilter() {
    return (
        <Main title="Data Tugas Akhir">
            <Card>
                <DataThesesLecturerFilter />
            </Card>
        </Main>
    );
}

export default ThesisLecturerFilter;
