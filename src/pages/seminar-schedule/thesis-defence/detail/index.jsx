import React from 'react';
import { Card, Main } from '../../../../components';
import { DataThesisSeminarSchedule } from '../../components';

function ThesisDefenceScheduleDetail() {
    return (
        <Main title="Lihat Penjadwalan Sidang TA">
            <Card>
                <DataThesisSeminarSchedule />
            </Card>
        </Main>
    );
}

export default ThesisDefenceScheduleDetail;
