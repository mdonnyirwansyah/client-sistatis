import React from "react";

function DataNotFound({ colSpan }) {
  return (
    <tr>
      <td className="text-center" colSpan={colSpan}>
        Data is not found.
      </td>
    </tr>
  );
}

export default DataNotFound;
