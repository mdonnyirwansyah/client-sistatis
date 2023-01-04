import { useQuery } from "react-query";
import { getLecturersByField } from "../api/lecturersApi";

const DataLecturersByField = ({ field_id, selected_id, data }) => {
  const {
    isLoading,
    isError,
    data: lecturers,
  } = useQuery(["lecturers", field_id], () => getLecturersByField(field_id));

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
      {lecturers
        ? lecturers.map((lecturer, index) => {
            return (
              <option
                key={index}
                value={lecturer.id}
                disabled={selected_id == lecturer.id ? true : false}
                selected={lecturer.id == data ? true : false}
              >
                {lecturer.name}
              </option>
            );
          })
        : null}
    </>
  );
};

export default DataLecturersByField;
