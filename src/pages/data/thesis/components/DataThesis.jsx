import { useLocation, useParams } from 'react-router-dom';
import FormThesisEdit from './FormThesisEdit';
import FormThesisDetail from './FormThesisDetail';
import { useThesis } from '../../../../hooks/useTheses';

function DataThesis() {
    const { id } = useParams();
    const location = useLocation();
    const isFormEdit = location.pathname.includes('/edit');

    const { isLoading, isError, data } = useThesis(id);

    if (isLoading) {
        return 'Loading...';
    }

    if (isError) {
        return 'Something when wrong...';
    }

    if (isFormEdit) {
        return <FormThesisEdit data={data} />;
    }

    return <FormThesisDetail data={data} />;
}

export default DataThesis;
