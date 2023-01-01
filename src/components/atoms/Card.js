import React from "react";

function Card({ children, title }) {
  return (
    <div className="card">
      {!title ? (
        <div className="card-body">{children}</div>
      ) : (
        <>
          <div className="card-header">{title}</div>
          <div className="card-body">{children}</div>
        </>
      )}
    </div>
  );
}

export default Card;
