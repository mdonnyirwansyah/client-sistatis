import React from 'react';
import { Card, Main } from '../../../../components';
import { ThesisFilterTable } from './components';

function ThesisFilter() {
    return (
        <Main title="Data Tugas Akhir">
            <Card>
                <ThesisFilterTable />
            </Card>
        </Main>
    );
}

export default ThesisFilter;
