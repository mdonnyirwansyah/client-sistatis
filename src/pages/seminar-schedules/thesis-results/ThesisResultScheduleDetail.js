import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminarSchedule } from '../../../fetch';

function ThesisResultScheduleDetail() {
    return (
        <Main title="Lihat Penjadwalan Seminar Hasil TA">
            <Card>
                <DataThesisSeminarSchedule />
            </Card>
        </Main>
    );
}

export default ThesisResultScheduleDetail;
