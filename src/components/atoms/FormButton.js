import React from "react";

function FormButton({ label, type, disabled, onClick }) {
  return (
    <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-9">
        <button type={type} className="btn btn-primary" onClick={onClick} disabled={disabled}>
          {label}
        </button>
      </div>
    </div>
  );
}

export default FormButton;
