import { DataError, DataLoading, DataNotFound } from '../../../components';
import { useThesisClassificationTables } from '../../../hooks/useTheses';

function DataThesisClassifications({ params }) {
    const { isLoading, isError, data } = useThesisClassificationTables(params);

    if (isLoading) {
        return <DataLoading colSpan="8" />;
    }

    if (isError) {
        return <DataError colSpan="8" />;
    }

    return data?.data?.length > 0 ? (
        data?.data?.map((item) => {
            return (
                <tr key={item.generation}>
                    <td>{item.generation}</td>
                    <td>{item.count}</td>
                    <td>{item.gpa_sum}</td>
                    <td>{item.gpa_avg}</td>
                    <td>{item.study_duration_sum}</td>
                    <td>{item.study_duration_avg}</td>
                    <td>{item.thesis_duration_sum}</td>
                    <td>{item.thesis_duration_avg}</td>
                </tr>
            );
        })
    ) : (
        <DataNotFound colSpan="8" />
    );
}

export default DataThesisClassifications;
