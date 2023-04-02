import React from 'react';
import { Main, Card } from '../../../components';
import { DataThesis } from '../../../fetch';

function ThesisEdit() {
    return (
        <Main title="Edit Data Tugas Akhir">
            <Card>
                <DataThesis />
            </Card>
        </Main>
    );
}

export default ThesisEdit;
