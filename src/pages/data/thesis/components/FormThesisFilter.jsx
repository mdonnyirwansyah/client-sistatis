import { FormSelect } from '../../../../components';
import { useFields } from '../../../../hooks/useFields';

const FormThesisFilter = ({ onSubmit }) => {
    const { data: fields } = useFields();

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
                        {fields?.length > 0 ? (
                            fields?.map((field, index) => {
                                return (
                                    <option key={index} value={field.id}>
                                        {field.name}
                                    </option>
                                );
                            })
                        ) : (
                            <option disabled>Data not found.</option>
                        )}
                    </FormSelect>
                </div>
                <div className="col-sm-5">
                    <FormSelect
                        label="Status TA"
                        type="no-label"
                        name="thesis_status"
                        id="thesis_status"
                    >
                        <option value="0">Pendaftaran Tugas Akhir</option>
                        <option value="1">Seminar Proposal Tugas Akhir</option>
                        <option value="2">Seminar Hasil Tugas Akhir</option>
                        <option value="3">Sidang Tugas Akhir</option>
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

export default FormThesisFilter;
