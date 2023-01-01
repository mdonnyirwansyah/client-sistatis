import React from "react";

function DataLoading({ colSpan }) {
  return (
    <tr>
      <td className="text-center" colSpan={colSpan}>
        Data is loading...
      </td>
    </tr>
  );
}

export default DataLoading;
