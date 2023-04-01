import React from 'react';

function FormInput({
    label,
    type,
    id,
    name,
    disabled,
    onChange,
    value,
    errors,
}) {
    return (
        <div className="form-group row">
            <label
                htmlFor={id}
                className="col-sm-3 col-form-label text-sm-right"
            >
                {label}
            </label>
            <div className="col-sm-9">
                <input
                    type={type}
                    className={
                        errors?.length > 0
                            ? 'form-control is-invalid'
                            : 'form-control'
                    }
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                />
                <small className="invalid-feedback">
                    {errors?.map((error) => error)}
                </small>
            </div>
        </div>
    );
}

export default FormInput;
