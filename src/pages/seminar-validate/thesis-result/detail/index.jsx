import React from 'react';
import { Card, Main } from '../../../../components';
import { DataThesisSeminarValidate } from '../../components';

function ThesisResultValidateDetail() {
    return (
        <Main title="Lihat Validasi Seminar Hasil TA">
            <Card>
                <DataThesisSeminarValidate />
            </Card>
        </Main>
    );
}

export default ThesisResultValidateDetail;
