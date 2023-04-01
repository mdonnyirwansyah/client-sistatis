import React from 'react';
import { Main } from '../../../components';
import { DataThesisSeminars } from '../../../fetch';

function ThesisDefence() {
    const name = 'Sidang Tugas Akhir';

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

export default ThesisDefence;
