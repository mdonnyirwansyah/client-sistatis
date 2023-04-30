import React from 'react';
import { Card, Main } from '../../../components';
import { ThesisSeminarScheduleTable } from '../components';

function ThesisProposalSchedule() {
    const seminar = {
        type: 'Seminar Proposal Tugas Akhir',
        key: 'thesisProposalSchedules',
    };

    return (
        <Main title={`Penjadwalan ${seminar.type}`}>
            <Card>
                <ThesisSeminarScheduleTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisProposalSchedule;
