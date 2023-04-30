import { FormSelect } from '../../../../../components';
import { useLecturers } from '../../../../../hooks/useLecturers';

const FormThesisLecturerFilter = ({ onSubmit }) => {
    const { data: lecturers } = useLecturers();

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm-3">
                    <FormSelect
                        label="Dosen"
                        type="no-label"
                        name="lecturer_id"
                        id="lecturer_id"
                    >
                        {lecturers?.length > 0 ? (
                            lecturers?.map((lecturer, index) => {
                                return (
                                    <option key={index} value={lecturer.id}>
                                        {lecturer.name}
                                    </option>
                                );
                            })
                        ) : (
                            <option disabled>Data not found.</option>
                        )}
                    </FormSelect>
                </div>
                <div className="col-sm-3">
                    <FormSelect
                        label="Status Dosen"
                        type="no-label"
                        name="lecturer_status"
                        id="lecturer_status"
                    >
                        <option value="Pembimbing 1">Pembimbing 1</option>
                        <option value="Pembimbing 2">Pembimbing 2</option>
                        <option value="Penguji">Penguji</option>
                    </FormSelect>
                </div>
                <div className="col-sm-3">
                    <FormSelect
                        label="Status Mahasiswa"
                        type="no-label"
                        name="student_status"
                        id="student_status"
                    >
                        <option value="Belum Lulus">Belum Lulus</option>
                        <option value="Lulus">Lulus</option>
                    </FormSelect>
                </div>
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-block btn-primary">
                        Filter
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormThesisLecturerFilter;
