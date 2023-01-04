import React from "react";

function FormSelect({
  children,
  label,
  id,
  name,
  onChange,
  value,
  errors,
}) {
  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-sm-3 col-form-label text-sm-right">
        {label}
      </label>
      <div className="col-sm-9">
        <select
          className={
            errors?.length > 0 ? "form-control is-invalid" : "form-control"
          }
          id={id}
          name={name}
          onChange={onChange}
          value={value}
        >
          <option value="" disabled={value ? true : false}>
            Pilih {label}
          </option>
          {children}
        </select>
        <small className="invalid-feedback">
          {errors?.map((error) => error)}
        </small>
      </div>
    </div>
  );
}

export default FormSelect;
