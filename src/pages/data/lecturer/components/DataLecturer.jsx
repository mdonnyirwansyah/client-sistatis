import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getLecturer } from '../../../../api/lecturersApi';

function DataThesis() {
    const { id } = useParams();
    const {
        isLoading,
        isError,
        data: lecturer,
    } = useQuery('lecturer', () => getLecturer(id), { retry: false });

    if (isLoading) {
        return 'Loading...';
    }

    if (isError) {
        return 'Something when wrong...';
    }

    return (
        <div className="row">
            <div className="col-sm-6">
                <h2 className="lead">
                    <strong>Identitas</strong>
                </h2>
                <hr />
                <div className="row mb-sm-0 mb-3">
                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                        Nama:
                    </label>
                    <div className="col-sm-9">{lecturer.name}</div>
                </div>
                <div className="row mb-sm-0 mb-3">
                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                        NIP:
                    </label>
                    <div className="col-sm-9">{lecturer.nip}</div>
                </div>
                <div className="row mb-sm-0 mb-3">
                    <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                        Pendidikan:
                    </label>
                    <div className="col-sm-9">{lecturer.major}</div>
                </div>
            </div>
            <div className="col-sm-6 mt-sm-0 mt-3">
                <h2 className="lead">
                    <strong>Kelompok Bidang Keahlian</strong>
                </h2>
                <hr />
                {lecturer.fields.map((field) => {
                    return (
                        <div className="row mb-sm-0 mb-3">
                            <label className="col-sm-3 text-sm-right mb-sm-2 mb-0">
                                {field.status}:
                            </label>
                            <div className="col-sm-9">{field.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DataThesis;
