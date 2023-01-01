import { useQuery } from "react-query";
import { getFieldLecturers } from "../api/fieldsApi";

const DataFieldLecturers = ({ field_id = 0, selected_id }) => {
  const {
    isLoading,
    isError,
    data: lecturers,
  } = useQuery(["lecturers", field_id], () => getFieldLecturers(field_id));

  if (isLoading) {
    return (
      <>
        <option disabled selected>
          Pilih Pembimbing
        </option>
        <option disabled>Loading...</option>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <option disabled selected>
          Pilih Pembimbing
        </option>
        <option disabled>Something when wrong...</option>
      </>
    );
  }

  return (
    <>
      <option disabled selected>
        Pilih Pembimbing
      </option>
      {lecturers
        ? lecturers.map((lecturer, index) => {
            return (
              <option
                key={index}
                value={lecturer.id}
                disabled={selected_id == lecturer.id ? true : false}
              >
                {lecturer.name}
              </option>
            );
          })
        : null}
    </>
  );
};

export default DataFieldLecturers;
