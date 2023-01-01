import React from "react";

function DataError({ colSpan }) {
  return (
    <tr>
      <td className="text-center" colSpan={colSpan}>
        Something when wrong...
      </td>
    </tr>
  );
}

export default DataError;
