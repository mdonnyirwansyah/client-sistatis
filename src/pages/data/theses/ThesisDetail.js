import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesis } from '../../../fetch';

function ThesisDetail() {
    return (
        <Main title="Lihat Data Tugas Akhir">
            <Card>
                <DataThesis />
            </Card>
        </Main>
    );
}

export default ThesisDetail;
