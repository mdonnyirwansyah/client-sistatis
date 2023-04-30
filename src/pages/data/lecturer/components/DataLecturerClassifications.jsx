import { FaEye } from 'react-icons/fa';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
} from '../../../../components';
import { useLecturerClassifications } from '../../../../hooks/useLecturers';

function DataLecturerClassifications({ params }) {
    const { isLoading, isError, data } = useLecturerClassifications(params);

    if (isLoading) {
        return <DataLoading colSpan="12" />;
    }

    if (isError) {
        return <DataError colSpan="12" />;
    }

    return data.data.length > 0 ? (
        data.data.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td>{data.meta.from + index}</td>
                    <td>{item.nip}</td>
                    <td>{item.name}</td>
                    <td>{item.supervisors_1_by_semester_count}</td>
                    <td>{item.supervisors_2_by_semester_count}</td>
                    <td>{item.examiners_by_semester_count}</td>
                    <td>{item.chief_of_examiners_by_semester_count}</td>
                    <td>{item.supervisors1_count}</td>
                    <td>{item.supervisors2_count}</td>
                    <td>{item.examiners_count}</td>
                    <td>{item.chief_of_examiners_count}</td>
                    <td>
                        <div className="d-flex align-items-center justify-content-center">
                            <ButtonIcon
                                title="Lihat"
                                type={'btn-outline-success'}
                                icon={<FaEye />}
                                url={`show/${item.id}`}
                            />
                        </div>
                    </td>
                </tr>
            );
        })
    ) : (
        <DataNotFound colSpan="12" />
    );
}

export default DataLecturerClassifications;
