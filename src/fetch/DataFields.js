import { useQuery } from 'react-query';
import { getFields } from '../api/fieldsApi';

const DataFields = ({ data }) => {
    const {
        isLoading,
        isError,
        data: fields,
    } = useQuery('fields', getFields, { retry: false });

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
            {fields
                ? fields.map((field, index) => {
                      return (
                          <option
                              key={index}
                              value={field.id}
                              selected={field.id == data ? true : false}
                          >
                              {field.name}
                          </option>
                      );
                  })
                : null}
        </>
    );
};

export default DataFields;
