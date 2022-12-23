import React from "react";
import { PageLink } from "../../../components";

function Pagination({ pageLinks }) {
  return (
    <ul className="pagination pagination-sm m-0 float-right">
      {pageLinks?.map((pageLink, index) => {
        return <PageLink key={index} title={pageLink.title} />;
      })}
    </ul>
  );
}

export default Pagination;
