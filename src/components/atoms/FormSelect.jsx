import React, { useEffect, useState } from 'react';

function FormSelect({
    children,
    label,
    type,
    id,
    name,
    readOnly,
    disabled,
    onChange,
    value,
    errors,
}) {
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (value && children) {
            setSelected(value);
        }
    }, [value, children]);

    return (
        <>
            {type === 'no-label' ? (
                <div className="form-group">
                    <select
                        className="custom-select"
                        id={id}
                        name={name}
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                    >
                        <option value="">Pilih {label}</option>
                        {children}
                    </select>
                </div>
            ) : (
                <div className="form-group row">
                    <label
                        htmlFor={id}
                        className="col-sm-3 col-form-label text-sm-right"
                    >
                        {label}
                    </label>
                    <div className="col-sm-9">
                        <select
                            className={
                                errors?.length > 0
                                    ? 'form-control is-invalid'
                                    : 'form-control'
                            }
                            id={id}
                            name={name}
                            onChange={onChange}
                            value={selected}
                            readOnly={readOnly}
                            disabled={disabled}
                        >
                            <option value="" disabled>
                                Pilih {label}
                            </option>
                            {children}
                        </select>
                        <small className="invalid-feedback">
                            {errors?.map((error) => error)}
                        </small>
                    </div>
                </div>
            )}
        </>
    );
}

export default FormSelect;
