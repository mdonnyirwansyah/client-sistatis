import React from "react";

function Input({ children, label, id, name, type, isInvalid }) {
  return (
    <>
      {type === "select" ? (
        <div className="form-group row">
          <label
            htmlFor={id}
            className="col-sm-3 col-form-label text-right text-left-sm"
          >
            {label}
          </label>
          <div className="col-sm-9">
            <select
              className={isInvalid ? "form-control is-invalid" : "form-control"}
              id={id}
              name={name}
            >
              {children}
            </select>
            <small className="invalid-feedback">{label} wajib diisi.</small>
          </div>
        </div>
      ) : type === "button" ? (
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-9">
            <button type="submit" className="btn btn-primary">
              {label}
            </button>
          </div>
        </div>
      ) : (
        <div className="form-group row">
          <label htmlFor={id} className="col-sm-3 col-form-label text-right">
            {label}
          </label>
          <div className="col-sm-9">
            <input
              type={type}
              className={isInvalid ? "form-control is-invalid" : "form-control"}
              id={id}
              name={name}
            />
            <small className="invalid-feedback">{label} wajib diisi.</small>
          </div>
        </div>
      )}
    </>
  );
}

export default Input;
