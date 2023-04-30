import { FormSelect } from '../../../../components/atoms';
import { useSemesters } from '../../../../hooks/useSemesters';

const FormLecturerClassificationFilter = ({ onSubmit }) => {
    const { data: semesters } = useSemesters();

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
                        {semesters?.length > 0 ? (
                            semesters?.map((semester, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={semester.semester}
                                    >
                                        {semester.semester}
                                    </option>
                                );
                            })
                        ) : (
                            <option disabled>Data not found.</option>
                        )}
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

export default FormLecturerClassificationFilter;
