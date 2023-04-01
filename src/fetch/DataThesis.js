import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { getThesis } from '../api/thesesApi';
import { FormThesisEdit, FormThesisDetail } from '../components';

function DataThesis() {
    const { id } = useParams();
    const location = useLocation();
    const isFormEdit = location.pathname.includes('/edit');
    const {
        isLoading,
        isError,
        data: thesis,
    } = useQuery('thesis', () => getThesis(id), { retry: false });

    if (isLoading) {
        return 'Loading...';
    }

    if (isError) {
        return 'Something when wrong...';
    }

    if (isFormEdit) {
        return <FormThesisEdit data={thesis} />;
    }

    return <FormThesisDetail data={thesis} />;
}

export default DataThesis;
