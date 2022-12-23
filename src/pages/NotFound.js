import React from "react";
import { Link } from "react-router-dom";
import { Error } from "../components";

function NotFound() {
  return (
    <Error title="404 Not Found">
      <h3>
        <i className="fas fa-exclamation-triangle text-warning" /> Oops! Page
        not found.
      </h3>
      <p>
        We could not find the page you were looking for. Meanwhile, you may{" "}
        <Link to="/">return to dashboard</Link>.
      </p>
    </Error>
  );
}

export default NotFound;
