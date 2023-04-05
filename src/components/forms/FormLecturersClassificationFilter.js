import { DataSemesters } from '../../fetch';
import { FormSelect } from '../atoms';

const FormLecturersClassificationFilter = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm-10">
                    <FormSelect
                        label="Semester"
                        type="no-label"
                        name="semester"
                        id="semester"
                    >
                        <DataSemesters />
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

export default FormLecturersClassificationFilter;
