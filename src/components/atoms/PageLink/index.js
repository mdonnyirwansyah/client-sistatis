import React from "react";
import { Link } from "react-router-dom";

function PageLink({ title, url }) {
  return (
    <li className="page-item">
      <Link className="page-link" to={url}>
        {title}
      </Link>
    </li>
  );
}

export default PageLink;
