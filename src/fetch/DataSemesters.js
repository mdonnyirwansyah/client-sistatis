import { useQuery } from "react-query";
import { getSemesters } from "../api/semestersApi";

const DataSemesters = ({ data }) => {
  const {
    isLoading,
    isError,
    data: semesters,
  } = useQuery("semesters", getSemesters, { retry: false });

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
      {semesters
        ? semesters.map((semester, index) => {
            return (
              <option
                key={index}
                value={semester.semester}
                selected={semester.semester == data ? true : false}
              >
                {semester.semester}
              </option>
            );
          })
        : null}
    </>
  );
};

export default DataSemesters;
