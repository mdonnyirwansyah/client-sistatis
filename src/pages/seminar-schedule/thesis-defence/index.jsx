import React from 'react';
import { Card, Main } from '../../../components';
import { ThesisSeminarScheduleTable } from '../components';

function ThesisDefenceSchedule() {
    const seminar = {
        type: 'Sidang Tugas Akhir',
        key: 'thesisDefenceSchedules',
    };

    return (
        <Main title={`Penjadwalan ${seminar.type}`}>
            <Card>
                <ThesisSeminarScheduleTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisDefenceSchedule;
