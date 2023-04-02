import React from 'react';
import { Main } from '../../../../components';
import { DataThesisSeminars } from '../../../../fetch';

function ThesisProposal() {
    const name = 'Seminar Proposal Tugas Akhir';

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

export default ThesisProposal;
