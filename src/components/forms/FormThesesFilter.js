import { FormSelect } from '../../components';
import { DataFields } from '../../fetch';

const FormThesesFilter = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm-5">
                    <FormSelect
                        label="KBK"
                        type="no-label"
                        name="field_id"
                        id="field_id"
                    >
                        <DataFields />
                    </FormSelect>
                </div>
                <div className="col-sm-5">
                    <FormSelect
                        label="Status"
                        type="no-label"
                        name="status"
                        id="status"
                    >
                        <option value="Pendaftaran Tugas Akhir">
                            Pendaftaran Tugas Akhir
                        </option>
                        <option value="Seminar Proposal Tugas Akhir">
                            Seminar Proposal Tugas Akhir
                        </option>
                        <option value="Seminar Hasil Tugas Akhir">
                            Seminar Hasil Tugas Akhir
                        </option>
                        <option value="Sidang Tugas Akhir">
                            Sidang Tugas Akhir
                        </option>
                    </FormSelect>
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-block btn-primary">
                        Filter
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormThesesFilter;
