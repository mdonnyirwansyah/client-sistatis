import { useQuery } from "react-query";
import { getLocations } from "../api/locationsApi";

const DataLocations = () => {
  const {
    isLoading,
    isError,
    data: locations,
  } = useQuery("locations", getLocations, { retry: false });

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
      {locations
        ? locations.map((location, index) => {
            return (
              <option key={index} value={location.id}>
                {location.name}
              </option>
            );
          })
        : null}
    </>
  );
};

export default DataLocations;
