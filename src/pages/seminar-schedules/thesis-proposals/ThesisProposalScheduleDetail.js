import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminarSchedule } from '../../../fetch';

function ThesisProposalScheduleDetail() {
    return (
        <Main title="Lihat Penjadwalan Seminar Proposal TA">
            <Card>
                <DataThesisSeminarSchedule />
            </Card>
        </Main>
    );
}

export default ThesisProposalScheduleDetail;
