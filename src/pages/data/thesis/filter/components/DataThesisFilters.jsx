import { FaEye } from 'react-icons/fa';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
} from '../../../../../components';
import { useThesisFilters } from '../../../../../hooks/useTheses';

function DataThesisFilters({ params }) {
    const { isLoading, isError, data } = useThesisFilters(params);

    if (isLoading) {
        return <DataLoading colSpan="10" />;
    }

    if (isError) {
        return <DataError colSpan="10" />;
    }

    return data?.data.length > 0 ? (
        data.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{data.meta.from + index}</td>
                    <td>{item.thesis.register_date}</td>
                    <td>{item.nim}</td>
                    <td>{item.name}</td>
                    <td>{item.thesis.title}</td>
                    <td>{item.thesis.field.name}</td>
                    <td>{item.thesis.status}</td>
                    <td>{item.thesis.thesis_duration}</td>
                    <td>
                        {item.thesis.finish_date ? (
                            item.thesis.finish_date
                        ) : (
                            <span className="badge badge-warning text-white">
                                Belum Ditentukan
                            </span>
                        )}
                    </td>
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
        <DataNotFound colSpan="10" />
    );
}

export default DataThesisFilters;
