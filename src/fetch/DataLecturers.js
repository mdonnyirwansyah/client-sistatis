import { useQuery } from 'react-query';
import { getLecturers } from '../api/lecturersApi';

const DataLecturers = ({ disabled, disabledOther, disabledOther2 }) => {
    const {
        isLoading,
        isError,
        data: lecturers,
    } = useQuery('lecturers', getLecturers, {
        retry: false,
    });

    if (isLoading) {
        return (
            <>
                <option disabled>Loading...</option>
            </>
        );
    }

    if (isError) {
        return (
            <>
                <option disabled>Something when wrong...</option>
            </>
        );
    }

    return (
        <>
            {lecturers?.map((lecturer, index) => {
                return (
                    <option
                        key={index}
                        value={lecturer.id}
                        disabled={
                            disabled == lecturer.id ||
                            disabledOther == lecturer.id ||
                            disabledOther2 == lecturer.id
                                ? true
                                : false
                        }
                    >
                        {lecturer.name}
                    </option>
                );
            })}
        </>
    );
};

export default DataLecturers;
