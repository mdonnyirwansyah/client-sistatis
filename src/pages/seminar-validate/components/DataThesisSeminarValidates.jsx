import { FaEye } from 'react-icons/fa';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
} from '../../../components';
import { useThesisSeminars } from '../../../hooks/useSeminars';

function DataThesisSeminarValidates({ params, queryKey }) {
    const { isLoading, isError, data } = useThesisSeminars(params, queryKey);

    if (isLoading) {
        return <DataLoading colSpan="7" />;
    }

    if (isError) {
        return <DataError colSpan="7" />;
    }

    return data.data.length > 0 ? (
        data.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{data.meta.from + index}</td>
                    <td>{item.seminar.register_date}</td>
                    <td>
                        {item.seminar.date ? (
                            item.seminar.date
                        ) : (
                            <span className="badge badge-warning text-white">
                                Belum Ditentukan
                            </span>
                        )}
                    </td>
                    <td>{item.student.nim}</td>
                    <td>{item.student.name}</td>
                    <td>{item.thesis.title}</td>
                    <td>
                        <div className="d-flex align-items-center justify-content-center">
                            <ButtonIcon
                                title="Lihat"
                                type="btn-outline-success"
                                icon={<FaEye />}
                                url={`show/${item.id}`}
                            />
                        </div>
                    </td>
                </tr>
            );
        })
    ) : (
        <DataNotFound colSpan="7" />
    );
}

export default DataThesisSeminarValidates;
