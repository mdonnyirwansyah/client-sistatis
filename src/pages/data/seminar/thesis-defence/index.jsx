import React from 'react';
import { Card, Main } from '../../../../components';
import { ThesisSeminarTable } from '../components';

function ThesisDefence() {
    const seminar = {
        type: 'Sidang Tugas Akhir',
        key: 'thesisDefences',
    };

    return (
        <Main title={`Data ${seminar.type}`}>
            <Card>
                <ThesisSeminarTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisDefence;
