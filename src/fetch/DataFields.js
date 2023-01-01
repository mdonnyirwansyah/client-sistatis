import React from "react";
import { useQuery } from "react-query";
import { getFields } from "../api/fieldsApi";

function DataFields() {
  const { isLoading, isError, data: fields } = useQuery("fields", getFields);

  if (isLoading) {
    return (
      <>
        <option disabled selected>
          Pilih KBK
        </option>
        <option disabled>Loading...</option>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <option disabled selected>
          Pilih KBK
        </option>
        <option disabled>Something when wrong...</option>
      </>
    );
  }

  return (
    <>
      <option disabled selected>
        Pilih KBK
      </option>
      {fields
        ? fields.map((field, index) => {
            return (
              <option key={index} value={field.id}>
                {field.name}
              </option>
            );
          })
        : null}
    </>
  );
}

export default DataFields;
