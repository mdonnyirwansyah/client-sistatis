import React from 'react';
import { Main } from '../../../components';
import { DataThesisSeminars } from '../../../fetch';

function ThesisResult() {
    const name = 'Seminar Hasil Tugas Akhir';

    return (
        <Main title={`Data ${name}`}>
            <div className="card">
                <div className="card-body">
                    <DataThesisSeminars name={name} />
                </div>
            </div>
        </Main>
    );
}

export default ThesisResult;
