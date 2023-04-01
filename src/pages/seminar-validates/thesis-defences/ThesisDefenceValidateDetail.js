import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminarValidate } from '../../../fetch';

function ThesisDefenceValidateDetail() {
    return (
        <Main title="Lihat Validasi Sidang TA">
            <Card>
                <DataThesisSeminarValidate />
            </Card>
        </Main>
    );
}

export default ThesisDefenceValidateDetail;
