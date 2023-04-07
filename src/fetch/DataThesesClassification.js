import { DataError, DataLoading, DataNotFound } from '../components';
import { useThesesClassification } from '../hooks/useTheses';

function DataThesesClassification() {
    const { isLoading, isError, data } = useThesesClassification();

    if (isLoading) {
        return <DataLoading colSpan="8" />;
    }

    if (isError) {
        return <DataError colSpan="8" />;
    }

    return data?.length > 0 ? (
        data.map((item) => {
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

export default DataThesesClassification;
