import { useQuery } from "react-query";
import { getLocations } from "../api/locationsApi";

const DataLocations = () => {
  const {
    isLoading,
    isError,
    data: locations,
  } = useQuery("locations", getLocations);

  if (isLoading) {
    return (
      <>
        <option disabled selected>
          Pilih Lokasi
        </option>
        <option disabled>Loading...</option>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <option disabled selected>
          Pilih Lokasi
        </option>
        <option disabled>Something when wrong...</option>
      </>
    );
  }

  return (
    <>
      <option disabled selected>
        Pilih Lokasi
      </option>
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
